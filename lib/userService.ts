import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  User,
  updateProfile
} from 'firebase/auth'
import { 
  doc, 
  setDoc, 
  getDoc, 
  updateDoc,
  collection,
  query,
  where,
  getDocs
} from 'firebase/firestore'
import { auth, db } from './firebase'
import { trackUserRegistration, trackUserLogin } from './analytics'

export interface UserProfile {
  uid: string
  email: string
  displayName: string
  phone: string
  city: string
  state: string
  favoritePlayer: string
  walletAddress: string
  createdAt: string
  updatedAt: string
}

export interface RegistrationData {
  name: string
  email: string
  phone: string
  city: string
  state: string
  favoritePlayer: string
  walletAddress: string
}

// Generate a temporary password for new users
function generateTemporaryPassword(): string {
  // Generate a random password that meets Firebase requirements
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*'
  let password = ''
  
  // Ensure at least one uppercase, one lowercase, one number, and one special char
  password += 'A' // uppercase
  password += 'a' // lowercase  
  password += '1' // number
  password += '!' // special char
  
  // Fill the rest randomly
  for (let i = 4; i < 12; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  
  // Shuffle the password
  return password.split('').sort(() => Math.random() - 0.5).join('')
}

// Register a new user with email/password and create profile
export async function registerUser(data: RegistrationData) {
  try {
    console.log('🚀 Starting user registration for:', data.email)
    
    // Add timeout wrapper for Firebase operations
    const timeoutPromise = new Promise((_, reject) => 
      setTimeout(() => reject(new Error('Registration timeout after 15 seconds')), 15000)
    )
    
    const registrationPromise = createUserWithEmailAndPassword(
      auth, 
      data.email, 
      generateTemporaryPassword()
    )
    
    // Race between registration and timeout
    const userCredential = await Promise.race([registrationPromise, timeoutPromise]) as any
    console.log('✅ Firebase user created successfully')
    
    const user = userCredential.user

    // Update the user's display name
    await updateProfile(user, {
      displayName: data.name
    })
    console.log('✅ User profile updated with display name')

    // Create user profile in Firestore
    const userProfile: UserProfile = {
      uid: user.uid,
      email: data.email,
      displayName: data.name,
      phone: data.phone,
      city: data.city,
      state: data.state,
      favoritePlayer: data.favoritePlayer,
      walletAddress: data.walletAddress,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }

    // Save user profile to Firestore (with error handling and timeout)
    try {
    const firestoreTimeout = new Promise((_, reject) => 
      setTimeout(() => reject(new Error('Firestore timeout')), 5000) // 5 second timeout
    )
      
      const firestorePromise = setDoc(doc(db, 'users', user.uid), userProfile)
      await Promise.race([firestorePromise, firestoreTimeout])
      console.log('✅ User profile saved to Firestore')
    } catch (firestoreError) {
      console.warn('⚠️ Firestore save failed, but user was created:', firestoreError)
      // Continue with registration even if Firestore fails
    }

    // Track user registration in analytics
    trackUserRegistration(user.uid, userProfile)

    return {
      success: true,
      user: userProfile,
      message: 'Registration successful'
    }
  } catch (error: any) {
    console.error('❌ Registration error:', error)
    
    // Handle specific Firebase Auth errors
    if (error.code === 'auth/email-already-in-use') {
      return {
        success: false,
        error: 'Email already registered',
        message: 'This email is already registered. Please try signing in instead.'
      }
    } else if (error.code === 'auth/weak-password') {
      return {
        success: false,
        error: 'Password too weak',
        message: 'Password is too weak. Please try again.'
      }
    } else if (error.code === 'auth/invalid-email') {
      return {
        success: false,
        error: 'Invalid email',
        message: 'Please enter a valid email address.'
      }
    }
    
    return {
      success: false,
      error: error.message,
      message: 'Registration failed'
    }
  }
}

// Sign in user with email and password
export async function signInUser(email: string, password: string) {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password)
    const user = userCredential.user
    
    // Get user profile from Firestore
    const userProfile = await getUserProfile(user.uid)
    
    // Track user login in analytics
    trackUserLogin(user.uid)
    
    return {
      success: true,
      user: userProfile,
      message: 'Sign in successful'
    }
  } catch (error: any) {
    console.error('Sign in error:', error)
    return {
      success: false,
      error: error.message,
      message: 'Sign in failed'
    }
  }
}

// Sign out current user
export async function signOutUser() {
  try {
    await signOut(auth)
    return {
      success: true,
      message: 'Sign out successful'
    }
  } catch (error: any) {
    console.error('Sign out error:', error)
    return {
      success: false,
      error: error.message,
      message: 'Sign out failed'
    }
  }
}

// Get user profile from Firestore
export async function getUserProfile(uid: string): Promise<UserProfile | null> {
  try {
    const userDoc = await getDoc(doc(db, 'users', uid))
    
    if (userDoc.exists()) {
      return userDoc.data() as UserProfile
    } else {
      return null
    }
  } catch (error) {
    console.error('Error getting user profile:', error)
    return null
  }
}

// Update user profile
export async function updateUserProfile(uid: string, updates: Partial<UserProfile>) {
  try {
    const userRef = doc(db, 'users', uid)
    const updateData = {
      ...updates,
      updatedAt: new Date().toISOString()
    }
    
    await updateDoc(userRef, updateData)
    
    return {
      success: true,
      message: 'Profile updated successfully'
    }
  } catch (error: any) {
    console.error('Update profile error:', error)
    return {
      success: false,
      error: error.message,
      message: 'Profile update failed'
    }
  }
}

// Get all users (for admin purposes)
export async function getAllUsers() {
  try {
    const usersRef = collection(db, 'users')
    const snapshot = await getDocs(usersRef)
    
    const users: UserProfile[] = []
    snapshot.forEach((doc) => {
      users.push(doc.data() as UserProfile)
    })
    
    return {
      success: true,
      users,
      total: users.length
    }
  } catch (error: any) {
    console.error('Error getting users:', error)
    return {
      success: false,
      error: error.message,
      users: [],
      total: 0
    }
  }
}

// Check if email already exists
export async function checkEmailExists(email: string) {
  try {
    console.log('🔍 Checking if email exists:', email)
    
    const firestoreTimeout = new Promise((_, reject) => 
      setTimeout(() => reject(new Error('Firestore timeout')), 3000) // 3 second timeout
    )
    
    const usersRef = collection(db, 'users')
    const q = query(usersRef, where('email', '==', email.toLowerCase()))
    const firestorePromise = getDocs(q)
    
    const snapshot = await Promise.race([firestorePromise, firestoreTimeout]) as any
    const exists = !snapshot.empty
    console.log('📧 Email exists check result:', exists)
    return exists
  } catch (error) {
    console.warn('⚠️ Firestore email check failed, allowing registration:', error)
    // If Firestore is down, allow registration to proceed
    return false
  }
}