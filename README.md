






//room 1
var room = true;
var totalguest1 = 0;  //global variable that stores the number of guests in room 1
function clean(){
  if(room === true){
      room  = false;
      document.getElementById("cle").style.backgroundColor = '#f1fa46' ;
      document.getElementById("full").innerHTML="";
      document.getElementById("room1list").innerHTML="";
      totalguest1 = "clean";
    }
  else{
    document.getElementById("cle").style.backgroundColor ="";
    room = true;
    totalguest1 = 0;
    document.getElementById("full").innerHTML="";
    document.getElementById("cleaning").innerHTML="";
  }
}
function enterGuest() {
  if (totalguest1 < 4) {
    if(document.getElementById("user1").value == 0 ){
      document.getElementById("full").innerHTML="Please enter a name";
    }
    else{
    totalguest1++; //I will add one to the guest
    var time = new Date();
    var day = time.getDay();
    var hour = time.getHours();
    var min = time.getMinutes();
    var sec = time.getSeconds();
    if(day == 0){
      day = "Sunday";
}
    else if(day == 1){
      day = "Monday";
}
    else if (day == 2){
      day= "Tuesday";
}
    else if(day == 3){
      day="Wednesday";
}
    else if(day== 4){
      day="Thursday";
}
    else if(day==5){
      day="Friday";
}
    else if(day==6){
      day="Saturday";
}
    var node = document.createElement("LI"); //I am going to create a new list item
    node.setAttribute("class", "li1");// i set an attribute name so the li is specified
    var guest = document.getElementById("user1").value+ ' '+day+'  ' +hour+':'+min+':'+sec; //I am going to get the value from the input field
    var textnode = document.createTextNode(guest); //i am saying the variable guest as a text node
    node.appendChild(textnode); // i am attaching textnode to the list item
    document.getElementById("room1list").appendChild(node); //i am appending the list
    document.getElementById("user1").value ="";
    document.getElementById("full").innerHTML = "";
    if(totalguest1 + 1){
      var nody = document.createElement("li");
      nody.setAttribute("id","allgues");
      var gues = document.getElementById("user1").value;
      var text = document.createTextNode(guest);
      nody.appendChild(text);
      document.getElementById("total").appendChild(nody);
    }
    
    }
    
  }
  else if(totalguest1 == "clean"){
    document.getElementById("cleaning").innerHTML="Room is locked for cleaning unlock to check guests in";
  }
  else
    document.getElementById("full").innerHTML="Room is Full";

}

function removeGuest() {
  totalguest1--;// removes one guest value
  var rem = document.getElementById("room1list"); //makes the room list into a variable
  var remNum1 = document.getElementById("remove").value; // takes the value of the user input remove number
  var child1 = document.getElementsByClassName("li1")[remNum1-1];//get the li and takes the user remove number and labels the guest as that
  rem.removeChild(child1);//the parent room1list variable  removes the child which is selected by the users number
  document.getElementById("remove").value="";// makes the user input clear
  document.getElementById("full").innerHTML="";// clears the full p if its there
  }
function removeAll() {
  totalguest1 = 0;
  document.getElementById("room1list").innerHTML = "";
  var full = document.getElementById("full").innerHTML = "";
}

















//room 2
var room2 = true;
var totalguest2 = 0;  //global variable that stores the number of guests in room 1
function clean2(){
  if(room2 === true){
      room2  = false;
      document.getElementById("cle2").style.backgroundColor = '#f1fa46' ;
      document.getElementById("full2").innerHTML="";
      document.getElementById("room2list").innerHTML="";
      totalguest2 = "clean2";
    }
  else{
    document.getElementById("cle2").style.backgroundColor ="";
    room2 = true;
    totalguest2 = 0;
    document.getElementById("full2").innerHTML="";
    document.getElementById("cleaning2").innerHTML="";
  }
}
function enterGuest2() {
  if (totalguest2 < 4) {
    if(document.getElementById("user2").value == 0 ){
      document.getElementById("full2").innerHTML="Please enter a name";
    }
    else{
    totalguest2++; //I will add one to the guest
    var time = new Date();
    var day = time.getDay();
    var hour = time.getHours();
    var min = time.getMinutes();
    var sec = time.getSeconds();
    if(day == 0){
      day = "Sunday";
}
    else if(day == 1){
      day = "Monday";
}
    else if (day == 2){
      day= "Tuesday";
}
    else if(day == 3){
      day="Wednesday";
}
    else if(day== 4){
      day="Thursday";
}
    else if(day==5){
      day="Friday";
}
    else if(day==6){
      day="Saturday";
}
    var node = document.createElement("li");//I am going to create a new list item
    node.setAttribute("class","li2");
    var guest2 = document.getElementById("user2").value+ ' '+day+' ' +hour+':'+min+':'+sec; //I am going to get the value from the input field
    var textnode = document.createTextNode(guest2); //i am saying the variable guest as a text node
    node.appendChild(textnode); // i am attaching textnode to the list item
    document.getElementById("room2list").appendChild(node); //i am appending the list
    document.getElementById("user2").value ="";
    document.getElementById("full2").innerHTML = "";
    if(totalguest2 + 1){
      var nody2 = document.createElement("li");
      nody2.setAttribute("id","allgues2");
      var gues = document.getElementById("user2").value;
      var text = document.createTextNode(guest2);
      nody2.appendChild(text);
      document.getElementById("total").appendChild(nody2);
    }
    }
  }
  else if(totalguest2 == "clean2"){
    document.getElementById("cleaning2").innerHTML="Room is locked for cleaning unlock to check guests in";
  }
  else {
    document.getElementById("full2").innerHTML="Room is Full";
  }
}
function removeGuest2() {
  totalguest2--;
  var rom = document.getElementById("room2list");
  var remNum2 = document.getElementById("remove2").value;
  var child2 = document.getElementsByClassName("li2")[remNum2 -1];
  rom.removeChild(child2);
  document.getElementById("remove2").value="";
  document.getElementById("full2").innerHTML="";
  }
function removeAll2() {
  totalguest2 = 0;
  document.getElementById("room2list").innerHTML = "";
  var full = document.getElementById("full2").innerHTML = "";
}



















//room 3
var room3 = true;
var totalguest3 = 0;  //global variable that stores the number of guests in room 1
function clean3(){
  if(room3 === true){
      room3  = false;
      document.getElementById("cle3").style.backgroundColor = '#f1fa46' ;
      document.getElementById("full3").innerHTML="";
      document.getElementById("room3list").innerHTML="";
      totalguest3 = "clean3";
    }
  else{
    document.getElementById("cle3").style.backgroundColor ="";
    room3 = true;
    totalguest3 = 0;
    document.getElementById("full3").innerHTML="";
    document.getElementById("cleaning3").innerHTML="";
  }
}
function enterGuest3() {
  if (totalguest3 < 4) {
    if(document.getElementById("user3").value == 0 ){
      document.getElementById("full3").innerHTML="Please enter a name";
    }
    else{
    totalguest3++; //I will add one to the guest
    var time = new Date();
    var day = time.getDay();
    var hour = time.getHours();
    var min = time.getMinutes();
    var sec = time.getSeconds();
    if(day == 0){
      day = "Sunday";
}
    else if(day == 1){
      day = "Monday";
}
    else if (day == 2){
      day= "Tuesday";
}
    else if(day == 3){
      day="Wednesday";
}
    else if(day== 4){
      day="Thursday";
}
    else if(day==5){
      day="Friday";
}
    else if(day==6){
      day="Saturday";
}
    var node = document.createElement("LI"); //I am going to create a new list item
    node.setAttribute("class", "li3");
    var guest = document.getElementById("user3").value+ ' '+day+'  ' +hour+':'+min+':'+sec; //I am going to get the value from the input field
    var textnode = document.createTextNode(guest); //i am saying the variable guest as a text node
    node.appendChild(textnode); // i am attaching textnode to the list item
    document.getElementById("room3list").appendChild(node); //i am appending the list
    document.getElementById("user3").value ="";
    document.getElementById("full3").innerHTML = "";
    if(totalguest3 + 1){
      var nody3 = document.createElement("li");
      nody3.setAttribute("id","allgues3");
      var text = document.createTextNode(guest);
      nody3.appendChild(text);
      document.getElementById("total").appendChild(nody3);
    }
    }
  }
  else if(totalguest3 == "clean3"){
    document.getElementById("cleaning3").innerHTML="Room is locked for cleaning unlock to check guests in";
  }
  else {
    document.getElementById("full3").innerHTML="Room is Full";
  }
}
function removeGuest3() {
  totalguest3--;
  var num = document.getElementById("remove3").value;
  var list = document.getElementById("room3list");
  var child = document.getElementsByClassName("li3")[num-1];
  list.removeChild(child);
  document.getElementById("remove3").value="";
  document.getElementById("full3").innerHTML="";
  }
function removeAll3() {
  totalguest3 = 0;
  document.getElementById("room3list").innerHTML = "";
  var full = document.getElementById("full3").innerHTML = "";
}


















//room 4
var room4 = true;
var totalguest4 = 0;  //global variable that stores the number of guests in room 1
function clean4(){
  if(room4 === true){
      room4  = false;
      document.getElementById("cle4").style.backgroundColor = '#f1fa46' ;
      document.getElementById("full4").innerHTML="";
      document.getElementById("room4list").innerHTML="";
      totalguest4 = "clean4";
    }
  else{
    document.getElementById("cle4").style.backgroundColor ="";
    room4 = true;
    totalguest4 = 0;
    document.getElementById("full4").innerHTML="";
    document.getElementById("cleaning4").innerHTML="";
  }
}
function enterGuest4() {
  if (totalguest4 < 4) {
    if(document.getElementById("user4").value == 0 ){
      document.getElementById("full4").innerHTML="Please enter a name";
    }
    else{
    totalguest4++; //I will add one to the guest
    var time = new Date();
    var day = time.getDay();
    var hour = time.getHours();
    var min = time.getMinutes();
    var sec = time.getSeconds();
    if(day == 0){
      day = "Sunday";
}
    else if(day == 1){
      day = "Monday";
}
    else if (day == 2){
      day= "Tuesday";
}
    else if(day == 3){
      day="Wednesday";
}
    else if(day== 4){
      day="Thursday";
}
    else if(day==5){
      day="Friday";
}
    else if(day==6){
      day="Saturday";
}
    var node = document.createElement("LI"); //I am going to create a new list item
    node.setAttribute("class", "li4")
    var guest = document.getElementById("user4").value+ ' '+day+'  ' +hour+':'+min+':'+sec; //I am going to get the value from the input field
    var textnode = document.createTextNode(guest); //i am saying the variable guest as a text node
    node.appendChild(textnode); // i am attaching textnode to the list item
    document.getElementById("room4list").appendChild(node); //i am appending the list
    document.getElementById("user4").value ="";
    document.getElementById("full").innerHTML = "";
    if(totalguest1 + 1){
      var nody = document.createElement("li");
      nody.setAttribute("id","allgues4");
      var text = document.createTextNode(guest);
      nody.appendChild(text);
      document.getElementById("total").appendChild(nody);
    }
    }
  }
  else if(totalguest4 == "clean4"){
    document.getElementById("cleaning4").innerHTML="Room is locked for cleaning unlock to check guests in";
  }
  else {
    document.getElementById("full4").innerHTML="Room is Full";
  }
}
function removeGuest4() {
  totalguest4--;
  var num = document.getElementById("remove4").value;
  var list = document.getElementById("room4list");
  var child = document.getElementsByClassName("li4")[num-1];
  list.removeChild(child);
  document.getElementById("remove4").value="";
  document.getElementById("full4").innerHTML="";
  }
function removeAll4() {
  totalguest4 = 0;
  document.getElementById("room4list").innerHTML = "";
  var full = document.getElementById("full4").innerHTML = "";
}














//room 5
var room5 = true;
var totalguest5 = 0;  //global variable that stores the number of guests in room 1
function clean5(){
  if(room5 === true){
      room5  = false;
      document.getElementById("cle5").style.backgroundColor = '#f1fa46' ;
      document.getElementById("full5").innerHTML="";
      document.getElementById("room5list").innerHTML="";
      totalguest5 = "clean5";
    }
  else{
    document.getElementById("cle5").style.backgroundColor ="";
    room5 = true;
    totalguest5 = 0;
    document.getElementById("full5").innerHTML="";
    document.getElementById("cleaning5").innerHTML="";
  }
}
function enterGuest5() {
  if (totalguest5 < 4) {
    if(document.getElementById("user5").value == 0 ){
      document.getElementById("full5").innerHTML="Please enter a name";
    }
    else{
    totalguest5++; //I will add one to the guest
    var time = new Date();
    var day = time.getDay();
    var hour = time.getHours();
    var min = time.getMinutes();
    var sec = time.getSeconds();
    if(day == 0){
      day = "Sunday";
}
    else if(day == 1){
      day = "Monday";
}
    else if (day == 2){
      day= "Tuesday";
}
    else if(day == 3){
      day="Wednesday";
}
    else if(day== 4){
      day="Thursday";
}
    else if(day==5){
      day="Friday";
}
    else if(day==6){
      day="Saturday";
}
    var node = document.createElement("LI"); //I am going to create a new list item
    node.setAttribute("class","li5");
    var guest = document.getElementById("user5").value+ ' '+day+'  ' +hour+':'+min+':'+sec; //I am going to get the value from the input field
    var textnode = document.createTextNode(guest); //i am saying the variable guest as a text node
    node.appendChild(textnode); // i am attaching textnode to the list item
    document.getElementById("room5list").appendChild(node); //i am appending the list
    document.getElementById("user5").value ="";
    document.getElementById("full5").innerHTML = "";
    if(totalguest5 + 1){
      var nody = document.createElement("li");
      nody.setAttribute("id","allgues4");
      var text = document.createTextNode(guest);
      nody.appendChild(text);
      document.getElementById("total").appendChild(nody);
    }
    }
  }
  else if(totalguest1 == "clean5"){
    document.getElementById("cleaning5").innerHTML="Room is locked for cleaning unlock to check guests in";
  }
  else {
    document.getElementById("full5").innerHTML="Room is Full";
  }
}
function removeGuest5() {
  totalguest5--;
  var num = document.getElementById("remove5").value;
  var list = document.getElementById("room5list");
  var child = document.getElementsByClassName("li5")[num-1];
  list.removeChild(child);
  document.getElementById("remove5").value="";
  document.getElementById("full5").innerHTML="";
  }
function removeAll5() {
  totalguest5 = 0;
  document.getElementById("room5list").innerHTML = "";
  var full = document.getElementById("full5").innerHTML = "";
}


















//room 6
var room6 = true;
var totalguest6 = 0;  //global variable that stores the number of guests in room 1
function clean6(){
  if(room6 === true){
      room6  = false;
      document.getElementById("cle6").style.backgroundColor = '#f1fa46' ;
      document.getElementById("full6").innerHTML="";
      document.getElementById("room6list").innerHTML="";
      totalguest6 = "clean6";
    }
  else{
    document.getElementById("cle6").style.backgroundColor ="";
    room6 = true;
    totalguest6 = 0;
    document.getElementById("full6").innerHTML="";
    document.getElementById("cleaning6").innerHTML="";
  }
}
function enterGuest6() {
  if (totalguest6 < 4) {
    if(document.getElementById("user6").value == 0 ){
      document.getElementById("full6").innerHTML="Please enter a name";
    }
    else{
    totalguest6++; //I will add one to the guest
    var time = new Date();
    var day = time.getDay();
    var hour = time.getHours();
    var min = time.getMinutes();
    var sec = time.getSeconds();
    if(day == 0){
      day = "Sunday";
}
    else if(day == 1){
      day = "Monday";
}
    else if (day == 2){
      day= "Tuesday";
}
    else if(day == 3){
      day="Wednesday";
}
    else if(day== 4){
      day="Thursday";
}
    else if(day==5){
      day="Friday";
}
    else if(day==6){
      day="Saturday";
}
    var node = document.createElement("LI"); //I am going to create a new list item
    node.setAttribute("class","li6");
    var guest = document.getElementById("user6").value+ ' '+day+'  ' +hour+':'+min+':'+sec; //I am going to get the value from the input field
    var textnode = document.createTextNode(guest); //i am saying the variable guest as a text node
    node.appendChild(textnode); // i am attaching textnode to the list item
    document.getElementById("room6list").appendChild(node); //i am appending the list
    document.getElementById("user6").value ="";
    document.getElementById("full6").innerHTML = "";
    if(totalguest6 + 1){
      var nody = document.createElement("li");
      nody.setAttribute("id","allgues4");
      var text = document.createTextNode(guest);
      nody.appendChild(text);
      document.getElementById("total").appendChild(nody);
    }
    }
  }
  else if(totalguest6 == "clean6"){
    document.getElementById("cleaning6").innerHTML="Room is locked for cleaning unlock to check guests in";
  }
  else {
    document.getElementById("full6").innerHTML="Room is Full";
  }
}
function removeGuest6() {
  totalguest6--;
  var num = document.getElementById("remove6").value;
  var list = document.getElementById("room6list");
  var child = document.getElementsByClassName("li6")[num-1];
  list.removeChild(child);
  document.getElementById("remove6").value="";
  document.getElementById("full6").innerHTML="";
  }
function removeAll6() {
  totalguest6 = 0;
  document.getElementById("room6list").innerHTML = "";
  var full = document.getElementById("full6").innerHTML = "";
}










html
<html>
<head>
  <link rel="stylesheet" href="hotelproject.css">


</head>
<body>
  <div id=rembuts></div>
  <h1 id="hotelbox">Royal Pastrami Luxury Hotels</h1><hr>
  <h2 id="hotel1">Welcome to the Automated Front Desk of Royal Pastrami Luxury Hotels</h2>
 <div id="smoothbox"><a href ="#whole"><button id="smoothButton">Begin Your Check-In</button></a></div>
 <div id="totalGuests"><ol id="total"></ol></div>
  <div id="whole">
  
  <div id="first">
    <h1 id="title">Room One</h1>
    <input type= "text"  id="user1"  placeholder="Enter Guest Name">
    <button id="enter" onclick="enterGuest()">Enter Guest</button>
    <ol id="room1list"></ol>
    
    <p id="full"></p>
    <p id="cleaning"></p>
    <input type="number" id="remove" placeholder="Enter guest number to check out">
    <button id="rem" onclick ="removeGuest()">Check Out</button>
    <button id="remall" onclick="removeAll()">Check Everyone Out</button>
    <button id="cle" onclick="clean()" >Clean Room</button>
  </div>
  
  <div id="second">
    <h1 id="title">Room Two</h1>
    <input type= "text" id="user2" placeholder="Enter Guest Name">
    <button id="enter" onclick="enterGuest2()" >Enter Guest</button>
    <ol id="room2list"></ol>
    <p id="full2"></p>
    <p id="cleaning2"></p>
    <input type="number" id="remove2" placeholder="Enter guest number to check out">
    <button id="rem" onclick ="removeGuest2()">Check Out</button>
    <button id="remall" onclick="removeAll2()">Check Everyone Out</button>
    <button id="cle2" onclick="clean2()" >Clean Room</button>
  </div>
  <div id="third">
    <h1 id="title">Room Three</h1>
    <input type= "text" id="user3" placeholder="Enter Guest Name">
    <button id="enter" onclick="enterGuest3()">Enter Guest</button>
    <ol id="room3list"></ol>
    <p id="full3"></p>
    <p id="cleaning3"></p>
    <input type="text" id="remove3" placeholder="Enter guest number to check out">
    <button id="rem" onclick ="removeGuest3()">Check Out</button>
    <button id="remall" onclick="removeAll3()">Check Everyone Out</button>
    <button id="cle3" onclick="clean3()" >Clean Room</button>
  </div>
  <div id="fourth">
    <h1 id="title">Room Four</h1>
    <input type= "text" id="user4" placeholder="Enter Guest Name">
    <button id="enter" onclick="enterGuest4()">Enter Guest</button>
    <ol id="room4list"></ol>
    <p id="full4"></p>
    <p id="cleaning4"></p>
    <input type="text" id="remove4" placeholder="Enter guest number to check out">
    <button id="rem" onclick ="removeGuest4()">Check Out</button>
    <button id="remall" onclick="removeAll4()">Check Everyone Out</button>
    <button id="cle4" onclick="clean4()" >Clean Room</button>
  </div>
  <div id="fifth">
    <h1 id="title">Room Five</h1>
    <input type= "text" id="user5" placeholder="Enter Guest Name">
    <button id="enter" onclick="enterGuest5()">Enter Guest</button>
    <ol id="room5list"></ol>
    <p id="full5"></p>
    <p id="cleaning5"></p>
    <input type="text" id="remove5" placeholder="Enter guest number to check out">
    <button id="rem" onclick ="removeGuest5()">Check Out</button>
    <button id="remall" onclick="removeAll5()">Check Everyone Out</button>
    <button id="cle5" onclick="clean5()" >Clean Room</button>
  </div>
  <div id="sixth">
    <h1 id="title">Room Six</h1>
    <input type= "text" id="user6" placeholder="Enter Guest Name">
    <button id="enter" onclick="enterGuest6()">Enter Guest</button>
    <ol id="room6list"></ol>
    <p id="full6"></p>
    <p id="cleaning6"></p>
    <input type="text" id="remove6" placeholder="Enter guest number to check out">
    <button id="rem" onclick ="removeGuest6()">Check Out</button>
    <button id="remall" onclick="removeAll6()">Check Everyone Out</button>
    <button id="cle6" onclick="clean6()" >Clean Room</button>
  </div>
  
    </div>
    <div id="bottom"><p>Royal Pastrami Luxury Hotels & Resorts is a global brand of full-service hotels and resorts and the flagship brand of American multinational hospitality company Royal Pastrami. The original company was founded by Royal Hotels.
    © 1996 – 2019  Royal Pastrami International, Inc. All rights reserved. Turtle Proprietary Information</p></div>
    
  
   
 <script src="hotelproject.js"></script>
  
  
</body>
</html>




















csss
body{
  background-image:url("ocean.jpg");
  background-repeat:no-repeat;
font-family: 'Cormorant Garamond', serif;
color:#084869;
}

html{
  scroll-behavior:smooth;


}
#hotelbox{
  width:100%;
  height:13%;
  font-size:80px;
  padding:0;
  text-align:center;
  margin:0;
  margin-top:3%;
  
  
}
hr{
  bottom:5%;
  background-color:black;
  border-color:black;
  width:80%;
  margin:0;
  margin-left:auto;
  margin-right:auto;
  color:black;
  
  
  
}
h1{
  text-align:center;
  font-size:40px;
  color:#020b24;
}
#hotel1{
  text-align:center;
  font-size:35px;
  margin-top:5%;
  color:#020b24;
}
img{
  width:100%;
  height:100%;
  
}
button{
  font-family: 'Cormorant Garamond', serif;
  font-size:15px;
  color:#020b24;
  font-weight:bold
    
}
input{
  font-family: 'Cormorant Garamond', serif;
    background:transparent;
    color:black;
    font-size:15px;
}
#smoothButton{
  width:100%;
  height:100%;
  font-size:33px;
  border-radius:12px;
  
 
  border-style:none;
  
}

#smoothbox{
  width:25%;
  height:10%;
  margin-top:5%;
  margin-left:37%;
  position:absolute;
  border-radius:12px;
  
}
#user1{
  width:100%;
}
#remove{
  width:100%;
}
#user2{
  width:100%;
}
#remove2{
  width:100%;
}
#user3{
  width:100%;
}
#remove3{
  width:100%;
}
#user4{
  width:100%;
}
#remove4{
  width:100%;
}
#user5{
  width:100%;
}
#remove5{
  width:100%;
}
#user6{
  width:100%;
}
#remove6{
  width:100%;
}

#remall{
  width:100%;
  
}
#cle{
  width:100%;
}
#rem{
  width:100%;
}
#enter{
  width:100%;
  height:4%;
}
#cle2{
  width:100%;
}
#cle3{
  width:100%;
}
#cle4{
  width:100%;
}
#cle5{
  width:100%;
}
#cle6{
  width:100%;
}



#first{
      border-style:solid;
      
      width:20%;
      position:absolute;
      margin-top:1%;
      
    }
::placeholder{
  font-family: 'Cormorant Garamond', serif;
  color:black;
}
  
    

#second{
      border-style:solid;
      width:20%;
      margin-left:20.5%;
      
      position:absolute;
      margin-top:1%;
      
    }
    
   
    
    
#third{
      border-style:solid;
      width:20%;
      margin-left:40.99%;
      position:absolute;
      margin-top:1%;
      
    }
  
    
#fourth{
      border-style:solid;
      width:20%;
      margin-top:31%;
      position:absolute;
      
    }
  
    
#fifth{
      border-style:solid;
      width:20%;
      position:absolute;
      margin-left:20.5%;
      margin-top:31%;
      

      
    }
  
   

#sixth{
      border-style:solid;
      width:20%;
      position:absolute;
      margin-left:40.99%;
      margin-top:31%;

    }
#whole{

  height:140%;
  
  width:62%;
  margin-left:18%;
  margin-top:45%;

}
    
#bottom{
  background-color:lightblue;
  height:10%;
  color:black;
  position:absolute;
  text-align:center;
  margin-left:-1%;
  margin-right:2%;
  width:100.4%;
}
#totalGuests{
  border-style:solid;
  width:15%;
  position:absolute;
  color:#020b24;
  font-weight:bold;
}
.li1{
  color:#020b24;
  font-weight:bold;
}
.li2{
  color:#020b24;
  font-weight:bold;
}
.li3{
  color:#020b24;
  font-weight:bold;
}
.li4{
  color:#020b24;
  font-weight:bold;
}
.li5{
  color:#020b24;
  font-weight:bold;
}
.li6{
  color:#020b24;
  font-weight:bold;
}
p{
  color:#020b24;
  font-weight:bold;
}
