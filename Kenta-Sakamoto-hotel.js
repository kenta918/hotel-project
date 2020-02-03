
function page2(){
  window.open("Kenta-Sakamoto-hotelGuests.html");

     }




//room 1
var room = true;// make the room all open or true
var totalguest1 = 0;  //global variable that stores the number of guests in room 1
var x= []
function clean(){
  if(room === true){// if the room is open then..
    if(totalguest1 == 0){//if no one is in the room then..
      room  = false;//when the room is cleared I make the room lock or "false"
      document.getElementById("cle").style.backgroundColor = '#0f2af5' ;//this will change the button color to blue to show it is locked
      document.getElementById("full").innerHTML="";//it will clear the full element if anything is inside
      totalguest1 = "clean";// this will set the totalguest value to clean for later use
    }
    else if(totalguest1 > 0 ){//if people are still in the room then..
      document.getElementById("full").innerHTML ="Guests are still checked in";//I will not lock the room and say there still guests
    }
    }
  else{//if this room is false and button is clicked then..
    document.getElementById("cle").style.backgroundColor ="";// change the button color to normal
    room = true;//make the room true or open again
    totalguest1 = 0;//make sure the room is set to 0
    document.getElementById("full").innerHTML="";//make the full notice clear if anythings inside
    document.getElementById("cleaning").innerHTML="";//or make the cleaning element clear to show it isn't cleaning anymore
  }
}
var inp = document.getElementById("user1");
inp.addEventListener("keyup", function(event){
  if(event.keyCode === 13){
    event.preventDefault();
    if(totalguest1 < 4) {//if the amount of guest is less than 4 people...
      if(document.getElementById("user1").value == 0 ){//if the user inputs no name ..
      document.getElementById("full").innerHTML="Please enter a name";//notice that no one name was inputted.
    }
    else{//if everything else isn't then.. be able add guests
      totalguest1++; //I will add one to the guest
      var time = new Date();//gets the date function
      var day = time.getDay();//gets the day function in the date function
      var hour = time.getHours();// gets the hour function in the date function
      var min = time.getMinutes();//get the minutes function in  the date function
      var sec = time.getSeconds();//gets the seconds function in the date function
      var amPm = time.getHours();
    if(day == 0){//if the day value is 0, 1,2,3,4,5,6
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
    if(hour ==  13){
      hour=1;
    }
    else if (hour ==14){
      hour=2;
    }
    else if (hour ==15){
      hour=3;
    }
    else if (hour ==16){
      hour=4;
    }
    else if (hour ==17){
      hour=5;
    }
    else if (hour ==18){
      hour=6;
    }
    else if (hour ==19){
      hour=7;
    }
    else if (hour ==20){
      hour=8;
    }
    else if (hour ==21){
      hour=9;
    }
    else if (hour ==22){
      hour=10;
    }
    else if (hour ==23){
      hour=11;
    }
    else if (hour ==24){
      hour=12;
    }
    if(amPm > 11){
      amPm = "pm";
    }
    else{
      amPm="am";
    }
    if(min < 10){
      min =('0'+min);
  }
    
    if(sec < 10){
      sec =('0'+sec);
    }
    var node = document.createElement("li");//I am going to create a new list item
    node.setAttribute("class","li1");
    var guest = document.getElementById("user1").value+ ' '+day+' ' +hour+':'+min+':'+sec+' '+amPm; //I am going to get the value from the input field
    var textnode = document.createTextNode(guest); //i am saying the variable guest as a text node
    node.appendChild(textnode); // i am attaching textnode to the list item
    document.getElementById("room1list").appendChild(node); //i am appending the list
    document.getElementById("user1").value ="";
    document.getElementById("full").innerHTML = "";
    
    x.push(guest);
    
    localStorage.setItem("info", x);


    
    }
  }
  else if(totalguest1 == "clean"){
    document.getElementById("cleaning").innerHTML="Room is locked for cleaning unlock to check guests in";
  }
  else {
    document.getElementById("full").innerHTML="Room is Full";
  }
}
     });
     
var remo = document.getElementById("room1list");
remo.addEventListener("click", function(event){
  var li = event.target;
  remo.removeChild(li);
  totalguest1--;
  document.getElementById("full").innerHTML = "";

});
   
function removeAll() {//function to remove everyone in the room
  totalguest1 = 0;//make the global var to 0
  document.getElementById("room1list").innerHTML = "";//clears the ordered list of everyone
  var full = document.getElementById("full").innerHTML = "";// if anythings is in this element it will clear it
  
}















//room 2
var room2 = true;
var totalguest2 = 0;  //global variable that stores the number of guests in room 1
var x2 =[]
function clean2(){
  if(room2 === true){
    if(totalguest2 == 0){
      room2  = false;
      document.getElementById("cle2").style.backgroundColor = '#0f2af5' ;
      document.getElementById("full2").innerHTML="";
      document.getElementById("room2list").innerHTML="";
      totalguest2 = "clean2";
    }
    else if(totalguest2 > 0 ){
      document.getElementById("full2").innerHTML ="Guests are still checked in"
    
    }
    }
  else{
    document.getElementById("cle2").style.backgroundColor ="";
    room2 = true;
    totalguest2 = 0;
    document.getElementById("full2").innerHTML="";
    document.getElementById("cleaning2").innerHTML="";
  }
}
var inp = document.getElementById("user2");
inp.addEventListener("keyup", function(event){
  if(event.keyCode === 13){
    event.preventDefault();
    if(totalguest2 < 4) {
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
    var amPm = time.getHours()
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
    if(hour ==  13){
      hour=1;
    }
    else if (hour ==14){
      hour=2;
    }
    else if (hour ==15){
      hour=3;
    }
    else if (hour ==16){
      hour=4;
    }
    else if (hour ==17){
      hour=5;
    }
    else if (hour ==18){
      hour=6;
    }
    else if (hour ==19){
      hour=7;
    }
    else if (hour ==20){
      hour=8;
    }
    else if (hour ==21){
      hour=9;
    }
    else if (hour ==22){
      hour=10;
    }
    else if (hour ==23){
      hour=11;
    }
    else if (hour ==24){
      hour=12;
    }
    if(amPm > 11){
      amPm = "pm";
    }
    else{
      amPm="am";
    }
    if(min < 10){
      min =('0'+min);
  }
    
    if(sec < 10){
      sec =('0'+sec);
    }

    var node = document.createElement("li");//I am going to create a new list item
    node.setAttribute("class","li2");
    var guest2 = document.getElementById("user2").value+ ' '+day+' ' +hour+':'+min+':'+sec+' '+amPm; //I am going to get the value from the input field
    var textnode = document.createTextNode(guest2); //i am saying the variable guest as a text node
    node.appendChild(textnode); // i am attaching textnode to the list item
    document.getElementById("room2list").appendChild(node); //i am appending the list
    document.getElementById("user2").value ="";
    document.getElementById("full2").innerHTML = "";
    x2.push(guest2);
    
    localStorage.setItem("info2", x2);

    }
  }
  else if(totalguest2 == "clean2"){
    document.getElementById("cleaning2").innerHTML="Room is locked for cleaning unlock to check guests in";
  }
  else {
    document.getElementById("full2").innerHTML="Room is Full";
  }
}
      
     });
