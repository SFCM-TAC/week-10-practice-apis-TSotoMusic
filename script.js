var speciesL = null;
var speciesA = null;


var starWars = new XMLHttpRequest();
starWars.open('GET', 'https://swapi.co/api/', true);
starWars.send();


starWars.onload = function() {
  var response = starWars.response;
  var parsed = JSON.parse(response);
console.log(parsed);
var speciesL = parsed.species;

console.log(speciesL);
var species = new XMLHttpRequest();
species.open('GET', speciesL, true);
species.send();

species.onload = function() {
  var response = species.response;
  var parsed = JSON.parse(response);
  speciesA = parsed.results
  console.log(speciesA);
}
}

function loadImage(event) {
var par = document.getElementById('imageDiv');
  switch(event.target.id) {
    case "1":
      var img = document.getElementById('image');
      img.src = 'images/hutt.png';
      img.style.maxHeight = '100%';
      img.style.maxWidth = '100%';
      break;
    case "2":
      var img = document.getElementById('image');
      img.src = 'images/yoda.png';
      img.style.maxHeight = '75%';
      img.style.maxWidth = '75%';
      break;
    case "3":
      var img = document.getElementById('image');
      img.src = 'images/trandoshan.png';
      img.style.maxHeight = '75%';
      img.style.maxWidth = '75%';
      break;
    case "4":
      var img = document.getElementById('image');
      img.src = 'images/monCalamari.jpg';
      img.style.maxHeight = '75%';
      img.style.maxWidth = '75%';
      break;
    case "5":
      var img = document.getElementById('image');
      img.src = 'images/ewok.jpg';
      img.style.maxHeight = '100%';
      img.style.maxWidth = '100%';
      break;
    case "6":
      var img = document.getElementById('image');
      img.src = 'images/sullustan.jpg';
      img.style.maxHeight = '65%';
      img.style.maxWidth = '65%';
      break;
    case "7":
      var img = document.getElementById('image');
      img.src = 'images/neimodian.png';
      img.style.maxHeight = '50%';
      img.style.maxWidth = '50%';
      break;
    case "8":
      var img = document.getElementById('image');
      img.src = 'images/gungan.jpg';
      img.style.maxHeight = '75%';
      img.style.maxWidth = '75%';
      break;
    case "9":
      var img = document.getElementById('image');
      img.src = 'images/toydarian.jpg';
      img.style.maxHeight = '75%';
      img.style.maxWidth = '75%';
      break;
    case "10":
      var img = document.getElementById('image');
      img.src = 'images/dug.jpg';
      img.style.maxHeight = '60%';
      img.style.maxWidth = '60%';
      break;
  }
  console.log(event.target.id)
}


/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function speciesList() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
