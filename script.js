'use strict';

let message = document.querySelector('.message');
let secretNum = document.querySelector('.number');
let score = document.querySelector('.score');
let gameInput = document.querySelector('.guess');
let checker = document.querySelector('.check');
let jsScore = 20;
let highScore = document.querySelector('.highscore');
let jsHighScore = 0;
let body = document.querySelector('body');

let num = Math.trunc(Math.random() * 20) + 1;

secretNum.textContent = num;

//click function for game
checker.addEventListener('click', function () {
  let guess = Number(gameInput.value);

  //if there is no guess
  if (!guess) {
    message.textContent = 'No Number!';

    //if guess is correct
  } else if (guess === num) {
    message.textContent = 'Correct Number!';
    body.style.backgroundColor = '#60b347';
    secretNum.style.width = '30rem';
    // if (jsScore > jsHighScore) {
    //   jsHighScore = jsScore;
    //   highScore.textContent = jsHighScore;
    // }

    //if guess is too high
  } else if (guess > num) {
    if (jsScore > 1) {
      message.textContent = 'Too high!';
      jsScore--;
      score.textContent = jsScore;
    } else {
      message.textContent = 'You lost the game!';
      score.textContent = 0;
    }

    // if guess is to low
  } else if (guess < num) {
    if (jsScore > 1) {
      message.textContent = 'Too low!';
      jsScore--;
      score.textContent = jsScore;
    } else {
      message.textContent = 'You lost the game!';
      score.textContent = 0;
    }
  }
});