var remo2 = document.getElementById("room2list");
remo2.addEventListener("click", function(event){
  var li2 = event.target;
  remo2.removeChild(li2);
  totalguest2--;
  document.getElementById("full2").innerHTML = "";

});

function removeAll2() {
  totalguest2 = 0;
  document.getElementById("room2list").innerHTML = "";
  var full = document.getElementById("full2").innerHTML = "";
}



















//room 3
var room3 = true;
var x3 =[]

var totalguest3 = 0;  //global variable that stores the number of guests in room 1
function clean3(){
  if(room3 === true){
    if(totalguest3 == 0){
      room3  = false;
      document.getElementById("cle3").style.backgroundColor = '#0f2af5';
      document.getElementById("full3").innerHTML="";
      document.getElementById("room3list").innerHTML="";
      totalguest3 = "clean3";
  }
    else if(totalguest3 > 0 ){
      document.getElementById("full3").innerHTML ="Guests are still checked in"
    
    }
    }
  else{
    document.getElementById("cle3").style.backgroundColor ="";
    room3 = true;
    totalguest3 = 0;
    document.getElementById("full3").innerHTML="";
    document.getElementById("cleaning3").innerHTML="";
  }
}
var inp = document.getElementById("user3");
inp.addEventListener("keyup", function(event){
  if(event.keyCode === 13){
    event.preventDefault();
    if(totalguest3 < 4) {
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
    var amPm = time.getHours();
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
    if(hour ==  13){
      hour=1;
    }
    else if (hour ==14){
      hour=2;
    }
    else if (hour ==15){
      hour=3;
    }
    else if (hour ==16){
      hour=4;
    }
    else if (hour ==17){
      hour=5;
    }
    else if (hour ==18){
      hour=6;
    }
    else if (hour ==19){
      hour=7;
    }
    else if (hour ==20){
      hour=8;
    }
    else if (hour ==21){
      hour=9;
    }
    else if (hour ==22){
      hour=10;
    }
    else if (hour ==23){
      hour=11;
    }
    else if (hour ==24){
      hour=12;
    }
    if(amPm > 11){
      amPm = "pm";
    }
    else{
      amPm="am";
    }
    if(min < 10){
      min =('0'+min);
  }
    
    if(sec < 10){
      sec =('0'+sec);
    }
    var node = document.createElement("LI"); //I am going to create a new list item
    node.setAttribute("class", "li3");
    var guest = document.getElementById("user3").value+ ' '+day+'  ' +hour+':'+min+':'+sec+' '+amPm; //I am going to get the value from the input field
    var textnode = document.createTextNode(guest); //i am saying the variable guest as a text node
    node.appendChild(textnode); // i am attaching textnode to the list item
    document.getElementById("room3list").appendChild(node); //i am appending the list
    document.getElementById("user3").value ="";
    document.getElementById("full3").innerHTML = "";
    x3.push(guest);
    
    localStorage.setItem("info3", x3);
    }
  }
  else if(totalguest3 == "clean3"){
    document.getElementById("cleaning3").innerHTML="Room is locked for cleaning unlock to check guests in";
  }
  else {
    document.getElementById("full3").innerHTML="Room is Full";
  }
}
      
     });
