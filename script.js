const form = document.getElementById('form');
form.addEventListener('submit', handleSubmit);

let stat = document.getElementById('stat');
let attempt = document.getElementById('attempt');
let result = document.getElementById('result');

const Guess = {
    max: 10,
    attemptsNumber: 0,
    numberDrawn: function randomValue () {
        return Math.round(Math.random() * this.max);
    }
};

let numberDrawn = Guess.numberDrawn();

function updateAttempt(attempt, value) {
    attempt.innerHTML = 'Tentativa: ' + value
};

function handleSubmit(e) {
   e.preventDefault();

   let kick = document.getElementById('kick').value;

   if(!kick) {
       alert('DIGITE ALGUM VALOR!')
       return;
   };

   updateAttempt(attempt, ++Guess.attemptsNumber);

   if( numberDrawn == kick) {
       playAgain();
       stat.innerHTML = 'PARABÉNS, VOCÊ ACERTOU!';
       result.style.transition = '0.4s';
       result.style.backgroundColor = '#37c978';
       result.style.color = '#fff';
       stat.style.color = '#fff';
       clear();
   }else if (numberDrawn > kick) {
       stat.innerHTML = ' O NÚMERO É MAIOR!';
       stat.style.color = '#de4251';
       clear();
   } else if (numberDrawn < kick) {
    stat.innerHTML = ' O NÚMERO É MENOR!';
    stat.style.color = '#de4251';
    clear();
   }
};

function playAgain() {
    document.getElementById('BtnRestart').style.display = 'flex';
};

function restart() {
    document.location.reload(true);
};

function clear() {
    document.getElementById('kick').value = '';
};