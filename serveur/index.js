import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-app.js";
 import { getDatabase,ref,onValue} from "https://www.gstatic.com/firebasejs/9.9.2/firebase-database.js";
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

 
 function getplats(){
const allplates = ref(db,'plats/');
onValue(allplates,(snapshot)=>{
const data =snapshot.val();
console.log(data);
var keys =Object.keys(data);
console.log('KEYS ===> :',keys);
for(let i=0 ;i<keys.length ;i++){
    var currentElement = keys[i];
    console.log("currentElement" ,currentElement);
    var recName= data[currentElement].recName;
    var recDesc=data[currentElement].recDesc;
    var recTown=data[currentElement].recTown;
    var photo=data[currentElement].recPhotoURL;
    console.log(recName,recDesc,recTown,photo);
    var platHTML = document.createElement("div");
    platHTML.innerHTML =
    "<div class='card mb-3 '>"+
    "<img class='card-img-top  foodpic' src='"+photo+"' />"+
    "<div class='card-body'>"+
    "<h1 class='card-title'> "+recName+"</h1>"+
    "<p class='card-text'> "+recDesc+"</P>"+
    "<p class='card-text'> "+recTown+"</P>"+

    "</div>"+
    "</div>" ;
    document.getElementById("Allrecipes")
    .appendChild(platHTML);
}

    })
 }
 getplats();