const firebaseConfig = {
  apiKey: "AIzaSyBf8YvW-T8Bre8uzezbpkX3PZEBDN4iSsg",
  authDomain: "lets-chat-web-app-5e9e3.firebaseapp.com",
  databaseURL: "https://lets-chat-web-app-5e9e3-default-rtdb.firebaseio.com",
  projectId: "lets-chat-web-app-5e9e3",
  storageBucket: "lets-chat-web-app-5e9e3.appspot.com",
  messagingSenderId: "826782492835",
  appId: "1:826782492835:web:e0600777b213cae64c7716",
  measurementId: "G-F8ZYRC5GBR"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);



user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome  " + user_name + "!";






function addRoom() {
  
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose: "adding room name"
  });

  localStorage.setItem("room_name", room_name);

  window.location = "kwitter_page.html";
}

function getData() {
  firebase.database().ref("/").on('value', function (snapshot) {
    document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
      childKey = childSnapshot.key;
      Room_names = childKey;
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}
