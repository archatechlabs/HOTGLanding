import { analytics } from './firebase'
import { logEvent } from 'firebase/analytics'

// Track user registration
export function trackUserRegistration(userId: string, userData: any) {
  if (analytics) {
    logEvent(analytics, 'user_registration', {
      user_id: userId,
      city: userData.city,
      state: userData.state,
      favorite_player: userData.favoritePlayer,
      has_wallet: !!userData.walletAddress
    })
  }
}

// Track user login
export function trackUserLogin(userId: string) {
  if (analytics) {
    logEvent(analytics, 'user_login', {
      user_id: userId
    })
  }
}

// Track page views
export function trackPageView(pageName: string) {
  if (analytics) {
    logEvent(analytics, 'page_view', {
      page_name: pageName
    })
  }
}

// Track button clicks
export function trackButtonClick(buttonName: string, location: string) {
  if (analytics) {
    logEvent(analytics, 'button_click', {
      button_name: buttonName,
      location: location
    })
  }
}

// Track form submissions
export function trackFormSubmission(formName: string, success: boolean) {
  if (analytics) {
    logEvent(analytics, 'form_submission', {
      form_name: formName,
      success: success
    })
  }
}

// Track IRL event interest
export function trackEventInterest(eventName: string, action: string) {
  if (analytics) {
    logEvent(analytics, 'event_interest', {
      event_name: eventName,
      action: action // 'view', 'notify', 'register'
    })
  }
}
