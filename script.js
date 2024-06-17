'use strict';

const scoreP1=document.querySelector('#score--0');
const scoreP2=document.querySelector('#score--1');
const rollDice=document.querySelector('.btn--roll');
const newDice=document.querySelector('.btn--new');
const holdDice=document.querySelector('.btn--hold');
const dice=document.querySelector('.dice');
const cscore0=document.querySelector('#current--0');
const cscore1=document.querySelector('#current--1');
const player0=document.querySelector('.player--0');
const player1=document.querySelector('.player--1');

let currentScore=0;
let activePlayer=0;
const score =[0,0];
let playing=true;


scoreP1.textContent=0;
scoreP2.textContent=0;
dice.classList.add('hidden');

const changePlayer = function(){
    activePlayer=activePlayer ===0 ? 1 :0;
    player0.classList.toggle('player--active');
    player1.classList.toggle('player--active');
}

rollDice.addEventListener('click',function(){
    if(playing){

    
    const randomDiceroll =Math.trunc((Math.random()*6))+1;
    dice.classList.remove('hidden');
    dice.src = `dice-${randomDiceroll}.png`;

    if(randomDiceroll !== 1){
   
        currentScore=currentScore+randomDiceroll;
        document.getElementById(`current--${activePlayer}`).textContent=currentScore;
         
        
    }
    else{
        document.getElementById(`current--${activePlayer}`).textContent=0;
        currentScore=0;
        changePlayer();
    }

    }
});

holdDice.addEventListener('click',function(){
  if(playing){

        
    score[activePlayer] +=currentScore;

    if(score[activePlayer] >= 100){
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        alert(`player ${activePlayer+1} wins!!`);
        playing = false;
    }
    else{  
    document.querySelector(`#score--${activePlayer}`).textContent=score[activePlayer];  
   currentScore=0;
   document.getElementById(`current--${activePlayer}`).textContent=currentScore;
   changePlayer();
    }
} 
})


//new game
newDice.addEventListener('click',function(){
scoreP1.textContent=0;
scoreP2.textContent=0;
currentScore=0;
cscore0.textContent=0;
cscore1.textContent=0;
player0.classList.remove('player--winner');
player1.classList.remove('player--winner');
player1.classList.remove('player--active');
player0.classList.add('player--active');
activePlayer=0;
playing=true;
console.log('hello');
score[0]=0;
score[1]=0;
dice.classList.add('hidden');

});


