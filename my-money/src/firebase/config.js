import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBJ8kN05qmTd-51WeNPmPObHY4IWSbbs6A',
  authDomain: 'mymoney-a6083.firebaseapp.com',
  projectId: 'mymoney-a6083',
  storageBucket: 'mymoney-a6083.appspot.com',
  messagingSenderId: '1072025042557',
  appId: '1:1072025042557:web:bb387744fa5e4c4e36bb14',
};

// Init firebase
initializeApp(firebaseConfig);

// Init firestore
const db = getFirestore();

// Init firebase Auth
const auth = getAuth();

export { db, auth };
