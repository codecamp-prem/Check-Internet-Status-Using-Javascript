//To check the internet connection status we are going to use the JavaScript navigator onLine property:
// window.navigator.onLine

var ifConnected = window.navigator.onLine;
if (ifConnected) {
  alert('Connection available');
} else {
  alert('Connection not available');
}

// if we want to see the status change message with the internet connection close or start without page reload, 
// then below is the JavaScript code that can do this
// Run your JavaScript code every n seconds using setInterval() method

var ifConnected = window.navigator.onLine;
    if (ifConnected) {
      document.getElementById("checkOnline").innerHTML = "Online";
      document.getElementById("checkOnline").style.color = "green";
    } else {
      document.getElementById("checkOnline").innerHTML = "Offline";
      document.getElementById("checkOnline").style.color = "red";
    }

setInterval(function(){ 

  var ifConnected = window.navigator.onLine;
    if (ifConnected) {
      document.getElementById("checkOnline").innerHTML = "Online";
      document.getElementById("checkOnline").style.color = "green";
    } else {
      document.getElementById("checkOnline").innerHTML = "Offline";
      document.getElementById("checkOnline").style.color = "red";
    }

 }, 3000);
