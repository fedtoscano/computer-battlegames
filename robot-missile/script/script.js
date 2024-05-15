
function playAGame(){
    const secretNum = Math.floor(Math.random()*26);
    const secretCode = String.fromCharCode(65 + secretNum);
    console.log("The Automaton Missile has just landed! Is up to you to defuse it!")
    for(i=0; i<10; i++){
        let userGuess = prompt("Type your guess to defuse the bomb...");
    
        while (!/^[A-Za-z]$/.test(userGuess)) {
            userGuess = prompt("Type your guess to defuse the bomb... (IT MUST BE A LETTER!)");
        }
    
        if(i===4){
            console.log("Bzzz... bzzzz... bzzz... time is running out!");
        }else if(i===7){
            console.log("Fzzz...fzzz...fzz... You have to hurry up!");
        }


        if(userGuess.toUpperCase().charCodeAt(0)<secretCode.charCodeAt(0)){
            console.log("Higher...");
        }else if(userGuess.toUpperCase().charCodeAt(0)>secretCode.charCodeAt(0)){
            console.log("Lower...");
        }else {
            console.log("Tick...tick... tick...");
            console.log("You win! SuperEarth is safe for now!");
        }
        
    }
    console.log("Tick...Tick...Tick...");
    console.warn("BOOOOOOOOOM! The missile exploded!");
    console.log(`The secret code was: ${secretCode}`);
}

const startBtn = document.getElementById("start-a-game");
startBtn.addEventListener('click', playAGame)



