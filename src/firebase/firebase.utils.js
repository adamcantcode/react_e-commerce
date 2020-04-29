import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDVvuhjmA8bByx2R5bMs9QzXBPh1ZvzaYQ',
  authDomain: 'react-e-commerce-db-84fe8.firebaseapp.com',
  databaseURL: 'https://react-e-commerce-db-84fe8.firebaseio.com',
  projectId: 'react-e-commerce-db-84fe8',
  storageBucket: 'react-e-commerce-db-84fe8.appspot.com',
  messagingSenderId: '468769282733',
  appId: '1:468769282733:web:46e0afb83a8dedd7878424',
  measurementId: 'G-5XGP5Y9Q43',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
