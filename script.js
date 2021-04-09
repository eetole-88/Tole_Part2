/*
1. Prompt user for pet's name.
2. Prompt user 6 times for an action
3. "feed" increases energy by 2.
4. "pet" increases happiness by 1.
5. "walk" increases happiness by 2 and decreases energy by 1.
6. Alerts the user if there is not enough energy for a walk.
7. Does not affect happiness or energy if there is not enough energy for a walk.
8. Logs the pet's name to the console at the end.
9. Logs the happiness and energy level to the console at the end.
10. The pet's name, happiness, and energy level are all logged tothe console together in the correct sentence format:____has___happiness and __energy.
*/

//selectors



//variables
let happiness = 0;
let energy = 0;
let petName = prompt("Name your pet."); 
console.log (petName);
for (let i = 0; i < 6; i++) {
    let result = prompt("Walk, Feed, or Pet?");
    if (result == "walk") {
        if (energy <= 0) {alert ("Not enough energy to enjoy a walk.")} else {
        happiness += 2; energy -= 1; }

    }


    else if (result == "pet") {
        happiness += 1; 


    }
    else if (result == "feed") {
        energy +=2; 
    }

}

console.log(petName, "has", happiness, "happiness and", energy, "energy.")