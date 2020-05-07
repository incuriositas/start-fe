const box = document.getElementById('box');
const min = document.getElementById('min');
const max = document.getElementById('max');
const btn = document.getElementById('btn');

let randomValue = 0;
let count = 0;

function setNum(mini, maxi) {
  const minimum = Math.ceil(mini);
  const maximum = Math.floor(maxi);
  randomValue = Math.floor(Math.random() * (maximum - minimum)) + minimum;
}

function showNum() {
  if (count < randomValue) {
    count += 1;
    box.innerHTML = count;
    btn.disabled = true;
  } else if (count > randomValue) {
    count -= 1;
    box.innerHTML = count;
    btn.disabled = true;
  } else {
    btn.disabled = false;
  }
}

btn.addEventListener('click', () => setNum(min.value, max.value));
setInterval(showNum, 10);
