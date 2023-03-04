import { initializeApp } from 'firebase/app'
import { getFirestore } from "firebase/firestore";


export default defineNuxtPlugin(nuxtApp => {
    const config = useRuntimeConfig();

    const firebaseConfig = {
        apiKey: config.public.FIREBASE_API_KEY,
        authDomain: config.public.FIREBASE_AUTH_DOMAIN,
        projectId: config.public.FIREBASE_PROJECT_ID,
        storageBucket: config.public.FIREBASE_STORAGE_BUCKET,
        messagingSenderId: config.public.FIREBASE_MESSAGING_SENDER_ID,
        appId: config.public.FIREBASE_APP_ID
    };

    const app = initializeApp(firebaseConfig)

    // Initialize Cloud Firestore and get a reference to the service
    const db = getFirestore(app);

    nuxtApp.provide('db', db)

})