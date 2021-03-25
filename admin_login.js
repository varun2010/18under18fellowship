var firebaseConfig = {
    apiKey: "AIzaSyA5WOBuZmotpmROw8uEMy9vhA7-d8ua0h4",
    authDomain: "admin-7c536.firebaseapp.com",
    databaseURL: "https://admin-7c536-default-rtdb.firebaseio.com",
    projectId: "admin-7c536",
    storageBucket: "admin-7c536.appspot.com",
    messagingSenderId: "597175022920",
    appId: "1:597175022920:web:fd867d9a7af4bbf1b56f7d",
    measurementId: "G-CVXLD5M0NP"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
function back(){
    window.location="index.html";
}
function admin_signup_show(){
    document.getElementById("login_div").style.display="none";
    document.getElementById("signup_div").style.display="inline-block";
}
function admin_login_show(){
    document.getElementById("signup_div").style.display="none";
    document.getElementById("login_div").style.display="inline-block";
}
function admin_signup(){
    
    var user_id=document.getElementById("a_userId").value;
    var password=document.getElementById("a_password").value;
    var country=document.getElementById("a_country").value;
    var state=document.getElementById("a_state").value;
    var district=document.getElementById("a_district").value;
    var town=document.getElementById("a_townVillage").value;
    var nagar=document.getElementById("a_streetNagar").value;
    var tower=document.getElementById("a_buildingTower").value;
    var pincode=document.getElementById("a_pinCode").value;
    if(user_id==""){
        document.getElementById("a_userId").placeholder="Error";
    }
    if(password==""){
        document.getElementById("a_password").placeholder="Error";
    }
    if(country==""){
        document.getElementById("a_country").placeholder="Error";
    }
    if(state==""){
        document.getElementById("a_state").placeholder="Error";
    }
    if(district==""){
        document.getElementById("a_district").placeholder="Error";
    }
    if(town==""){
        document.getElementById("a_townVillage").placeholder="Error";
    }
    if(nagar==""){
        document.getElementById("a_streetNagar").placeholder="Error";
    }
    if(tower==""){
        document.getElementById("a_buildingTower").placeholder="Error";
    }
    if(pincode==""){
        document.getElementById("a_pinCode").placeholder="Error";
    }
    if(user_id!=""&&password!=""&&country!=""&&state!=""&&district!=""&&town!=""&&nagar!=""&&tower!=""&&pincode!=""){
        country=country.toLowerCase();
        state=state.toLowerCase();
        district=district.toLowerCase();
        town=town.toLowerCase();
        nagar=nagar.toLowerCase();
        tower=tower.toLowerCase();
        pincode=pincode.toLowerCase();
        country=country.replace("country","");
        state=state.replace("state","");
        district=district.replace("district","");
        town=town.replace("town","");
        town=town.replace("village","");
        nagar=nagar.replace("nagar","");
        nagar=nagar.replace("street","");
        tower=tower.replace("towers","");
        tower=tower.replace("tower","");
        tower=tower.replace("building","");
        pincode=pincode.replace("e","");
        address=tower+","+nagar+","+town+","+district+","+state+","+country+","+pincode;
        firebase.database().ref(address).child(user_id).update({
            user_name:user_id
        });
        firebase.database().ref("/").child(address).update({
            purpose:"adding address"
        });
        admin_login_show();
        localStorage.setItem(user_id,password);
    }
}
function admin_login(){
    check_user=document.getElementById("a_user").value;
    check_password=document.getElementById("a_pass").value;
    if(check_user==""){
        document.getElementById("a_user").placeholder="Error";
    }
    if(check_password==""){
        document.getElementById("a_pass").placeholder="Error";
    }
    correct=localStorage.getItem(check_user);
    if(check_password!=correct){
        window.alert("please enter correct password");
        document.getElementById("pass").placeholder="Error";
    }
    else{
        window.location="problem_show.html";
    }
}
