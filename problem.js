var firebaseConfig = {
  apiKey: "AIzaSyDssY-oVrJ429R4u67PtXFWKaBPq7eSHeI",
  authDomain: "mega-problem.firebaseapp.com",
  databaseURL: "https://mega-problem-default-rtdb.firebaseio.com",
  projectId: "mega-problem",
  storageBucket: "mega-problem.appspot.com",
  messagingSenderId: "484018155355",
  appId: "1:484018155355:web:a9bdc03fe7e515a4b2f47e",
  measurementId: "G-WYL38HR7DD"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_id=localStorage.getItem("user_id");
address=localStorage.getItem("address");
console.log(address);
console.log(user_id);
function getData() { firebase.database().ref("/"+address+user_id).on('value', function(snapshot) { snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
  message_data = childData;
  user_id=message_data["user_name"];
  house=message_data["house"];
} });  }); }
function send(){
  problem=document.getElementById("problem").value;
  message=document.getElementById("note").value;
  house=localStorage.getItem("house");
  address=localStorage.getItem("address");
  firebase.database().ref(address).push().update({
    problem:problem,
    msg:message,
    user:user_id,
    house:house
  });
  
  
  
  
}

function logout(){
      localStorage.removeItem("address");
      localStorage.removeItem("user_id");
      window.location="index.html";
}