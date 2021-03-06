import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: process.env.VUE_APP_API_KEY,
    authDomain: "chatapp-test-97b18.firebaseapp.com",
    projectId: "chatapp-test-97b18",
    databaseURL: "https://chatapp-test-97b18-default-rtdb.firebaseio.com/",
    storageBucket: "chatapp-test-97b18.appspot.com",
    messagingSenderId: "473886046224",
    appId: "1:473886046224:web:90b57851abd8795a50b295"
  };

  process.env.VUE_APP_API_KEY;

  const app = initializeApp(firebaseConfig);

  export default getDatabase(app);