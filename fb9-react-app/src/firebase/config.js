import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDbmwDq_TlvQ3w9pAvcvwlv1OvAPqmv3GY',
  authDomain: 'reading-list-fb9-183ac.firebaseapp.com',
  projectId: 'reading-list-fb9-183ac',
  storageBucket: 'reading-list-fb9-183ac.appspot.com',
  messagingSenderId: '783093561603',
  appId: '1:783093561603:web:c813ab7a59c7dca3061136',
};

// Init firebase
initializeApp(firebaseConfig);

// Init firestore
const db = getFirestore();

// Init firebase Auth
const auth = getAuth();

export { db, auth };
