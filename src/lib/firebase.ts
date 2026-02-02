import { initializeApp, getApps, FirebaseApp } from 'firebase/app'
import { getFirestore, Firestore } from 'firebase/firestore'
import { getStorage, FirebaseStorage } from 'firebase/storage'
import { getAuth, Auth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || 'AIzaSyDAO-jAOw0dHc5hGwEvNnc_WS_9HgtjArA',
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || 'nr6ca-1e93d.firebaseapp.com',
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || 'nr6ca-1e93d',
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || 'nr6ca-1e93d.firebasestorage.app',
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || '718944657879',
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || '1:718944657879:web:8820af3a887b8df3226b92',
  measurementId: 'G-QYF2GY05HP',
}

// Initialize Firebase lazily to avoid issues during build
let app: FirebaseApp | undefined
let db: Firestore | undefined
let storage: FirebaseStorage | undefined
let auth: Auth | undefined

function getApp(): FirebaseApp {
  if (!app) {
    app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0]
  }
  return app
}

export function getDb(): Firestore {
  if (!db) {
    db = getFirestore(getApp())
  }
  return db
}

export function getStorageInstance(): FirebaseStorage {
  if (!storage) {
    storage = getStorage(getApp())
  }
  return storage
}

export function getAuthInstance(): Auth {
  if (!auth) {
    auth = getAuth(getApp())
  }
  return auth
}

// For backwards compatibility
export { getDb as db, getStorageInstance as storage, getAuthInstance as auth }
export default getApp
