// Write your helper functions here!
require ('isomorphic-fetch');


function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl){
   let destinationInfoLocation = document.getElementById("missionTarget");
   destinationInfoLocation.innerHTML =
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
  
               function validateInput(testInput) {
                  let numberInput = Number(testInput)
                  if (testInput === ""){
                    return "Empty field";
                  }
                 else if (isNaN(numberInput)) {
                    return "Not a number";
                 }
                 else if (isNaN(testInput)) {
                  return "Not a number";}

                 else if (isNaN(numberInput) === false){
                    return "Is a number";
                  }
                  else if (isNaN(testInput) === false){
                     return "Is a number";
                  }
                  }

            
         
            function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
               let pilotNameStatus = document.getElementById("pilotStatus");
               let copilotStatus = document.getElementById("copilotStatus");
               let fuelLevelStatus = document.getElementById("fuelStatus");
               let cargoMassStatus = document.getElementById("cargoStatus");
               let launchStatus = document.getElementById('launchStatus');
               let faultyItemsList = document.getElementById('faultyItems');

               let fuelLevelForm = document.querySelector("input[name=fuelLevel]");
               let fuelLevelValue = fuelLevelForm.value
               let cargoLevelForm = document.querySelector("input[name=cargoMass]");
               let cargoLevelValue = cargoLevelForm.value
              

               if (validateInput(pilot) === "Empty field" || validateInput(pilot) === "Is a number"){
                  alert("Invalid input");

               }
               if (validateInput(copilot) === "Empty field"||validateInput(copilot) === "Is a number"){
                  alert("Invalid input");

               }
               if (validateInput(fuelLevel) === "Empty field" ||validateInput(fuelLevel) === "Not a number"){
                  alert("Invalid input");

               }
               if (validateInput(cargoLevel) === "Empty field"||validateInput(cargoLevel) === "Not a number"){
                  alert("Invalid input");

               }

               else{
                  faultyItemsList.style.visibility = "visible";
                  pilotNameStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
                  copilotStatus.innerHTML =`Copilot ${copilot} is ready for launch`;
                  launchStatus.innerHTML = "not quite sure";
                  //there will be three if statments combining the conditionals
                     // FUEL LEVEL 
                  if (fuelLevelValue < 10000 && cargoLevelValue > 10000) {
                     faultyItemsList.style.visibility = "visible";
                     launchStatus.innerHTML = "Shuttle NOT ready for launch";
                     pilotNameStatus.innerHTML = `Pilot ${pilot} NOT ready for launch`;
                     copilotStatus.innerHTML =`Copilot ${copilot} NOT ready for launch`;
                     launchStatus.style.color = "#dc143c" 
                     fuelLevelStatus.innerHTML = "Insufficient fuel!";
                     cargoMassStatus.innerHTML = "Reduce cargo! Mass exceeds limit";
                     // event.preventDefault();
                  }
                  else if (fuelLevelValue < 10000 && cargoLevelValue <= 10000) {
                        faultyItemsList.style.visibility = "visible";
                        launchStatus.innerHTML = "Shuttle NOT ready for launch";
                        pilotNameStatus.innerHTML = `Pilot ${pilot} NOT ready for launch`;
                        copilotStatus.innerHTML =`Copilot ${copilot} NOT ready for launch`;
                        launchStatus.style.color = "#dc143c" 
                        fuelLevelStatus.innerHTML = "Insufficient fuel!";
                        // cargoMassStatus.innerHTML = "Reduce cargo! Mass exceeds limit";
               }
               else if (fuelLevelValue >= 10000 && cargoLevelValue <= 10000) {
                  faultyItemsList.style.visibility = "visible";
                  launchStatus.innerHTML = "Shuttle ready for launch";
                  pilotNameStatus.innerHTML = `Pilot ${pilot} ready for launch`;
                  copilotStatus.innerHTML =`Copilot ${copilot} ready for launch`;
                  launchStatus.style.color = "#3cb371" 
                  // cargoMassStatus.innerHTML = "Reduce cargo! Mass exceeds limit";
         }
            
            }
         }



//START the conditionals here

               // window.addEventListener("load", function () {
               // let form = document.querySelector("form");
               // form.addEventListener("submit", function (event) {
               //    // event.preventDefault();

   
               //    //CARGO MASS
               //    if (cargoMassStatus > 10000) {
               //       faultyItemsList.style.visibility = "visible";
               //       faultyItemsList.pilotStatus.innerHTML = `${pilotNameInput} is not ready for launch!`;
               //       faultyItemsList.copilotStatus.innerHTML = `${copilotStatus} is not ready for launch!`;
               //       launchStatus.innerHTML = "Shuttle not ready for launch";
               //       launchStatus.style.color = red; //how do i put the color in? just a string?
               //       faultyItemsList.cargoStatus.innerHTML = "Too much mass to take off!";
               //       // event.preventDefault();
               //    }

               //    else {
               //       faultyItemsList.style.visibility = "visible"; // or INVISIBLE?
               //       faultyItemsList.pilotStatus.innerHTML = `${pilotNameInput} is ready for launch!`;
               //       faultyItemsList.copilotStatus.innerHTML = `${copilotStatus} is ready for launch!`;
               //       faultyItemsList.
               //       launchStatus.innerHTML = "Shuttle ready for launch!";
               //       launchStatus.style.color = green;
               //    }
      

   

                  async function myFetch() {

                     let planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(
                        (response) => {return response.json()})
                        return planetsReturned
                  }
                     
                     // console.log(planetsReturned)

                  function pickPlanet(planets) {

                     randomPlanetIndex = Math.floor(Math.random() * planets.length);
                     return planets[randomPlanetIndex];
                  }
            
               
               module.exports.addDestinationInfo = addDestinationInfo;
               module.exports.validateInput = validateInput;
               module.exports.formSubmission = formSubmission;
               module.exports.pickPlanet = pickPlanet;
               module.exports.myFetch = myFetch;
           