var remo3 = document.getElementById("room3list");
remo3.addEventListener("click", function(event){
  var li3 = event.target;
  remo3.removeChild(li3);
  totalguest3--;
    document.getElementById("full3").innerHTML = "";

});

function removeAll3() {
  totalguest3 = 0;
  document.getElementById("room3list").innerHTML = "";
  var full = document.getElementById("full3").innerHTML = "";
}


















//room 4
var room4 = true;
var x4 =[]

var totalguest4 = 0;  //global variable that stores the number of guests in room 1
function clean4(){
  if(room4 === true){
    if(totalguest4 == 0){
      room4  = false;
      document.getElementById("cle4").style.backgroundColor = '#0f2af5';
      document.getElementById("full4").innerHTML="";
      document.getElementById("room4list").innerHTML="";
      totalguest4 = "clean4";
    }
    else if(totalguest4 > 0 ){
      document.getElementById("full4").innerHTML ="Guests are still checked in";
    
    }
  }
  else{
    document.getElementById("cle4").style.backgroundColor ="";
    room4 = true;
    totalguest4 = 0;
    document.getElementById("full4").innerHTML="";
    document.getElementById("cleaning4").innerHTML="";
  }
}
var inp = document.getElementById("user4");
inp.addEventListener("keyup", function(event){
  if(event.keyCode === 13){
    event.preventDefault();
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
    var amPm = time.getHours();
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
    if(hour ==  13){
      hour=1;
    }
    else if (hour ==14){
      hour=2;
    }
    else if (hour ==15){
      hour=3;
    }
    else if (hour ==16){
      hour=4;
    }
    else if (hour ==17){
      hour=5;
    }
    else if (hour ==18){
      hour=6;
    }
    else if (hour ==19){
      hour=7;
    }
    else if (hour ==20){
      hour=8;
    }
    else if (hour ==21){
      hour=9;
    }
    else if (hour ==22){
      hour=10;
    }
    else if (hour ==23){
      hour=11;
    }
    else if (hour ==24){
      hour=12;
    }
    if(amPm > 11){
      amPm = "pm";
    }
    else{
      amPm="am";
    }
    if(min < 10){
      min =('0'+min);
  }
    
    if(sec < 10){
      sec =('0'+sec);
    }
    
    var node = document.createElement("LI"); //I am going to create a new list item
    node.setAttribute("class", "li4")
    var guest = document.getElementById("user4").value+ ' '+day+'  ' +hour+':'+min+':'+sec+' '+amPm; //I am going to get the value from the input field
    var textnode = document.createTextNode(guest); //i am saying the variable guest as a text node
    node.appendChild(textnode); // i am attaching textnode to the list item
    document.getElementById("room4list").appendChild(node); //i am appending the list
    document.getElementById("user4").value ="";
    document.getElementById("full4").innerHTML = "";
    x4.push(guest);
    
    localStorage.setItem("info4", x4);
    }
  }
  else if(totalguest4 == "clean4"){
    document.getElementById("cleaning4").innerHTML="Room is locked for cleaning unlock to check guests in";
  }
  else {
    document.getElementById("full4").innerHTML="Room is Full";
  }
    
    
    
  }
     });
