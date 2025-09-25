import { initializeApp, getApps } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getAnalytics, isSupported } from 'firebase/analytics'

const firebaseConfig = {
  apiKey: "AIzaSyAhMoOPSsp9Ixf90UJUvVBZEoiCaswe434",
  authDomain: "historyofthegame.firebaseapp.com",
  projectId: "historyofthegame",
  storageBucket: "historyofthegame.firebasestorage.app",
  messagingSenderId: "721226438679",
  appId: "1:721226438679:web:d9e444ac51f891e5a6e452",
  measurementId: "G-WPNGPCM4HJ"
}

// Initialize Firebase only if it hasn't been initialized already
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0]

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app)

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app)

// Initialize Firebase Analytics (only in browser environment)
export const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null

export default app
