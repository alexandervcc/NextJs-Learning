// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAwFI_8wuht6KUALU-w8vw505IuZ2qiQ60",
  authDomain: "nextjs-2c404.firebaseapp.com",
  projectId: "nextjs-2c404",
  storageBucket: "nextjs-2c404.appspot.com",
  messagingSenderId: "472125485573",
  appId: "1:472125485573:web:c66145f0103f415c1ae26c",
  measurementId: "G-J9HCBZ0BK3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Firestore send
const db = getFirestore();
export { db };

/**********************************************************************
    DEPENDECIES
    ->Firebase
        npm install firebase
    ->Material UI
        npm install @mui/material @emotion/react @emotion/styled
    ->Material SVG icons
        npm install @mui/icons-material
    ->Moments (Dates)
        npm install moment
*/
