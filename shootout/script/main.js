/**
 * 
 * @returns a random number between 1000 and 1500
 */
function makeRandomInterval(){
    return Math.floor(Math.random()* (1500-1000)) + 1000
}

function stepsMaker() {
    let currentStep = 1;

    function step() {
        console.log(`${currentStep}...`);
        if (currentStep < 10) {
            currentStep++;
            setTimeout(step, makeRandomInterval());
        }
    }

    setTimeout(step, makeRandomInterval());
}


