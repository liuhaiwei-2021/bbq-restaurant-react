// NPM package
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Properties
const firebaseConfig = {
	apiKey: "AIzaSyCzdDbVc0mSD0k1TpbB_cMZvQmyvvbjAuI",
	authDomain: "bbq-restaurant-website.firebaseapp.com",
	projectId: "bbq-restaurant-website",
	storageBucket: "bbq-restaurant-website.appspot.com",
	messagingSenderId: "353271322899",
	appId: "1:353271322899:web:ce220863f49337eb56e2e6",
};

const app = initializeApp(firebaseConfig);
export const fireStore = getFirestore(app);
