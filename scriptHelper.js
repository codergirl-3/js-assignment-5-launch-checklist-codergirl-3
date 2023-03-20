// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   
   let missionTarget = document.getElementById("missionTarget");

   missionTarget.innerHTML += `<h2>Mission Destination</h2>
   <ol>
       <li>Name: ${name}</li>
       <li>Diameter: ${diameter}</li>
       <li>Star: ${star}</li>
       <li>Distance from Earth: ${distance}</li>
       <li>Number of Moons:${moons} </li>
   </ol>
   <img src="${imageUrl}">`;
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {
   let numInput = Number(testInput);
   
    if (testInput === ""){
    return "Empty";
   }

   else if (isNaN(numInput)){
    return "Not a Number"
   }

   else if (!isNaN(numInput)){
    return "Is a Number"
   }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {

let pilotStatus = document.getElementById("pilotStatus");

let copilotStatus = document.getElementById("copilotStatus");

let fuel = document.getElementById("fuelStatus");

let cargo = document.getElementById("cargoStatus");

if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty"){
    window.alert("All fields required");
}

else if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number" || validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number")
{
    window.alert("Please submit a valid value");

}
else {  
    list.style.visibility = "visible";
    
    let launchStatus = document.getElementById("launchStatus");

    pilotStatus.innerHTML = `${pilot} is ready`;
    copilotStatus.innerHTML = `${copilot} is ready`;
        if (fuelLevel<10000 && cargoLevel > 10000){
        fuel.innerHTML = `Fuel ${fuelLevel} is too low`;       

        cargo.innerHTML = `Cargo ${cargoLevel} is too high`;

        launchStatus.innerHTML = `Shuttle not ready for launch`;

        launchStatus.style.color = "red";
        }

        else if (fuelLevel>=10000 && cargoLevel > 10000){
        
        fuel.innerHTML = `Fuel ${fuelLevel} is sufficient`;    

        cargo.innerHTML = `Cargo ${cargoLevel} is too high`;

        launchStatus.innerHTML = `Shuttle not ready for launch`;

        launchStatus.style.color = "red";
        }

        else if(fuelLevel<10000 && cargoLevel<=10000) {
        
        fuel.innerHTML = `Fuel ${fuelLevel} is too low`;  

        cargo.innerHTML = `Cargo ${cargoLevel} is sufficient`;

        launchStatus.innerHTML = `Shuttle not ready for launch`;

        launchStatus.style.color = "red";
        }

        else {

        fuel.innerHTML = `Fuel ${fuelLevel} is sufficient`;  

        cargo.innerHTML = `Cargo ${cargoLevel} is sufficient`;

        launchStatus.innerHTML = `Shuttle is ready for launch`;

        launchStatus.style.color = "green";
        }

}
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch('https://handlers.education.launchcode.org/static/planets.json').then( function(response) {
        return response.json(); 
        });

}

function pickPlanet(planets) {
    let arrayIndex = Math.floor(Math.random()*planets.length);

    return planets[arrayIndex];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;