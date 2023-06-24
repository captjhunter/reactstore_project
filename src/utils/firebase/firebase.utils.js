import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDoc, setDoc} from 'firebase/firestore';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'

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
  export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);

  export const db = getFirestore();

  export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
    if(!userAuth) return;

    const userDocRef = doc(db, 'users', 'userAuth.uid');

    const userSnapshot = await getDoc(userDocRef);

//if user data does not exist
    if(!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try { 
            await setDoc(userDocRef, {displayName, email, createdAt, ...additionalInformation});
        } catch (error) {
            console.log('error creating the user', error.message);
        }
    }

//if user data exists
return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
  
    return await createUserWithEmailAndPassword(auth, email, password);
  };

  export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
  
    return await signInWithEmailAndPassword(auth, email, password);
  };