var remo4 = document.getElementById("room4list");
remo4.addEventListener("click", function(event){
  var li4 = event.target;
  remo4.removeChild(li4);
  totalguest4--;
  document.getElementById("full4").innerHTML = "";

});

  
function removeAll4() {
  totalguest4 = 0;
  document.getElementById("room4list").innerHTML = "";
  var full = document.getElementById("full4").innerHTML = "";
}














//room 5
var room5 = true;
var x5 =[]

var totalguest5 = 0;  //global variable that stores the number of guests in room 1
function clean5(){
  if(room5 === true){
    if(totalguest5 == 0){
      room5  = false;
      document.getElementById("cle5").style.backgroundColor = '#0f2af5' ;
      document.getElementById("full5").innerHTML="";
      document.getElementById("room5list").innerHTML="";
      totalguest5 = "clean5";
    }
    else if(totalguest5 > 0 ){
      document.getElementById("full5").innerHTML ="Guests are still checked in"
    
    }
    }
  else{
    document.getElementById("cle5").style.backgroundColor ="";
    room5 = true;
    totalguest5 = 0;
    document.getElementById("full5").innerHTML="";
    document.getElementById("cleaning5").innerHTML="";
  }
}
var inp = document.getElementById("user5");
inp.addEventListener("keyup", function(event){
  if(event.keyCode === 13){
    event.preventDefault();
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
    var amPm = time.getHours();
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
    if(hour ==  13){
      hour=1;
    }
    else if (hour ==14){
      hour=2;
    }
    else if (hour ==15){
      hour=3;
    }
    else if (hour ==16){
      hour=4;
    }
    else if (hour ==17){
      hour=5;
    }
    else if (hour ==18){
      hour=6;
    }
    else if (hour ==19){
      hour=7;
    }
    else if (hour ==20){
      hour=8;
    }
    else if (hour ==21){
      hour=9;
    }
    else if (hour ==22){
      hour=10;
    }
    else if (hour ==23){
      hour=11;
    }
    else if (hour ==24){
      hour=12;
    }
    if(amPm > 11){
      amPm = "pm";
    }
    else{
      amPm="am";
    }
    if(min < 10){
      min =('0'+min);
  }
    
    if(sec < 10){
      sec =('0'+sec);
    }
    var node = document.createElement("LI"); //I am going to create a new list item
    node.setAttribute("class","li5");
    var guest = document.getElementById("user5").value+ ' '+day+'  ' +hour+':'+min+':'+sec+' '+amPm; //I am going to get the value from the input field
    var textnode = document.createTextNode(guest); //i am saying the variable guest as a text node
    node.appendChild(textnode); // i am attaching textnode to the list item
    document.getElementById("room5list").appendChild(node); //i am appending the list
    document.getElementById("user5").value ="";
    document.getElementById("full5").innerHTML = "";
    x5.push(guest);
    
    localStorage.setItem("info5", x5);
    }
  }
  else if(totalguest5 == "clean5"){
    document.getElementById("cleaning5").innerHTML="Room is locked for cleaning unlock to check guests in";
  }
  else {
    document.getElementById("full5").innerHTML="Room is Full";
  }

    
      }
     });
