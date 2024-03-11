var sidenav = document.getElementById("sidenav");
var menuicon = document.getElementById("menuicon");
var closenav = document.getElementById("closenav");

menuicon.addEventListener("click", function () {
  sidenav.style.right = 0;
});

closenav.addEventListener("click", function () {
  sidenav.style.right = "-50%";
});

// Watch Video
var watchButton = document.getElementById("watchButton");
var videoMessage = document.getElementById("videoMessage");

watchButton.addEventListener("mouseout", function () {
    videoMessage.style.display = "none";
  });
  
watchButton.addEventListener("mouseover", function () {
  videoMessage.style.display = "block";
});



 // Subscribe button
 const emailInput = document.getElementById('emailInput');
 const subscribeBtn = document.getElementById('subscribeBtn');

 subscribeBtn.addEventListener('click', function() {
   const email = emailInput.value;

   if (email.trim() !== '') 
   {
     alert('Thank you for subscribing!');
     emailInput.value = '';
   }
    else 
   {
     alert('Please enter your email address.');
   }
 });
