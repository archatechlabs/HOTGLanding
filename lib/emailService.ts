import nodemailer from 'nodemailer'

// Email configuration - in production, use environment variables
const transporter = nodemailer.createTransport({
  service: 'gmail', // You can use other services like SendGrid, Mailgun, etc.
  auth: {
    user: process.env.EMAIL_USER || 'your-email@gmail.com',
    pass: process.env.EMAIL_PASS || 'your-app-password'
  }
})

export interface WelcomeEmailData {
  name: string
  email: string
  city: string
  state: string
  favoritePlayer: string
}

export async function sendWelcomeEmail(userData: WelcomeEmailData) {
  try {
    const mailOptions = {
      from: process.env.EMAIL_USER || 'noreply@historyofthegame.io',
      to: userData.email,
      subject: 'Welcome to History of the Game! 🏀',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0f0f23; color: #ffffff; padding: 20px;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #00d4ff; font-size: 32px; margin: 0;">HISTORY OF THE GAME</h1>
            <p style="color: #8a2be2; font-size: 18px; margin: 10px 0;">Web3 Basketball Museum</p>
          </div>
          
          <div style="background: linear-gradient(135deg, #1a1a2e, #16213e); padding: 30px; border-radius: 15px; margin-bottom: 20px;">
            <h2 style="color: #00d4ff; font-size: 24px; margin-bottom: 20px;">Welcome to the Game, ${userData.name}! 🎉</h2>
            
            <p style="font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
              You're now officially part of the History of the Game community! We're thrilled to have you join us on this journey through basketball history.
            </p>
            
            <div style="background: rgba(0, 212, 255, 0.1); padding: 20px; border-radius: 10px; margin: 20px 0;">
              <h3 style="color: #00d4ff; margin-top: 0;">Your Profile:</h3>
              <p><strong>Location:</strong> ${userData.city}, ${userData.state}</p>
              <p><strong>Favorite Player:</strong> ${userData.favoritePlayer}</p>
              <p><strong>Email:</strong> ${userData.email}</p>
            </div>
            
            <p style="font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
              As a member of our community, you'll receive:
            </p>
            
            <ul style="color: #e2e8f0; line-height: 1.8;">
              <li>🎫 Exclusive access to IRL events and pop-up museums</li>
              <li>🎁 Special airdrops and NFT distributions</li>
              <li>📱 Updates on new exhibits and features</li>
              <li>🏀 Behind-the-scenes content from basketball legends</li>
              <li>🌍 Invitations to global community events</li>
            </ul>
          </div>
          
          <div style="text-align: center; margin: 30px 0;">
            <a href="https://hotg-landing-pd79eao3d-archatech-labs.vercel.app" 
               style="background: linear-gradient(45deg, #00d4ff, #8a2be2); color: white; padding: 15px 30px; text-decoration: none; border-radius: 25px; font-weight: bold; display: inline-block;">
              Explore the Museum
            </a>
          </div>
          
          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #333;">
            <p style="color: #888; font-size: 14px; margin: 0;">
              History of the Game - Web3 Basketball Museum<br>
              Bringing basketball history to life through immersive technology
            </p>
          </div>
        </div>
      `
    }

    const result = await transporter.sendMail(mailOptions)
    console.log('Welcome email sent:', result.messageId)
    
    return {
      success: true,
      messageId: result.messageId
    }
  } catch (error) {
    console.error('Email sending error:', error)
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    }
  }
}

// For now, we'll just log the email data since we don't have email credentials set up
export async function logWelcomeEmail(userData: WelcomeEmailData) {
  console.log('Welcome Email Data:', {
    to: userData.email,
    name: userData.name,
    city: userData.city,
    state: userData.state,
    favoritePlayer: userData.favoritePlayer,
    timestamp: new Date().toISOString()
  })
  
  return {
    success: true,
    message: 'Email data logged (email service not configured)'
  }
}
