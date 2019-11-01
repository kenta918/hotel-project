<html>
<head>
  <style>
    #first{
      border-style:solid;
      width:20%;
    }
    
    #user{
      width:100%;
    }
    #enter{
      width:100%;\
      height:10%;
    }
    
  </style>


</head>
<body>
  <div id="first">
  <input type= "text" id="user">

  <button id="enter" onclick="enterGuest()">Enter Guest</button>
  <ol></ol>
  <p id="full"></p>
  <input type="text" id="remove">
  <button onclick ="removeGuest()">Check out</button>
  <button onclick="removeAll()">Remove All</button>
  </div>
  
 
  
  <script>
  var list = document.getElementsByTagName('li').length;
  function enterGuest(){
    if(document.getElementsByTagName('li').length > 3){
    var full = document.getElementById("full").innerHTML="Room is full";
    return;
    
  }
    else if(document.getElementById("user").value.length === 0){
      var full = window.alert("Please enter a guest")

  }
    else {
    var list = document.getElementsByTagName('li').length;
  
    var newList = document.createElement("li");
    var x = document.createTextNode(document.getElementById("user").value);
    newList.appendChild(x);
    var position = document.getElementsByTagName("ol")[0];
    position.appendChild(newList);
    var y = document.getElementById("user").value ="";
    }
  }
  function removeGuest(){
    if(document.getElementsByTagName('li').length > 3){
      var full = document.getElementById("full").value= "";
      var userNum = document.getElementById("remove").value;
      var child = document.getElementsByTagName("li")[userNum-1];
      var parent = child.parentNode;
      parent.removeChild(child);
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
      }
      
  }
  function removeAll(){
    document.getElementsByTagName("ol") =[""];
    
  }
  
  
  
  </script>
</body>
</html>
