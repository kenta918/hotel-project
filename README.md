<html>
<head>
  <link rel="stylesheet" href="hotelproject.css">


</head>
<body>
  <div id="first">
    <h1 id="title">Room One</h1>
    <input type= "text" id="user">
    <button id="enter" onclick="enterGuest()">Enter Guest</button>
    <ol id="he"></ol>
    <ol id="he2"></ol>
    <ol id="he3"></ol>
    <ol id="he4"></ol>
    <ol id="he5"></ol>
    <ol id="he6"></ol>

    <p id="full"></p>
    <input type="text" id="remove" placeholder="Enter check out guest number">
    <button id="rem" onclick ="removeGuest()">Check Out</button>
    <button id="remall" onclick="removeAll()">Check Everyone Out</button>
    <button id="cle" onclick="clean()" >Clean Room</button>
    <select id="rooms" onchange="rooms()">
    <option value="room1">Room 1</option>
    <option value="room2">Room 2</option>
    <option value="room3">Room 3</option>
    <option value="room4">Room 4</option>
    <option value="room5">Room 5</option>
    <option value="room6">Room 6</option>
    </select>
  </div>
    
    
    
    
  
   
 <script src="hotelproject.js"></script>
  
  
</body>
</html>













var list = document.getElementsByTagName('li').length;
  
  
  
  var room = true;
  function clean(){
    
    if(room === true){
      room  = false;
      document.getElementById("cle").style.color = 'red';
    }
    
    else{
      document.getElementById("cle").style.color ="";
      room = true;
      var full = document.getElementById("full").innerHTML="";

    }
  }
  function enterGuest(){
    if(document.getElementsByTagName('li').length > 3){
      document.getElementById("full").innerHTML="Room is full";
      return;
    
  }
    else if(document.getElementById("user").value.length === 0){
      window.alert("Please enter a guest name");

  }
    else if(room === false){
      document.getElementById("full").innerHTML="Room is closed for cleaning";

  }
    else if(document.getElementById("rooms").value == "room1"){
      var time = new Date();
      var hour = time.getHours();
      var min = time.getMinutes();
      var sec = time.getSeconds();
      var list = document.getElementsByTagName('li').length;
      var newList = document.createElement("li");
      var x = document.createTextNode(document.getElementById("user").value + ' ' + hour+':'+min+':'+sec);
      newList.appendChild(x);
      var position = document.getElementsByTagName("ol")[0];
      position.appendChild(newList);
      var y = document.getElementById("user").value ="";
      document.getElementById("full").innerHTML="";

    
    }
    
      else if(document.getElementById("rooms").value == "room2"){
        var time = new Date();
        var hour = time.getHours();
        var min = time.getMinutes();
        var sec = time.getSeconds();
        var list = document.getElementsByTagName('li').length;
        var newList = document.createElement("li");
        var x = document.createTextNode(document.getElementById("user").value + ' ' + hour+':'+min+':'+sec);
        newList.appendChild(x);
        var position = document.getElementsByTagName("ol")[0];
        position.appendChild(newList);
        var y = document.getElementById("user").value ="";
        document.getElementById("full").innerHTML="";
        document.getElementById("title").innerHTML="Room Two";
      }
  
  }
  function removeGuest(){
    if(document.getElementsByTagName('li').length > 3){
      var full = document.getElementById("full").value= "";
      var userNum = document.getElementById("remove").value;
      var child = document.getElementsByTagName("li")[userNum-1];
      var parent = child.parentNode;
      parent.removeChild(child);
      document.getElementById("full").innerHTML="";
      document.getElementById("remove").value ="";

    }
    else {
         //I will get the value of the Rem
        var userNum = document.getElementById("remove").value;
        //I will convert it to ta number
        //I will get the child based on the number
        var child = document.getElementsByTagName("li")[userNum-1];
        //I will get the parent of the child
        var parent = child.parentNode;
        //I will remove the child from the parent
        parent.removeChild(child);
        document.getElementById("full").innerHTML="";
        document.getElementById("remove").value="";


      }
      
  }
  function removeAll(){
    document.getElementById("he").innerHTML = "";
    var full = document.getElementById("full").innerHTML="";

    
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  

 
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  #first{
      border-style:solid;
      width:20%;
      
    }
    
    #user{
      width:100%;
    }
    #enter{
      width:100%;
      height:10%;
    
    }
h1{
  text-align:center;
}
#second{
      border-style:solid;
      width:20%;
      
    }
    
    #user{
      width:100%;
    }
    #enter{
      width:100%;
      height:10%;
    
    }
