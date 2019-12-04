






//room 1
var room = true;// make the room all open or true
var totalguest1 = 0;  //global variable that stores the number of guests in room 1
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
function enterGuest() {//to enter guest
  if (totalguest1 < 4) {//if the amount of guest is less than 4 people...
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
    
    
    var node = document.createElement("LI"); //I am going to create a new list item
    node.setAttribute("class", "li1");// i set an attribute name so the li is specified
    var guest = document.getElementById("user1").value+ ' '+day+'  ' +hour+':'+min+':'+sec+' '+amPm; //I am going to get the value from the input field
    var textnode = document.createTextNode(guest); //i am saying the variable guest as a text node
    node.appendChild(textnode); // i am attaching textnode to the list item
    document.getElementById("room1list").appendChild(node); //i am appending the list
    document.getElementById("user1").value ="";//clear the input field for new guests
    document.getElementById("full").innerHTML = "";//clears the full field if anything inside
    if(totalguest1 + 1){//if a guest is added then..
      var nody = document.createElement("li");//create a li
      nody.setAttribute("id","allgues");//set an attribute to the li
      var text = document.createTextNode(guest);//get the guest var from the function above and node it to a new var
      nody.appendChild(text);//use that new var from above and append it to the created li
      document.getElementById("total").appendChild(nody);//get the appended li and append it to the ol id "total"
    }
    
    }
    
  }
  else if(totalguest1 == "clean"){//when I pressed the lock button for cleaning it changes the totalguest to clean then..
    document.getElementById("cleaning").innerHTML="Room is locked for cleaning unlock to check guests in";//it will notice the user that the room is locked fro cleaning
  }
  else//if the totalguest is greater than 4 ..
    document.getElementById("full").innerHTML="Room is Full";//notice the user that the room is full

}

function removeGuest() {//function to remove guest
  totalguest1--;// removes one guest value
  var rem = document.getElementById("room1list"); //makes the room list into a variable
  var remNum1 = document.getElementById("remove").value; // takes the value of the user input remove number
  var child1 = document.getElementsByClassName("li1")[remNum1-1];//get the li and takes the user remove number and labels the guest as that
  rem.removeChild(child1);//the parent room1list variable  removes the child which is selected by the users number
  document.getElementById("remove").value="";// makes the user input clear to input new number
  document.getElementById("full").innerHTML="";//clear the full element if anythings inside
  }
function removeAll() {//function to remove everyone in the room
  totalguest1 = 0;//make the global var to 0
  document.getElementById("room1list").innerHTML = "";//clears the ordered list of everyone
  var full = document.getElementById("full").innerHTML = "";// if anythings is in this element it will clear it
}

















//room 2
var room2 = true;
var totalguest2 = 0;  //global variable that stores the number of guests in room 1
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

    var node = document.createElement("li");//I am going to create a new list item
    node.setAttribute("class","li2");
    var guest2 = document.getElementById("user2").value+ ' '+day+' ' +hour+':'+min+':'+sec+' '+amPm; //I am going to get the value from the input field
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
    var node = document.createElement("LI"); //I am going to create a new list item
    node.setAttribute("class", "li3");
    var guest = document.getElementById("user3").value+ ' '+day+'  ' +hour+':'+min+':'+sec+' '+amPm; //I am going to get the value from the input field
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
    var node = document.createElement("LI"); //I am going to create a new list item
    node.setAttribute("class", "li4")
    var guest = document.getElementById("user4").value+ ' '+day+'  ' +hour+':'+min+':'+sec+' '+amPm; //I am going to get the value from the input field
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
    var node = document.createElement("LI"); //I am going to create a new list item
    node.setAttribute("class","li5");
    var guest = document.getElementById("user5").value+ ' '+day+'  ' +hour+':'+min+':'+sec+' '+amPm; //I am going to get the value from the input field
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
    var node = document.createElement("LI"); //I am going to create a new list item
    node.setAttribute("class","li6");
    var guest = document.getElementById("user6").value+ ' '+day+'  ' +hour+':'+min+':'+sec+' '+amPm; //I am going to get the value from the input field
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








