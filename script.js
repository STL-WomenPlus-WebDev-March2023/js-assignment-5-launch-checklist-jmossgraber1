// Write your JavaScript code here!

const { pickPlanet } = require("./scriptHelper");
const {addDestinationInfo} = require("./scriptHelper");
const {formSubmission} = require("./scriptHelper")
const {myFetch} = require("./scriptHelper")

window.addEventListener("load", function() {

    let listedPlanets = [];
    let listedPlanetsResponse =  myFetch()
    listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);

    let chosenPlanet = pickPlanet(listedPlanets)

    addDestinationInfo(document, 
                       chosenPlanet.name, 
                       chosenPlanet.diameter, 
                       chosenPlanet.star, 
                       chosenPlanet.distance,
                       chosenPlanet.moon,
                       chosenPlanet.imageUrl)

   })


//    window.addEventListener("load", function () {
    let form = document.querySelector("form");
    form.addEventListener("submit", function (event) {
       // event.preventDefault();
       let pilotName = document.querySelector("input[name=pilotName]");
       let pilot = pilotName.value
       let copilotName = document.querySelector("input[name=copilotName]");
       let copilot = copilotName.value
       let fuelLevelForm = document.querySelector("input[name=fuelLevel]");
       let fuelLevel = fuelLevelForm.value
       let cargoLevelForm = document.querySelector("input[name=cargoMass]");
       let cargoLevel = cargoLevelForm.value
       let list = document.getElementById('faultyItems');
       list.style.visibility = "hidden";
   
       //do i need button?
    //    let launchStatus = document.querySelector('launchStatus');
   //event listener for submit button?
   //define the perameters that need to go into formSubmission
   //call formSubmission

   formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel)
}) 
});