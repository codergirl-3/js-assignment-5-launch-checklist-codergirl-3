// Write your JavaScript code here!


window.addEventListener("load", function() {
    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    let selectedPlanet = pickPlanet(listedPlanets);

    addDestinationInfo(document, selectedPlanet.name, selectedPlanet.diameter, selectedPlanet.star, selectedPlanet.distance, selectedPlanet.moons, selectedPlanet.imageUrl);

    })
    
   
 let list = document.getElementById("faultyItems");

list.style.visibility = "hidden";

let button = document.getElementById("formSubmit");

let form = document.querySelector("form");

button.addEventListener("click", function(event) {
    event.preventDefault();
    let copilotInput = document.querySelector("input[name=copilotName]");
    let copilotName = copilotInput.value;

   let pilotInput = document.querySelector("input[name=pilotName]");
   let pilotName = pilotInput.value;

   let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
   let fuelLevel = fuelLevelInput.value;

   let cargoMassInput = document.querySelector("input[name=cargoMass]");
    let cargoMass = cargoMassInput.value;

    //this is calling the function from scriptHelper
    formSubmission(document, list, pilotName, copilotName, fuelLevel, cargoMass);

});

 });