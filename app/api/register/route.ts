import { NextRequest, NextResponse } from 'next/server'
import { registerUser, checkEmailExists } from '@/lib/userService'
import { logWelcomeEmail } from '@/lib/emailService'

export async function POST(request: NextRequest) {
  try {
    console.log('🚀 Registration API called')
    const body = await request.json()
    console.log('📝 Registration data received:', { 
      name: body.name, 
      email: body.email, 
      city: body.city, 
      state: body.state 
    })
    
    // Validate required fields
    const requiredFields = ['name', 'email', 'phone', 'city', 'state', 'favoritePlayer', 'walletAddress']
    const missingFields = requiredFields.filter(field => !body[field]?.trim())
    
    if (missingFields.length > 0) {
      console.log('❌ Missing required fields:', missingFields)
      return NextResponse.json(
        { error: `Missing required fields: ${missingFields.join(', ')}` },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.email)) {
      console.log('❌ Invalid email format:', body.email)
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Validate Solana wallet address format
    const solanaAddressRegex = /^[1-9A-HJ-NP-Za-km-z]{32,44}$/
    if (!solanaAddressRegex.test(body.walletAddress)) {
      console.log('❌ Invalid Solana wallet address format:', body.walletAddress)
      return NextResponse.json(
        { error: 'Invalid Solana wallet address format' },
        { status: 400 }
      )
    }

    // Check if email already exists in Firebase
    console.log('🔍 Checking if email exists...')
    const emailExists = await checkEmailExists(body.email)
    if (emailExists) {
      console.log('❌ Email already exists:', body.email)
      return NextResponse.json(
        { error: 'Email already registered' },
        { status: 409 }
      )
    }

    // Register user with Firebase
    console.log('👤 Registering user with Firebase...')
    const result = await registerUser({
      name: body.name.trim(),
      email: body.email.toLowerCase().trim(),
      phone: body.phone.trim(),
      city: body.city.trim(),
      state: body.state.trim(),
      favoritePlayer: body.favoritePlayer.trim(),
      walletAddress: body.walletAddress.trim()
    })

    if (result.success) {
      console.log('🎉 NEW USER REGISTERED:', {
        uid: result.user?.uid,
        name: result.user?.displayName,
        email: result.user?.email,
        city: result.user?.city,
        state: result.user?.state,
        favoritePlayer: result.user?.favoritePlayer,
        walletAddress: result.user?.walletAddress,
        createdAt: result.user?.createdAt
      })

      // Send welcome email (for now, just log the data)
      console.log('📧 Sending welcome email...')
      const emailResult = await logWelcomeEmail({
        name: result.user?.displayName || '',
        email: result.user?.email || '',
        city: result.user?.city || '',
        state: result.user?.state || '',
        favoritePlayer: result.user?.favoritePlayer || ''
      })

      console.log('📧 Email notification result:', emailResult)

      return NextResponse.json(
        { 
          success: true, 
          message: 'Registration successful - Welcome email sent!',
          userId: result.user?.uid,
          userEmail: result.user?.email
        },
        { status: 201 }
      )
    } else {
      console.error('❌ REGISTRATION FAILED:', {
        error: result.error,
        message: result.message,
        email: body.email
      })
      
      // Handle specific error cases with appropriate status codes
      if (result.error === 'Email already registered') {
        return NextResponse.json(
          { error: result.message || 'Email already registered' },
          { status: 409 }
        )
      }
      
      return NextResponse.json(
        { error: result.error || 'Registration failed' },
        { status: 400 }
      )
    }

  } catch (error) {
    console.error('❌ Registration API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// GET endpoint to retrieve users (for admin purposes)
export async function GET() {
  try {
    // In production, add authentication and authorization
    const { getAllUsers } = await import('@/lib/userService')
    const result = await getAllUsers()
    
    if (result.success) {
      return NextResponse.json({
        success: true,
        users: result.users.map(user => ({
          uid: user.uid,
          name: user.displayName,
          email: user.email,
          city: user.city,
          state: user.state,
          favoritePlayer: user.favoritePlayer,
          createdAt: user.createdAt
          // Don't return sensitive data like phone and wallet address
        })),
        total: result.total
      })
    } else {
      return NextResponse.json(
        { error: result.error || 'Failed to retrieve users' },
        { status: 500 }
      )
    }
  } catch (error) {
    console.error('Error retrieving users:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
