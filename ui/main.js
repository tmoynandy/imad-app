console.log('Loaded!');
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

function loadabout(){
    //a click event occured jeta loadabout k call kore
    //now create an XMLHttpRequest object
    var req= new XMLHttpRequest();
    //now every time there is a change in state of the XMLHttpRequest, a function call is made
    // req.onreadystatechange detects change and calls function
    req.onreadystatechange=function(){
        
      if(this.readyState==4 && this.status==200){
          console.log('in 200')
          document.getElementsByClassName("container")[0].innerHTML = this.responseText;
      }  
    };
    req.open("GET", "http://tmoynandycourses.imad.hasura-app.io/ui/about.html", true);
  req.send();
}

function loadabout(){
    //a click event occured jeta loadabout k call kore
    //now create an XMLHttpRequest object
    var req= new XMLHttpRequest();
    //now every time there is a change in state of the XMLHttpRequest, a function call is made
    // req.onreadystatechange detects change and calls function
    req.onreadystatechange=function(){
        
      if(this.readyState==4 && this.status==200){
          console.log('in 200')
          document.getElementsByClassName("container")[0].innerHTML = this.responseText; //[0] because am calling elements..multiple gets returned but i want only one
      }  
    };
    req.open("GET", "http://tmoynandycourses.imad.hasura-app.io/ui/about.html", true);
  req.send();
}

function loadcontact(){
    //a click event occured jeta loadabout k call kore
    //now create an XMLHttpRequest object
    var req= new XMLHttpRequest();
    //now every time there is a change in state of the XMLHttpRequest, a function call is made
    // req.onreadystatechange detects change and calls function
    req.onreadystatechange=function(){
        
      if(this.readyState==4 && this.status==200){
          console.log('in 200')
          document.getElementsByClassName("container")[0].innerHTML = this.responseText;//[0] because am calling elements..multiple gets returned but i want only one
      }  
    };
    req.open("GET", "http://tmoynandycourses.imad.hasura-app.io/ui/contact.html", true);
  req.send();
}

function loadworks(){
    //a click event occured jeta loadabout k call kore
    //now create an XMLHttpRequest object
    var req= new XMLHttpRequest();
    //now every time there is a change in state of the XMLHttpRequest, a function call is made
    // req.onreadystatechange detects change and calls function
    req.onreadystatechange=function(){
        
      if(this.readyState==4 && this.status==200){
          console.log('in 200')
          document.getElementsByClassName("container")[0].innerHTML = this.responseText;//[0] because am calling elements..multiple gets returned but i want only one
      }  
    };
    req.open("GET", "http://tmoynandycourses.imad.hasura-app.io/ui/works.html", true);
  req.send();
}