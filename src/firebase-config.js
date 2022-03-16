import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDd3YVNNtWl2R0A5SkbhaX49BGGzNDXIx8",
  authDomain: "segre-df898.firebaseapp.com",
  projectId: "segre-df898",
  storageBucket: "segre-df898.appspot.com",
  messagingSenderId: "7793174101",
  appId: "1:7793174101:web:050d671bc1f27ec33196dc",
  measurementId: "G-E3NBB2S9KY"
};

  const app = initializeApp(firebaseConfig); 

  export  const db = getFirestore(app);