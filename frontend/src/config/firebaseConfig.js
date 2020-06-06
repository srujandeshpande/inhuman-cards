import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyDDwQJn7owGeZTE-cHT08xg58UX9bCM8ek",
  authDomain: "inhuman-cards.firebaseapp.com",
  databaseURL: "https://inhuman-cards.firebaseio.com",
  projectId: "inhuman-cards",
  storageBucket: "inhuman-cards.appspot.com",
  messagingSenderId: "301679999391",
  appId: "1:301679999391:web:368c22c05103c63ce7e5aa",
  measurementId: "G-6LCJH548E2"
};

const Fireapp = firebase.initializeApp(firebaseConfig);

export default Fireapp;
