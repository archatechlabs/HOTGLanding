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

// Register a new user with email/password and create profile
export async function registerUser(data: RegistrationData) {
  try {
    // Create user account with email and password
    const userCredential = await createUserWithEmailAndPassword(
      auth, 
      data.email, 
      generateTemporaryPassword() // We'll generate a temp password
    )
    
    const user = userCredential.user

    // Update the user's display name
    await updateProfile(user, {
      displayName: data.name
    })

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

    // Save user profile to Firestore
    await setDoc(doc(db, 'users', user.uid), userProfile)

    return {
      success: true,
      user: userProfile,
      message: 'Registration successful'
    }
  } catch (error: any) {
    console.error('Registration error:', error)
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
    const usersRef = collection(db, 'users')
    const q = query(usersRef, where('email', '==', email.toLowerCase()))
    const snapshot = await getDocs(q)
    
    return !snapshot.empty
  } catch (error) {
    console.error('Error checking email:', error)
    return false
  }
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
