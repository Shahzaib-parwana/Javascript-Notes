let randomNo =  parseInt(Math.random()*100+1)
const submit = document.querySelector('#btn')
const userInput = document.querySelector('#guess')
const guessesSlot = document.querySelector('.guesses')
const remaning = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver= document.querySelector('.result')
const p  = document.createElement('p')
let prevGuess = [];
let numGuess = 1;
let playGame = true;

if(playGame){
    submit.addEventListener('click',(e)=>{
        e.preventDefault();
        const guess = parseInt(userInput.value)
        validateGuess(guess)
    });
}

// ya function validate kra ga ki value 1 or 100 k big ma ha ya nahi or nuber he ha string to nahi
function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please enter the valid number')
    }
    else if(guess<1){
        alert('Please enter number greter then 1')
    }
    else if(guess>100){
        alert('Please enter number less then 100')
    }
    else{
        prevGuess.push(guess)
        if(numGuess===11){
            displayGuess(guess)
            displayMessage(`Game Over. Youer number was: ${randomNo}`)
            endGame()
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
};

//app na sahi guess kya ha ya nahi
function checkGuess(guess){
    if(guess===randomNo){
        displayMessage(`you guessed right`)
        endGame()
    }
    else if(guess>randomNo){
        displayMessage(`number is TOOO HIGH`)
    }
    else if(guess<randomNo){
        displayMessage(`number is TOOO low`)
    }
};

// ya function array ko update kra ga or remaning guess ko b show kra ga or guess ko b clean kra ga
function displayGuess(guess){
    userInput.value=''
    guessesSlot.innerHTML+= `[ ${guess} ] `
    numGuess++;
    remaning.innerHTML = `${12-numGuess}`

}

// ya messages ko show kra ga
function displayMessage(message){
    lowOrHi.innerHTML=`<h3> ${message}</h3>`;
}



function endGame(){
userInput.value = '';
userInput.setAttribute('disabled','')
p.classList.add('button');
p.innerHTML = `<h2 id='newGame'>New Game</h2>`
startOver.appendChild(p)
playGame =false;
newGame();
}
//new game ko b start kra ga
function newGame(){
    const newGamebtn = document.querySelector('#newGame')
        newGamebtn.addEventListener('click',(e)=>{
            e.preventDefault();
        randomNo = parseInt(Math.random()*100+1)
        prevGuess = [];
        numGuess = 1;
        guessesSlot.innerHTML = ''
        remaning.innerHTML = `${11-numGuess}`
        userInput.removeAttribute('disable')
        startOver.removeChild(p);
        playGame = true
    })
}

