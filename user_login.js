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
function back(){
    window.location="index.html";
}
function signup_show(){
    document.getElementById("login_div").style.display="none";
    document.getElementById("signup_div").style.display="inline-block";
}
function login_show(){
    document.getElementById("signup_div").style.display="none";
    document.getElementById("login_div").style.display="inline-block";
}
function signup(){
    
    var user_id=document.getElementById("userId").value;
    var password=document.getElementById("password").value;
    var country=document.getElementById("country").value;
    var state=document.getElementById("state").value;
    var district=document.getElementById("district").value;
    var town=document.getElementById("townVillage").value;
    var nagar=document.getElementById("streetNagar").value;
    var tower=document.getElementById("buildingTower").value;
    var block=document.getElementById("block").value;
    var housenum=document.getElementById("houseNumber").value;
    var pincode=document.getElementById("pinCode").value;
    if(user_id==""){
        document.getElementById("userId").placeholder="Error";
    }
    if(password==""){
        document.getElementById("password").placeholder="Error";
    }
    if(country==""){
        document.getElementById("country").placeholder="Error";
    }
    if(state==""){
        document.getElementById("state").placeholder="Error";
    }
    if(district==""){
        document.getElementById("district").placeholder="Error";
    }
    if(town==""){
        document.getElementById("townVillage").placeholder="Error";
    }
    if(nagar==""){
        document.getElementById("streetNagar").placeholder="Error";
    }
    if(tower==""){
        document.getElementById("buildingTower").placeholder="Error";
    }
    if(block==""){
        document.getElementById("block").placeholder="Error";
    }
    if(housenum==""){
        document.getElementById("houseNumber").placeholder="Error";
    }
    if(pincode==""){
        document.getElementById("pinCode").placeholder="Error";
    }
    if(user_id!=""&&password!=""&&country!=""&&state!=""&&district!=""&&town!=""&&nagar!=""&&tower!=""&&block!=""&&housenum!=""&&pincode!=""){
        country=country.toLowerCase();
        state=state.toLowerCase();
        district=district.toLowerCase();
        town=town.toLowerCase();
        nagar=nagar.toLowerCase();
        tower=tower.toLowerCase();
        housenum=housenum.toLowerCase();
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
        block=block.replace("1","Main block");
        housenum=housenum.replace("e","");
        pincode=pincode.replace("e","");
        user_address=block+","+housenum+","+tower+","+nagar+","+town+","+district+","+state+","+country+","+pincode;
        address=tower+","+nagar+","+town+","+district+","+state+","+country+","+pincode;
        house=block+","+housenum;
        
        firebase.database().ref("/").child(address).update({
            purpose:"adding address"
        });
        login_show();
        localStorage.setItem("house",house);
        localStorage.setItem("address",address)
        localStorage.setItem("user_id",user_id);
        localStorage.setItem(user_id,password);
    }
}
function login(){
    check_user=document.getElementById("user").value;
    check_password=document.getElementById("pass").value;
    if(check_user==""){
        document.getElementById("user").placeholder="Error";
    }
    if(check_password==""){
        document.getElementById("pass").placeholder="Error";
    }
    correct=localStorage.getItem(check_user);
    if(check_password!=correct){
        window.alert("please enter correct password");
        document.getElementById("pass").placeholder="Error";
    }
    else{
        window.location="problem.html";
    }
}
