import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBWQnqowE45W70nXIRMy3RBpB2huWF3sGU",
    authDomain: "crown-db-9552b.firebaseapp.com",
    databaseURL: "https://crown-db-9552b.firebaseio.com",
    projectId: "crown-db-9552b",
    storageBucket: "",
    messagingSenderId: "237395925768",
    appId: "1:237395925768:web:a3b9559d455efc03b12abd"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  console.log(snapShot)

  if(!snapShot.exists){
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })

    } catch (error){
      console.log(error.message)
    }
  }

  return userRef;
}

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default provider;