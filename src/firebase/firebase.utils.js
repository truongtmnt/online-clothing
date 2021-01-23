import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
var firebaseConfig = {
	apiKey: "AIzaSyCaBbU2JViZYqoktI8bAM0rq6RzH9XuRFE",
	authDomain: "crwn-clothing-2ce5b.firebaseapp.com",
	projectId: "crwn-clothing-2ce5b",
	storageBucket: "crwn-clothing-2ce5b.appspot.com",
	messagingSenderId: "995937968940",
	appId: "1:995937968940:web:39308e3a01da1c29ec8289",
	measurementId: "G-SJH15BR2RL",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);
	const snapShot = await userRef.get();
	
	// create user in database if user not exist in database
	if (!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createAt = new Date();

		try {
			await userRef.set({
				displayName,
				email,
				createAt,
				...additionalData,
			});
		} catch (error) {
			console.log("error creating new user: ", error.message);
		}
	}

	return userRef;
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
