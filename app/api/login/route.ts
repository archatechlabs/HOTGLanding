import { NextRequest, NextResponse } from 'next/server'
import { signInUser } from '@/lib/userService'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate required fields
    if (!body.email || !body.password) {
      return NextResponse.json(
        { error: 'Email and password are required' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Sign in user with Firebase
    const result = await signInUser(body.email, body.password)

    if (result.success) {
      console.log('User signed in:', {
        uid: result.user?.uid,
        email: result.user?.email,
        displayName: result.user?.displayName
      })

      return NextResponse.json(
        { 
          success: true, 
          message: 'Sign in successful',
          user: {
            uid: result.user?.uid,
            email: result.user?.email,
            displayName: result.user?.displayName,
            city: result.user?.city,
            state: result.user?.state,
            favoritePlayer: result.user?.favoritePlayer
          }
        },
        { status: 200 }
      )
    } else {
      return NextResponse.json(
        { error: result.error || 'Sign in failed' },
        { status: 401 }
      )
    }

  } catch (error) {
    console.error('Sign in error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
