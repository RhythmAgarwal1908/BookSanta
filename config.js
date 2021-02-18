import firebase from 'firebase'
require('@firebase/firestore')
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDgD75e4AeHwz1mbP740qaYuzpxuaF0p3A",
    authDomain: "book-santa-cb71b.firebaseapp.com",
    projectId: "book-santa-cb71b",
    storageBucket: "book-santa-cb71b.appspot.com",
    messagingSenderId: "136833081806",
    appId: "1:136833081806:web:98964da40af002332d4b9f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.database() 