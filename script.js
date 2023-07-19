// Write your JavaScript code here!

const { pickPlanet } = require("./scriptHelper");
import "./scriptHelper";

window.addEventListener("load", function() {

    let listedPlanets = [];
   let listedPlanetsResponse =  myFetch()
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets)

    let chosenPlanet = pickPlanet(listedPlanets)

    addDestinationInfo(document, 
                       chosenPlanet.name, 
                       chosenPlanet.diameter, 
                       chosenPlanet.star, 
                       chosenPlanet.distance,
                       chosenPlanet.moon,
                       chosenPlanet.imageUrl)
   })
   
});