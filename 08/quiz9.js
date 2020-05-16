const url = document.getElementById('url');
const btn = document.getElementById('btn');
const log = document.getElementById('log');

function printLog(str) {
  log.value = str;
}
function success(result) {
  result.text().then(printLog);
}
function fail(error) {
  printLog(error);
}

function fetchUrl() {
  const urlValue = url.value;
  printLog('');

  if (!urlValue) {
    // eslint-disable-next-line no-alert
    window.alert('url를 입력하세요');
  } else {
    fetch(urlValue).then(success).catch(fail);
  }
}

function isEnter(e) {
  if (e.keyCode === 13) {
    fetchUrl();
  }
}

btn.addEventListener('click', fetchUrl);
url.addEventListener('keypress', isEnter);
