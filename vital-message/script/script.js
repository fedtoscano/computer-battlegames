let secretMessageEl = document.getElementById("secret-message")
secretMessageEl.innerHTML="";
let userDifficulty = Number.parseInt(prompt("Select the difficulty (type 4-10)"),10)
while(isNaN(userDifficulty)|| userDifficulty<4|| userDifficulty>10){
    userDifficulty = Number.parseInt(prompt("Select the difficulty (type 4-10). Type a valid number!"),10)
}

const secretWord = []
function makeRandomStr(strLength){
    for(i=0; i<strLength; i++){
        const secretNum = Math.floor(Math.random()*26);
        const secretCode = String.fromCharCode(65 + secretNum)
        secretWord.push(secretCode)
    }    
    return secretWord.join("")
}

function relayTheMessage(){
    const userGuess = prompt("Type your guess...")
    if(userGuess === secretWord.join("")){
        console.log("You won! The message has been relayed")
        secretMessageEl.innerHTML="";
    }else{
        console.log("You lost! The message was incorrect")
        console.log(`You typed: ${userGuess}`);
        console.log(`The message to relay was: ${secretWord.join("")}`)
        secretMessageEl.innerHTML="";
    }
}

secretMessageEl.innerHTML = makeRandomStr(userDifficulty);

setTimeout(() => {
    secretMessageEl.remove();
}, 1500);

setTimeout(() => {
    relayTheMessage()
}, 3000);