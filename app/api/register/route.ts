import { NextRequest, NextResponse } from 'next/server'

// In a production environment, you would use a proper database
// For now, we'll use a simple in-memory store for demonstration
// In production, replace this with your database of choice (PostgreSQL, MongoDB, etc.)

interface UserData {
  name: string
  email: string
  phone: string
  city: string
  state: string
  favoritePlayer: string
  walletAddress: string
  registeredAt: string
  id: string
}

// Simple in-memory store (replace with database in production)
const users: UserData[] = []

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate required fields
    const requiredFields = ['name', 'email', 'phone', 'city', 'state', 'favoritePlayer', 'walletAddress']
    const missingFields = requiredFields.filter(field => !body[field]?.trim())
    
    if (missingFields.length > 0) {
      return NextResponse.json(
        { error: `Missing required fields: ${missingFields.join(', ')}` },
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

    // Validate Solana wallet address format
    const solanaAddressRegex = /^[1-9A-HJ-NP-Za-km-z]{32,44}$/
    if (!solanaAddressRegex.test(body.walletAddress)) {
      return NextResponse.json(
        { error: 'Invalid Solana wallet address format' },
        { status: 400 }
      )
    }

    // Check if email already exists
    const existingUser = users.find(user => user.email.toLowerCase() === body.email.toLowerCase())
    if (existingUser) {
      return NextResponse.json(
        { error: 'Email already registered' },
        { status: 409 }
      )
    }

    // Create user data
    const userData: UserData = {
      id: generateId(),
      name: body.name.trim(),
      email: body.email.toLowerCase().trim(),
      phone: body.phone.trim(),
      city: body.city.trim(),
      state: body.state.trim(),
      favoritePlayer: body.favoritePlayer.trim(),
      walletAddress: body.walletAddress.trim(),
      registeredAt: new Date().toISOString()
    }

    // Store user data (in production, save to database)
    users.push(userData)

    // In production, you would also:
    // 1. Send welcome email
    // 2. Add to email marketing list
    // 3. Send SMS confirmation
    // 4. Log registration event
    // 5. Trigger welcome sequence

    console.log('New user registered:', {
      id: userData.id,
      name: userData.name,
      email: userData.email,
      city: userData.city,
      state: userData.state,
      favoritePlayer: userData.favoritePlayer,
      walletAddress: userData.walletAddress,
      registeredAt: userData.registeredAt
    })

    return NextResponse.json(
      { 
        success: true, 
        message: 'Registration successful',
        userId: userData.id 
      },
      { status: 201 }
    )

  } catch (error) {
    console.error('Registration error:', error)
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
    return NextResponse.json({
      success: true,
      users: users.map(user => ({
        id: user.id,
        name: user.name,
        email: user.email,
        city: user.city,
        state: user.state,
        favoritePlayer: user.favoritePlayer,
        registeredAt: user.registeredAt
        // Don't return sensitive data like phone and wallet address
      })),
      total: users.length
    })
  } catch (error) {
    console.error('Error retrieving users:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// Helper function to generate unique ID
function generateId(): string {
  return Math.random().toString(36).substr(2, 9) + Date.now().toString(36)
}
