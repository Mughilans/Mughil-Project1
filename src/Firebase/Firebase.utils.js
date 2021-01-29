import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyBfqjZFyCCp60_gN70GceICXynogGCP3JM",
    authDomain: "mughil-shopping.firebaseapp.com",
    projectId: "mughil-shopping",
    storageBucket: "mughil-shopping.appspot.com",
    messagingSenderId: "886866843009",
    appId: "1:886866843009:web:5d2df54c95564bc45ec480",
    measurementId: "G-MCL8GMZ6EN"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    console.log(snapShot);

    if (!snapShot.exixts) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }
        catch (error) {
            console.log('error creating user', error.message)
        }
    }
    return userRef;
}

export const addCollectionAndDocuments = (collectioKey, objectToAdd) => {
    const collectionRef = firestore.collection(collectioKey)
}

//firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase