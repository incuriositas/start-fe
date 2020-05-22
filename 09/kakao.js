const $btn = document.querySelector('#search-btn');
const $text = document.querySelector('#search-text');
const $result = document.querySelector('#result');
const $more = document.querySelector('#more');
const url = 'https://dapi.kakao.com/v2/search/web';
const headers = { Authorization: 'KakaoAK 64b154520b900a3ccf49b68f78dfd225' };

let page = 1;
let findText = '';
function success(data) {
  const { documents } = data;
  const li = documents.map((doc) => {
    return `<li class="list-group-item"><a href="${doc.url}" target="_blank">${doc.contents}</a></li>`;
  });

  $result.innerHTML = `<ul class="list-group list-group-flush">${li.join(
    '',
  )}</ul>`;
}
function error() {
  // eslint-disable-next-line no-alert
  alert('데이터를 가져올수 없습니다.');
}

function read() {
  fetch(`${url}?query=${findText}&page=${page}`, { headers })
    .then((res) => res.json())
    .then(success)
    .catch(error);
  page += 1;
}

function search() {
  findText = $text.value;
  if (findText === '') {
    // eslint-disable-next-line no-alert
    alert('검색어를 입력하세요');
    return false;
  }

  read();
  return true;
}

$btn.addEventListener('click', search);
$more.addEventListener('click', read);
