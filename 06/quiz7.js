/* eslint-disable no-return-assign */
const bug = document.getElementById('bug');
const box = document.querySelector('.box');

const point = document.getElementById('point');
const life = document.getElementById('life');
let clicked = false;

const maxWidth = box.offsetWidth - bug.offsetWidth;
const maxHeight = box.offsetHeight - bug.offsetHeight;

function getRandomInt(Min, Max) {
  let min = Min;
  let max = Max;
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function setScore() {
  if (!clicked) {
    life.innerHTML = parseInt(life.innerHTML, 10) - 1;
    if (Number(life.innerHTML) === -1) {
      // eslint-disable-next-line no-alert
      alert('Game Over');
    }
  } else {
    point.innerHTML = parseInt(point.innerHTML, 10) + 1;
    clicked = false;
  }
}

setInterval(function setPosition() {
  bug.style.top = `${getRandomInt(0, maxWidth)}px`;
  bug.style.left = `${getRandomInt(0, maxHeight)}px`;
  setScore();
}, 1000);

bug.addEventListener('click', () => (clicked = true));
