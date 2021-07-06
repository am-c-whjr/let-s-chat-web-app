  var firebaseConfig = {
    apiKey: "AIzaSyC2J_s0KgrqXtNPSoxBHPopxeDVGCooH0I",
    authDomain: "let-s-chat-web-app-87579.firebaseapp.com",
    databaseURL: "https://let-s-chat-web-app-87579-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-web-app-87579",
    storageBucket: "let-s-chat-web-app-87579.appspot.com",
    messagingSenderId: "340697205815",
    appId: "1:340697205815:web:388d4f2346920e524ac3b2",
    measurementId: "G-G4HYDN5Y5T"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room_name - " + Room_names);
      row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.Id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function addRoom(){
    room_name = document.getElementById("add_room").value;
    firebase.database().ref("/").child(room_name).update({
        purpose: "adding room"
    });
    redirectToRoomName();
}
function redirectToRoomName(name){
    localStorage.setItem("room_name",name);
    window.location="room_page.html";   
}
function logout(){
    window.location="index.html";
}