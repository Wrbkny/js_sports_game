//created constant variables for buttons that should not be changed //
const resetButton = document.querySelector("#reset-button");
const teamoneShootButton = document.querySelector("#teamone-shoot-button");
const teamtwoShootButton = document.querySelector("#teamtwo-shoot-button");

// created variable and used query selector to find first instance of html id as opposed to querySelector.all\\
let teamoneNumshots = document.querySelector("#teamone-numshots");
let teamtwoNumshots = document.querySelector("#teamtwo-numshots");
let teamoneNumgoals = document.querySelector("#teamone-numgoals");
let teamtwoNumgoals = document.querySelector("#teamtwo-numgoals"); 
let numResets = document.querySelector("#num-resets"); 
           

/* Added event lister to team one shot button
   Tested in console log
   Targeted teamonenumshots with .innerhtml and changed to teamoneshots
   Changed teamoneNumshots value from string to whole number and added increment for each click
*/
teamoneShootButton.addEventListener("click", function () {
    console.log("team one button clicked"); 
    let goal = (Math.random() > 0.5)
    let teamoneshots = Number(teamoneNumshots.innerHTML) + 1;
    teamoneNumshots.innerHTML = teamoneshots;
    let teamoneGoals = Number(teamoneNumgoals.innerHTML) + 1;
    if (goal <= 0.5) {
        teamoneNumgoals.innerHTML = teamoneGoals;
        console.log("Goal !");    
    }
    
})

teamtwoShootButton.addEventListener("click", function () {
    console.log("team two button clicked"); 
    let goal = (Math.random() > 0.5);
    let teamtwoshots = Number(teamtwoNumshots.innerHTML) + 1;
    teamtwoNumshots.innerHTML = teamtwoshots;
    let teamtwoGoals = Number(teamtwoNumgoals.innerHTML) + 1;
    if  (goal > 0.5) {
        teamtwoNumgoals.innerHTML = teamtwoGoals;
        console.log("Goal !");    
    }
    
})

//Reset 
resetButton.addEventListener("click", function () {
    console.log("button clicked"); 
    let newnumresets = Number(numResets.innerHTML) + 1;
    numResets.innerHTML= newnumresets
    teamoneNumshots.innerHTML = 0
    teamtwoNumshots.innerHTML = 0
    teamoneNumgoals.innerHTML = 0 
    teamtwoNumgoals.innerHTML = 0 

})

    

