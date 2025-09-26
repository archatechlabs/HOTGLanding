// Simplified analytics - no Firebase Analytics to prevent mobile crashes
// These functions log to console for development and can be extended later

// Track user registration
export function trackUserRegistration(userId: string, userData: any) {
  console.log('📊 User Registration:', {
    user_id: userId,
    city: userData.city,
    state: userData.state,
    favorite_player: userData.favoritePlayer,
    has_wallet: !!userData.walletAddress
  })
}

// Track user login
export function trackUserLogin(userId: string) {
  console.log('📊 User Login:', {
    user_id: userId
  })
}

// Track page views
export function trackPageView(pageName: string) {
  console.log('📊 Page View:', {
    page_name: pageName
  })
}

// Track button clicks
export function trackButtonClick(buttonName: string, location: string) {
  console.log('📊 Button Click:', {
    button_name: buttonName,
    location: location
  })
}

// Track form submissions
export function trackFormSubmission(formName: string, success: boolean) {
  console.log('📊 Form Submission:', {
    form_name: formName,
    success: success
  })
}

// Track IRL event interest
export function trackEventInterest(eventName: string, action: string) {
  console.log('📊 Event Interest:', {
    event_name: eventName,
    action: action // 'view', 'notify', 'register'
  })
}
