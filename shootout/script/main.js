/**
 * 
 * @returns a random number between 1000 and 1500
 */
function makeRandomInterval(min, max){
    return Math.floor(Math.random()* (max-min)) + min
}

function stepsMaker() {
    let gameOver
    let currentStep = 1;
    function step() {
        console.log(`${currentStep}...`);
        if (currentStep < 10) {
            currentStep++;
            setTimeout(step, makeRandomInterval(1000, 1500));
        }else{
            duel(gameOver)
            setTimeout(() => {
                console.log("you lost")
                return
            }, makeRandomInterval(500,1000));

            if(gameOver){
                console.log("you lost")
            }
        }
    }
    setTimeout(step, makeRandomInterval(1000, 1500));
}


function duel(condition){
    const keysToPress = ["w", "a", "s", "d"]

    const randomKey = makeRandomInterval(0,3)
    const duelDisplay = document.querySelector("#duel-display") 
        duelDisplay.append(keysToPress[randomKey])
    
    document.addEventListener("keypress", function(event){
        if(event.key=== keysToPress[randomKey]){
            console.log("you won")
            condition = false;
            return
        }else{
            condition = true
        }
        })

}