const result = document.getElementById('result');
const num = document.getElementById('num');
const resultBtn = document.getElementById('btn');

function multiplication(number) {
  let resultNum = '';
  if (number.value) {
    for (let i = 1; i < 10; i += 1) {
      resultNum = `${resultNum}${number.value}X${i}=${number.value * i}<br>`;
    }
    result.innerHTML = resultNum;
  } else {
    // eslint-disable-next-line no-alert
    alert('숫자를 입력해주세요');
  }
}

resultBtn.addEventListener('click', () => multiplication(num));
