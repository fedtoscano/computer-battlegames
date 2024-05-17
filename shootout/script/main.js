
function makeRandomInterval(){
    return Math.floor(Math.random()* (1500-1000)) + 1000
}


function stepsMaker() {
    let index = 1;

    function step() {
        console.log(`${index}...`);
        if (index < 10) {
            index++;
            setTimeout(step, makeRandomInterval());
        }
    }

    setTimeout(step, makeRandomInterval());
}
