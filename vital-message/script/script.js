function playAGame(){
    const messageContainer = document.querySelector(".message-display")
    let secretMessageEl = document.getElementById("secret-message")
    secretMessageEl.innerHTML="";
    messageContainer.style.display = "block"
    
    
    let userDifficulty = Number.parseInt(prompt("Select the difficulty (type 4-10)"),10)
    while(isNaN(userDifficulty)|| userDifficulty<4|| userDifficulty>10){
        userDifficulty = Number.parseInt(prompt("Select the difficulty (type 4-10). Type a valid number!"),10)
    }

    
    function makeRandomStr(strLength){
        const secretWord = []
        for(i=0; i<strLength; i++){
            const secretNum = Math.floor(Math.random()*26);
            const secretCode = String.fromCharCode(65 + secretNum)
            secretWord.push(secretCode)
        }    
        return secretWord.join("")
    }
    
    function relayTheMessage(message, displayEl){
        const userGuess = prompt("Type your guess...")
        if(userGuess.toUpperCase() === message){
            console.log("You won! The message has been relayed")
        }else{
            console.log("You lost! The message was incorrect")
            console.log(`You typed: ${userGuess}`);
            console.log(`The message to relay was: ${message}`)
        }
        displayEl.innerHTML="";
        
    }
    
    const secretMessage = makeRandomStr(userDifficulty);
    secretMessageEl.innerHTML = secretMessage;
    
    setTimeout(() => {
        messageContainer.style.display = "none"
        secretMessageEl.remove();
    }, 1500);
    
    setTimeout(() => {
        relayTheMessage(secretMessage, secretMessageEl)
    }, 3000);


}

const startBtn = document.querySelector("button#start-a-game")
startBtn.addEventListener('click', playAGame)