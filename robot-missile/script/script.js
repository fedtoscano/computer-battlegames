
function playAGame(){
    const secretNum = Math.floor(Math.random()*26)
    const secretCode = String.fromCharCode(65 + secretNum);
    
    for(i=0; i<10; i++){
        let userGuess = prompt("Type your guess to defuse the bomb...");
    
        while (!/^[A-Za-z]$/.test(userGuess)) {
            userGuess = prompt("Type your guess to defuse the bomb... (IT MUST BE A LETTER!)");
        }
    
        if(i===2){
            console.log("Bzzz... bzzzz... bzzz")
        }
        if(userGuess.toUpperCase().charCodeAt(0)<secretCode.charCodeAt(0)){
            console.log("Higher...")
        }else if(userGuess.toUpperCase().charCodeAt(0)>secretCode.charCodeAt(0)){
            console.log("Lower...")
        }else {
            console.log("Tick...tick... tick...")
            console.log("You win! SuperEarth is safe for now!")
        }
        
    }
    
    console.log("Tick...Tick...Tick...")
    console.warn("BOOOOOOOOOM! The missile exploded!")
}



