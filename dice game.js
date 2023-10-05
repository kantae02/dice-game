let score1 = document.querySelector('.score-0');
let score2 = document.querySelector('.score-1');
let current1 = document.querySelector('.cscore-0');
let current2 = document.querySelector('.cscore-1');
let btnnew = document.querySelector('.newgame');
let btnroll = document.querySelector('.roll');
let diceEl = document.querySelector('.dice');
let player1 = document.querySelector('.leftcontainer');
let player2 = document.querySelector('.rightcontainer');

let scores = [0, 0]
let currentscore = 0;
let activeplayer = 0;
let playing = true;

score1.textContent = 0;
score2.textContent = 0;

const switchplayer = function(){
    document.querySelector(`.cscore-${activeplayer}`).textContent = 0;
    currentscore = 0;
    activeplayer = activeplayer === 0 ? 1 : 0;
    player1.classList.toggle('player-2');
    player2.classList.toggle('player-2');
}

// document.querySelector('.dice').style.display = "block";

btnroll.addEventListener('click', function(){
    //generating a random dice
    if(playing){
    const dice = Math.trunc(Math.random() * 6) + 1;
    diceEl.style.display = "block";
    diceEl.src = `./dice-${dice}.png`;

    if(dice != 1){
        currentscore += dice;
      document.querySelector(`.cscore-${activeplayer}`).textContent = currentscore;
    }

    else{
       switchplayer()
    }  
   }
})
   document.querySelector('.hold').addEventListener('click', function(){
      if(playing){
    scores[activeplayer] += currentscore;
   document.querySelector(`.score-${activeplayer}`).textContent = scores[activeplayer];

 if (scores[activeplayer]>=100){
   playing = false;
   diceEl.style.display = "none";
   document.querySelector(`.player--${activeplayer}`).classList.add('player--winner')
   document.querySelector(`.player--${activeplayer}`).classList.remove('player-2')
   // document.querySelector(`.player${activeplayer}`).style.color = '#ee82ee'
   // document.querySelector(`.player${activeplayer}`).textContent ='WINNER!'
   // document.querySelector(`.score-${activeplayer}`).style.color = '#ee82ee'
   document.querySelector('.rule').style.display = 'none'
   document.querySelector('.winner').textContent = `PLAYER ${activeplayer + 1} wins!`
   
}
   switchplayer()
      
   }
})
btnnew.addEventListener('click', function(){
   scores = [0, 0]
   currentscore = 0;
   playing = true;
   score1.textContent = 0;
   score2.textContent = 0;
   current1.textContent = 0;
   current2.textContent = 0;
   player1.classList.remove('player--winner')
   player2.classList.remove('player--winner')
   player1.classList.add('player-2')
   player2.classList.remove('player-2')
   diceEl.style.display = "none";
   document.querySelector('.winner').textContent = ''
   document.querySelector('.rule').style.display = 'block'

})
   