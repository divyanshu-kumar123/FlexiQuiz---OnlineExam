var myIndex = 0;
carousel();


//search button
function carousel() {
var i;
var x = document.getElementsByClassName("mySlides");
for (i = 0; i < x.length; i++) {
x[i].style.display = "none";
}
myIndex++;
if (myIndex > x.length) {myIndex = 1}
x[myIndex-1].style.display = "block";
setTimeout(carousel, 2500);
}

var input = document.getElementById("search");
   input.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {  
      validate(e);
    }
  });

   function validate(e) {
   if (input.value == "home"){
       window.open('homepage.html')
   }else if(input.value == "about"){
       window.open('about.html')
   }else if(input.value == "contact"){
       window.open('contact.html')
    }else if(input.value == "exam"){
       window.open('exam1.html')
    }else if(input.value == "report"){
        window.open('report.html')
   }else{
       alert("No Input Found Of Your Match")
   }
    
  }