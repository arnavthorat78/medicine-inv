import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js";
import {
  getFirestore,
  collection,
  getDocs,
} from "https://www.gstatic.com/firebasejs/10.3.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAKJQGzVJrLgS4q0dUTVXQMjIkIyS1g7mw",
  authDomain: "medicine-inventory-a9853.firebaseapp.com",
  projectId: "medicine-inventory-a9853",
  storageBucket: "medicine-inventory-a9853.appspot.com",
  messagingSenderId: "479781032055",
  appId: "1:479781032055:web:62b1d1f714e06967733672",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const colRef = collection(db, "medicine");
getDocs(colRef)
  .then((snapshot) => {
    const medicines = [];

    snapshot.docs.forEach((medicine) => {
      medicines.push({ ...medicine.data(), id: medicine.id });
    });

    console.log(medicines);
  })
  .catch((err) => console.log);
