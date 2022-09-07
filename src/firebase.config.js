import {getApp, getApps, initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyAohLx4hkVVMmLHg8vDY7G6b0LL7dx6tng",
    authDomain: "shop-app-a88d0.firebaseapp.com",
    databaseURL: "https://shop-app-a88d0-default-rtdb.firebaseio.com",
    projectId: "shop-app-a88d0",
    storageBucket: "shop-app-a88d0.appspot.com",
    messagingSenderId: "341842672435",
    appId: "1:341842672435:web:f347ab758eed43a0aedc46"
  };

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app)
const storage = getStorage(app)

export {app, firestore, storage}
