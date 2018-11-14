var speciesL = null;
var speciesA = [];
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
  console.log(parsed);

}
}
