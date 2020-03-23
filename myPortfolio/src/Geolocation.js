var myLocation = document.getElementById("coordinates")

function getLocation() { //this is where I call the function
  if(navigator.geolocation){ 
    navigator.geolocation.getCurrentPosition(displayPosition)
  } else { 
   myLocation.innerHTML = "Not available"
  }
}

function displayPosition(position) { 
  myLocation.innerHTML = "Longitude: " + position.coords.longitude + " Latitude: " + position.coords.latitude
}