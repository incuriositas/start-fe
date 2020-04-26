const result = document.getElementById("result");
const num = document.getElementById("num");
const result_btn = document.getElementById("btn");

function multiplication(number){
    let result_num = '';
    if(number.value){
        for(let i=1; i<10; i++){     
            result_num = result_num + `${number.value}X${i}=${number.value*i}<br>`;
        }
        result.innerHTML = result_num;
    }else{
        alert("숫자를 입력해주세요");
    }
}

result_btn.addEventListener('click', event => multiplication(num));
