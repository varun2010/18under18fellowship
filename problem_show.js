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
function logout(){
    localStorage.removeItem("address");
    localStorage.removeItem("user_id");
    window.location="index.html";
}
function getData() { firebase.database().ref("/"+address).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
    console.log(firebase_message_id);
    console.log(message_data);
    user_id=message_data["user"];
    house=message_data["house"];
    message=message_data["msg"];
    problem=message_data["problem"];
    name_with_tag="<div class='message'><h4>"+user_id+"</h4>";
    message_with_tag="<span><h4 class='message_h4'>"+problem;
    like_button="-"+message+"</h4></span>";
    span_with_tag="<h5>"+house+"</h5><div>";
    row=name_with_tag+message_with_tag+like_button+span_with_tag;
    document.getElementById("output").innerHTML+=row;
 } });  }); }
getData();