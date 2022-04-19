// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_lsZl2SOggJKFzGVe7Yy_JYBEBPb2awI",
  authDomain: "home-food-catering-c54e6.firebaseapp.com",
  projectId: "home-food-catering-c54e6",
  storageBucket: "home-food-catering-c54e6.appspot.com",
  messagingSenderId: "107095558052",
  appId: "1:107095558052:web:47f79b5ba5212b45a9a331"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;