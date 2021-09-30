 // Import the functions you need from the SDKs you need
//  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-app.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration

 const firebaseConfig = {
  apiKey: "AIzaSyBCuWL2gXFjk5PxIuVN2NLQmqaT8x_fOTQ",
  authDomain: "chat-room-3ae01.firebaseapp.com",
  databaseURL: "https://chat-room-3ae01-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "chat-room-3ae01",
  storageBucket: "chat-room-3ae01.appspot.com",
  messagingSenderId: "494880681319",
  appId: "1:494880681319:web:1c8634b25ce7fab59393c2"
};

// Initialize Firebase

firebase.initializeApp(firebaseConfig); 
console.log(firebase);

//! Dont touch

var inputMsg = document.getElementById('msg');
var chatRoom = document.getElementById('chatroom');  
var chatHolder = document.getElementById('chatholder');
var outsideName = localStorage.getItem('name'); //get must be key and
console.log(outsideName);

var d = new Date();
var n = d.toString().substr(0,10);

console.log(n);

var time = d.getHours() + ":" + d.getMinutes();

console.log(time);




//!get data from Firebase when page reload / start
firebase.database().ref(`chat`).child(`message`).on(`child_added`, function(snapshot){
   console.log(`check data ${snapshot}`);

   // console.log(`check data ${snapshot.val}`);
   
   var nameVal = snapshot.val().name; //string
   var msgVal = snapshot.val().msg; //string
   var dateVal = snapshot.val().date;
   // var dateVal = snapshot.val().date;

   //create element when firebase got new child

   var division = document.createElement('div'); //to float
   var chatBox = document.createElement('section');
   var nameText = document.createElement('h1');
   var msgText = document.createElement('p');
   var dateInput = document.createElement('p');
   
   // var dateText = document.createElement('p');
   

   //printf
   msgText.innerHTML = msgVal;
   nameText.innerHTML = nameVal;
   dateInput.innerHTML = dateVal;
   // dateText.innerHTML = dateVal;

   dateInput.classList.add('date')

   //condition

   if (nameVal == "Amir" || nameVal == "Amir " || nameVal == "amir" || nameVal == "AMIR") {
       chatBox.classList.add('right');
   } else {
       chatBox.classList.add('left');
   }

   //Append
   chatRoom.append(division);
   division.append(chatBox);
   chatBox.append(nameText);
   chatBox.append(msgText);
   chatBox.append(dateInput);
   // chatBox.append(dateText);

   chatBox.classList.add('chatbox'); 
   
   chatRoom.scrollTo(0,chatRoom.scrollHeight)
   // chatBox.toISOString().substr(0,10);
})

window.addEventListener('keydown', function(evt){
  if (evt.key == 'Enter')
  {
    console.log('i pressed enter');
    btn()
  }

})




function btn() {

   //logic 
   if (inputMsg.value !==""){

       //we push to firebase
       firebase.database().ref("chat").child('message').push({
           name: outsideName,
           msg: inputMsg.value,
           date: time,
       })
   } else 
   {
       alert("Hello! I am an alert box!!");
       
   }
   
   //To reset the input
   inputMsg.value="";









   //(To push)
   // firebase.database().ref('chat').child('message').push({
      //  inputName: inputName.value,
   //     inputMsg: inputMsg.value,
   // })

   // var division = document.createElement('div')
   // division.classList.add(division)
   

   // var chatbox = document.createElement('section')
   // chatbox.classList.add('chatbox'); 

   // var nameText = document.createElement('h1')
   // nameText.innerHTML = nameval;

   // var msgText = document.createElement('p')
   // msgText.innerHTML = msgval;

   // chatroom.append(chatbox);
   // chatbox.append(nameText);
   // chatbox.append(msgText);   
}

// firebase.database().ref('room').child('room_name') 

//one room + one room with name.

