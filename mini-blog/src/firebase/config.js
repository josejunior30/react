import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAU9djQk8iz4-oFUXKzVUYF4RKAJLFY2Fw",
  authDomain: "mini-blog-6491b.firebaseapp.com",
  projectId: "mini-blog-6491b",
  storageBucket: "mini-blog-6491b.appspot.com",
  messagingSenderId: "332914601235",
  appId: "1:332914601235:web:107b846a9e478eba4bfee6"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };