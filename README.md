//room 1
var room = true;
var totalguest1 = 0;  //global variable that stores the number of guests in room 1
function clean(){
  if(room === true){
    room  = false;
    document.getElementById("cle").style.color = 'red';
    document.getElementById("full").innerHTML="";
    document.getElementById("room1list").innerHTML = "";
    totalguest1 = "clean";
  }
  else{
    document.getElementById("cle").style.color ="";
    room = true;
    document.getElementById("cleaning").innerHTML="";
    totalguest1 = 0;
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
    var hour = time.getHours();
    var min = time.getMinutes();
    var sec = time.getSeconds();
    var node = document.createElement("LI"); //I am going to create a new list item
    var guest = document.getElementById("user1").value+ ' ' +hour+':'+min+':'+sec; //I am going to get the value from the input field
    var textnode = document.createTextNode(guest); //i am saying the variable guest as a text node
    node.appendChild(textnode); // i am attaching textnode to the list item
    document.getElementById("room1list").appendChild(node); //i am appending the list
    document.getElementById("user1").value="";
    document.getElementById("full").innerHTML = "";
    }
  }
  else if(totalguest1 == "clean"){
    document.getElementById("cleaning").innerHTML="Room is Cleaning";
  }
  
  else {
    document.getElementById("full").innerHTML="Room is Full";
  }
}
function removeGuest() {
  totalguest1--;
  var num = document.getElementById("remove").value;
  var list = document.getElementById("room1list");
  var child = document.getElementsByTagName("li")[num-1];
  list.removeChild(child);
  }
function removeAll() {
  totalguest1 = 0;
  document.getElementById("room1list").innerHTML = "";
  var full = document.getElementById("full").innerHTML = "";
}











//room 2
var room2 = true;
var totalguest2 = 0;  //global variable that stores the number of guests in room 2
function clean2(){
  if(room2 === true){
    room2  = false;
    document.getElementById("cle2").style.color = 'red';
    document.getElementById("full2").innerHTML="";
    document.getElementById("room2list").innerHTML = "";
    totalguest2 = "clean2";
  }
  else{
    document.getElementById("cle2").style.color ="";
    room2 = true;
    document.getElementById("cleaning2").innerHTML="";
    totalguest2 = 0;
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
    var hour = time.getHours();
    var min = time.getMinutes();
    var sec = time.getSeconds();
    var node = document.createElement("LI"); //I am going to create a new list item
    var guest = document.getElementById("user2").value+ ' ' +hour+':'+min+':'+sec; //I am going to get the value from the input field
    var textnode = document.createTextNode(guest); //i am saying the variable guest as a text node
    node.appendChild(textnode); // i am attaching textnode to the list item
    document.getElementById("room2list").appendChild(node); //i am appending the list
    document.getElementById("user2").value="";
    document.getElementById("full2").innerHTML = "";
    }
  }
  else if(totalguest2 == "clean2"){
    document.getElementById("cleaning2").innerHTML="Room is Cleaning";
  }
  else {
    document.getElementById("full2").innerHTML="Room is Full";
  }
}
function removeGuest2() {
  totalguest2--;
  var num2 = document.getElementById("remove2").value;
  var list2 = document.getElementById("room2list");
  var child2 = document.getElementsByTagName("LI")[num2-1];
  list2.removeChild(child2);
  }
function removeAll2() {
  totalguest2 = 0;
  document.getElementById("room2list").innerHTML = "";
  document.getElementById("full2").innerHTML = "";
}













html
<html>
<head>
  <link rel="stylesheet" href="hotelproject.css">


</head>
<body>
  <h1 id="hotel">Turtle Hotel</h1>
  <h2 id="hotel1">Welcome to the Automated Front Desk of Turtle Hotel</h2>
 <div id="smoothbox"><a href ="#whole"><button id="smooth">Begin Your Check-In</button></a></div>
  <!--<div id="totalGuests"><ol id="total"></ol></div final step-->
  <div id="whole">
  
  <div id="first">
    <h1 id="title">Room One</h1>
    <input type= "text" id="user1" >
    <button id="enter" onclick="enterGuest()">Enter Guest</button>
    <ol id="room1list"></ol>
    <p id="full"></p>
    <p id="cleaning"></p>
    <input type="text" id="remove" placeholder="Enter guest number to check out">
    <button id="rem" onclick ="removeGuest()">Check Out</button>
    <button id="remall" onclick="removeAll()">Check Everyone Out</button>
    <button id="cle" onclick="clean()" >Clean Room</button>
  </div>
  
  <div id="second">
    <h1 id="title">Room Two</h1>
    <input type= "text" id="user2">
    <button id="enter" onclick="enterGuest2()">Enter Guest</button>
    <ol id="room2list"></ol>
    <p id="full2"></p>
    <p id="cleaning2"></p>
    <input type="text" id="remove2" placeholder="Enter guest number to check out">
    <button id="rem" onclick ="removeGuest2()">Check Out</button>
    <button id="remall" onclick="removeAll2()">Check Everyone Out</button>
    <button id="cle2" onclick="clean2()" >Clean Room</button>
  </div>
  <div id="third">
    <h1 id="title">Room Three</h1>
    <input type= "text" id="user3">
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
    <input type= "text" id="user4">
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
    <input type= "text" id="user5">
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
    <input type= "text" id="user6">
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
    
  
   
 <script src="hotelproject.js"></script>
  
  
</body>
</html>

















css
body{
  font-family: 'Indie Flower', cursive;
  background-image:url("ocean.jpg");
  background-repeat:no-repeat;


}
html{
  scroll-behavior:smooth;
}
#hotel{
  font-size:100px;
}
#hotel1{
  text-align:center;
  font-size:35px;
}
img{
  width:100%;
  height:100%;
  
}
button{
    font-family: 'Indie Flower', cursive;
    
}
input{
    font-family: 'Indie Flower', cursive;

}
#smooth{
  width:100%;
  height:100%;
  font-size:25px;
  
}
#smoothbox{
  width:25%;
  height:10%;
  margin-left:37%;
  margin-top:5%;
  position:absolute;
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



h1{
  text-align:center;
}
#first{
      border-style:solid;
      width:20%;
      position:absolute;
      margin-top:2%;
    }
::placeholder{
  font-family:'Indie Flower', cursive;
}
  
    

#second{
      border-style:solid;
      width:20%;
      margin-left:20.5%;
      margin-bottom:;
      position:absolute;
      margin-top:2%;
    }
    
   
    
    
#third{
      border-style:solid;
      width:20%;
      margin-left:41%;
      position:absolute;
      margin-top:2%;
      
    }
  
    
#fourth{
      border-style:solid;
      width:20%;
      margin-top:29%;
      position:absolute;
      
    }
  
    
#fifth{
      border-style:solid;
      width:20%;
      position:absolute;
      margin-left:20.5%;
      margin-top:29%;
      

      
    }
  
   

#sixth{
      border-style:solid;
      width:20%;
      position:absolute;
      margin-left:41%;
      margin-top:29%;

    }
#whole{
  border-style:solid;
  border-color:white;
  height:147%;
  width:62%;
  margin-left:18%;
  margin-top:45%;

}
    



















