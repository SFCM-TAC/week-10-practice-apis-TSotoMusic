var speciesL = null;
var speciesA = null;
// var species1 = null;
// var species2 = null;
// var species3 = null;
// var species4 = null;
// var species5 = null;
// var species6 = null;
// var species7 = null;
// var species8 = null;
// var species9 = null;
// var species10 = null;

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
// for (i=0; i < speciesA.length; i++) {
// }
}
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
