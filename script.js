'use strict';
let btnAgain = document.querySelector('.again')
let displayNumber = document.querySelector('.number');
let guessInput = document.querySelector('.guess');
let btnCheck = document.querySelector('.check');
let message = document.querySelector('.message');
let finalScore = document.querySelector('.score');
let highScore = document.querySelector('.highscore');
let body  = document.querySelector('body');
let randomScore = Math.floor(Math.random() * 20) +1;
displayNumber.textContent = randomScore;
let score =20;
let highFixscore =0;
highScore.textContent = 0;
finalScore.textContent = score;
btnCheck.addEventListener('click', function(){
    let guessNumber = Number(guessInput.value);
    if(!guessNumber){
        message.textContent = 'No Number';
    }else if(guessNumber === randomScore){
        message.textContent = 'Correct Number';
        body.style.backgroundColor = 'blue';
        if(score>highFixscore){
            highFixscore = score;
            highScore.textContent = highFixscore;
        }        
    }else if(guessNumber>randomScore){
        if(score>1){
            scoringInfo()
        }else{
            lostGame()
        }
    }else if(guessNumber<randomScore){
        if(score>1){
            scoringInfo()
        }else{
            lostGame()
        }
    }
});
btnAgain.addEventListener('click', function(){
    guessInput.value ='';
    randomScore = Math.floor(Math.random() * 20) +1;
    score =  20;
    message.textContent = 'Start Guessing';
    body.style.backgroundColor='black';
    displayNumber.textContent = randomScore;

});
function scoringInfo(){
    message.textContent = 'Too high';
    score--;
    finalScore.textContent = score;
}
function lostGame(){
    message.textContent = 'You lost the game';
    finalScore.textContent = 0; 
}