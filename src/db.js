import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.VUE_APP_API_KEY,
  authDomain: "chatapp-3ea09.firebaseapp.com",
  projectId: "chatapp-3ea09",
  storageBucket: "chatapp-3ea09.appspot.com",
  messagingSenderId: process.env.VUE_APP_SENDER_ID,
  appId: "1:98553626942:web:579b414f8380b7f495ec6f",
};

process.env.VUE_APP_API_KEY;

initializeApp(firebaseConfig);
