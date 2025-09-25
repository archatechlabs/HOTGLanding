# Firebase Setup Instructions

## 1. Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Create a project" or "Add project"
3. Enter project name: "History of the Game"
4. Enable Google Analytics (optional)
5. Click "Create project"

## 2. Enable Authentication

1. In your Firebase project, go to "Authentication" in the left sidebar
2. Click "Get started"
3. Go to "Sign-in method" tab
4. Enable "Email/Password" provider
5. Click "Save"

## 3. Create Firestore Database

1. Go to "Firestore Database" in the left sidebar
2. Click "Create database"
3. Choose "Start in test mode" (for development)
4. Select a location for your database
5. Click "Done"

## 4. Get Firebase Configuration

1. Go to "Project Settings" (gear icon)
2. Scroll down to "Your apps" section
3. Click "Add app" and select Web app (</> icon)
4. Register your app with a nickname
5. Copy the Firebase configuration object

## 5. Set Environment Variables

Create a `.env.local` file in your project root with:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key_here
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

## 6. Security Rules (Optional)

For production, update your Firestore security rules:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Users can read/write their own data
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

## 7. Test the Integration

1. Start your development server: `npm run dev`
2. Go to `/register` and create a test account
3. Go to `/login` and sign in with the test account
4. Check Firebase Console to see the user in Authentication and Firestore

## Features Included

- ✅ User registration with email/password
- ✅ User login/logout
- ✅ User profile storage in Firestore
- ✅ Email uniqueness validation
- ✅ Password generation for new users
- ✅ User data retrieval and updates
- ✅ Admin user listing functionality

## Next Steps

1. Set up email verification (optional)
2. Add password reset functionality
3. Implement user roles and permissions
4. Add social login providers (Google, Twitter, etc.)
5. Set up Firebase Analytics for user tracking