var remo5 = document.getElementById("room5list");
remo5.addEventListener("click", function(event){
  var li5 = event.target;
  remo5.removeChild(li5);
  totalguest5--;
  document.getElementById("full5").innerHTML = "";

});

function removeAll5() {
  totalguest5 = 0;
  document.getElementById("room5list").innerHTML = "";
  var full = document.getElementById("full5").innerHTML = "";
}


















//room 6
var room6 = true;
var x6 =[]

var totalguest6 = 0;  //global variable that stores the number of guests in room 1
function clean6(){
  if(room6 === true){
    if(totalguest6 == 0){
      room6  = false;
      document.getElementById("cle6").style.backgroundColor = '#0f2af5' ;
      document.getElementById("full6").innerHTML="";
      document.getElementById("room6list").innerHTML="";
      totalguest6 = "clean6";
    }
    else if(totalguest6 > 0 ){
      document.getElementById("full6").innerHTML ="Guests are still checked in"
    
    }
    }
  else{
    document.getElementById("cle6").style.backgroundColor ="";
    room6 = true;
    totalguest6 = 0;
    document.getElementById("full6").innerHTML="";
    document.getElementById("cleaning6").innerHTML="";
  }
}
var inp = document.getElementById("user6");
inp.addEventListener("keyup", function(event){
  if(event.keyCode === 13){
    event.preventDefault();
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
    var amPm = time.getHours()
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
    if(hour ==  13){
      hour=1;
    }
    else if (hour ==14){
      hour=2;
    }
    else if (hour ==15){
      hour=3;
    }
    else if (hour ==16){
      hour=4;
    }
    else if (hour ==17){
      hour=5;
    }
    else if (hour ==18){
      hour=6;
    }
    else if (hour ==19){
      hour=7;
    }
    else if (hour ==20){
      hour=8;
    }
    else if (hour ==21){
      hour=9;
    }
    else if (hour ==22){
      hour=10;
    }
    else if (hour ==23){
      hour=11;
    }
    else if (hour ==24){
      hour=12;
    }
    if(amPm > 11){
      amPm = "pm";
    }
    else{
      amPm="am";
    }
    if(min < 10){
      min =('0'+min);
  }
    
    if(sec < 10){
      sec =('0'+sec);
    }
    var node = document.createElement("LI"); //I am going to create a new list item
    node.setAttribute("class","li6");
    var guest = document.getElementById("user6").value+ ' '+day+'  ' +hour+':'+min+':'+sec+' '+amPm; //I am going to get the value from the input field
    var textnode = document.createTextNode(guest); //i am saying the variable guest as a text node
    node.appendChild(textnode); // i am attaching textnode to the list item
    document.getElementById("room6list").appendChild(node); //i am appending the list
    document.getElementById("user6").value ="";
    document.getElementById("full6").innerHTML = "";
    x6.push(guest);
    
    localStorage.setItem("info6", x6);
    }
  }
  else if(totalguest6 == "clean6"){
    document.getElementById("cleaning6").innerHTML="Room is locked for cleaning unlock to check guests in";
  }
  else {
    document.getElementById("full6").innerHTML="Room is Full";
  }
      }
     });
var remo6 = document.getElementById("room6list");
remo6.addEventListener("click", function(event){
  var li6 = event.target;
  remo6.removeChild(li6);
  totalguest6--;
  document.getElementById("full6").innerHTML = "";

});
/*function removeGuest6() {
  if(document.getElementById("remove").value !== 0){
    var num = document.getElementById("remove6").value;
    var list = document.getElementById("room6list");
    var child6 = document.getElementsByClassName("li6")[num-1];
    list.removeChild(child6);
    document.getElementById("remove6").value="";
    document.getElementById("full6").innerHTML="";
    totalguest6--;// removes one guest value
  }
  }*/
function removeAll6() {
  totalguest6 = 0;
  document.getElementById("room6list").innerHTML = "";
  var full = document.getElementById("full6").innerHTML = "";
}