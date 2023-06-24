import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {

    apiKey: "AIzaSyDUQdllM5ZxeK-AMUpBxUmnWehFDU-nAhQ",
    authDomain: "clothing-store-db-d1432.firebaseapp.com",
    projectId: "clothing-store-db-d1432",
    storageBucket: "clothing-store-db-d1432.appspot.com",
    messagingSenderId: "449605261435",
    appId: "1:449605261435:web:e30e4ec42bb4f8fcbb6ade"
  
  };
  
  // Initialize Firebase
  
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: "select_account"
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);