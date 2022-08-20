 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-app.js";
 import { getDatabase,set,ref} from "https://www.gstatic.com/firebasejs/9.9.2/firebase-database.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyCGcM94kQovfOaqS9tM43aEInM4oghc4xI",
   authDomain: "koujinatn-154a0.firebaseapp.com",
   databaseURL: "https://koujinatn-154a0-default-rtdb.europe-west1.firebasedatabase.app",
   projectId: "koujinatn-154a0",
   storageBucket: "koujinatn-154a0.appspot.com",
   messagingSenderId: "694280628416",
   appId: "1:694280628416:web:12a731193f9a08562d6525",
   measurementId: "G-ZFGQZ3XWMZ"
 };


 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const db = getDatabase(app);

  function sendRecipe(e){
    e.preventDefault();
    var recName=document.getElementById("food-name").value ;
    var cin=document.getElementById("user-cin").value ;
    var recDesc=document.getElementById("food-desc").value ;
    var recTown=document.getElementById("food-location").value ;
    var recPhotoURL=document.getElementById("food-pic").value ;
    postRecipeToDB(recName, cin,recDesc,recTown,recPhotoURL)
    formulaire.reset();
    window.alert('Submission done !')


  }
  const formulaire=document.getElementById("add-food-form");
  formulaire.addEventListener("submit",(e)=>sendRecipe(e))

  function postRecipeToDB(recName, cin,recDesc,recTown,recPhotoURL){
    set(ref(db,'plats/'+cin),{
        recName:recName,
        cin:cin,
        recDesc: recDesc,
        recTown:recTown,
        recPhotoURL:recPhotoURL
    })

  }