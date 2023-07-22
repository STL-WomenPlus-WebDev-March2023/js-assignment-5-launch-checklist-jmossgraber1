// Write your helper functions here!
require('isomorphic-fetch');


function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl){
   let destinationInfoLocation = document.getElementById("missionTarget");
   destinationInfoLocation.innerHTML = 
//does this need parenthesis?
         `<div>
         <h2>Mission Destination</h2><ol>
         <li>Name: ${name}</li>
         <li>Diameter: ${diameter}</li>
         <li>Star: ${star}</li>
         <li>Distance from Earth: ${distance}</li>
         <li>Number of Moons: ${moons}</li>
         </ol><br></br><img src=" ${imageUrl} "/>
         </div>`
         
}
  
               function validateInput(testInput) {window.addEventListener("load", function () {
               let form = document.querySelector("form");
               form.addEventListener("submit", function (event) {
                  let pilotNameInput = document.querySelector("input[name=pilotName]");
                  let copilotNameInput = document.querySelector("input[name=copilotName]");
                  let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
                  let cargoMassInput = document.querySelector("input[name=cargoMass]");
                  
                  if (pilotNameInput === "" || copilotNameInput === "" || fuelLevelInput === "" || cargoMassInput === "") {
                     alert("All fields are required!");
                     // event.preventDefault();
                    return false;
                  }
                  if (!isNaN(pilotNameInput) || !isNaN(copilotNameInput)) {
                     alert("Please do not enter a number in a name field");
                     // event.preventDefault();
                    return false;
                  }

                  if (isNaN(fuelLevelInput) || isNaN(cargoMassInput)) {
                     alert("Please enter a number in the fuel and cargo fields");
                     // event.preventDefault();
                     return false;
                  }

                  else {
                     return true;
                     // return validateInput(testInput) = true;
                  }
               });
            })
            }

            function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
               if (validateInput(testInput) = true){
                  
               // window.addEventListener("load", function () {
               // let form = document.querySelector("form");
               // form.addEventListener("submit", function (event) {
               //    // event.preventDefault();

                  let pilotNameInput = document.querySelector("input[name=pilotName]");
                  let copilotNameInput = document.querySelector("input[name=copilotName]");
                  let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
                  let cargoMassInput = document.querySelector("input[name=cargoMass]");
                  let faultyItemsList = document.getElementById('faultyItems');
                  let launchStatus = document.querySelector('launchStatus');

                  //FUEL LEVEL 
                  if (fuelLevelInput < 10000) {
                     faultyItemsList.style.visibility = "visible";
                     faultyItemsList.pilotStatus.innerHTML = `${pilotNameInput} is not ready for launch!`;
                     faultyItemsList.copilotStatus.innerHTML = `${copilotNameInput} is not ready for launch!`;
                     launchStatus.innerHTML = "Shuttle not ready for launch";
                     launchStatus.style.color = red; //how do i put the color in? just a string?
                     faultyItemsList.fuelStatus.innerHTML = "There is not enough fuel for the journey!";
                     // event.preventDefault();
                  }

                  //CARGO MASS
                  if (cargoMassInput > 10000) {
                     faultyItemsList.style.visibility = "visible";
                     faultyItemsList.pilotStatus.innerHTML = `${pilotNameInput} is not ready for launch!`;
                     faultyItemsList.copilotStatus.innerHTML = `${copilotNameInput} is not ready for launch!`;
                     launchStatus.innerHTML = "Shuttle not ready for launch";
                     launchStatus.style.color = red; //how do i put the color in? just a string?
                     faultyItemsList.cargoStatus.innerHTML = "Too much mass to take off!";
                     // event.preventDefault();
                  }

                  else {
                     faultyItemsList.style.visibility = "visible"; // or INVISIBLE?
                     faultyItemsList.pilotStatus.innerHTML = `${pilotNameInput} is ready for launch!`;
                     faultyItemsList.copilotStatus.innerHTML = `${copilotNameInput} is ready for launch!`;
                     faultyItemsList.
                     launchStatus.innerHTML = "Shuttle ready for launch!";
                     launchStatus.style.color = green;
                  }

               }

                  async function myFetch() {

                     let planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json");
                     let response = await response.json();
                        return response
                     }
                     myFetch.then(response => {
                        response;
                     } )
                  return planetsReturned
                     
                     // console.log(planetsReturned)

                  function pickPlanet(planets) {

                     randomPlanetIndex = Math.floor(Math.random() * planets.length);
                     return planets[randomPlanetIndex];
                  }
            
               }
               module.exports.addDestinationInfo = addDestinationInfo;
               module.exports.validateInput = validateInput;
               module.exports.formSubmission = formSubmission;
               module.exports.pickPlanet = pickPlanet;
               module.exports.myFetch = myFetch;
           