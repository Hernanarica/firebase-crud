import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
	// apiKey: process.env.FIREBASE_APIKEY,
	// authDomain: process.env.FIREBASE_AUTHDOMAIN,
	// projectId: process.env.FIREBASE_PROJECTID,
	// storageBucket: process.env.FIREBASE_STORAGEBUCKET,
	// messagingSenderId: process.env.FIREBASE_MESSAGINGSENDERID,
	// appId: process.env.FIREBASE_APPID
	apiKey: "AIzaSyBxdBT3OnMy9Qx9iz1p8Iu9crtN7gqEOcw",
	authDomain: "fir-crud-201e8.firebaseapp.com",
	projectId: "fir-crud-201e8",
	storageBucket: "fir-crud-201e8.appspot.com",
	messagingSenderId: "182499228610",
	appId: "1:182499228610:web:c81b72f7b6a8df8f7c345b"
};

const app = initializeApp(firebaseConfig);
const db  = getFirestore(app);

export default db;