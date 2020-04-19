var add_red_btn = document.querySelector('.add-red');
var add_btn = document.querySelector('.add-btn');
var delete_btn = document.querySelector('.delete-btn');
var text_btn = document.querySelector('.text-btn');
var reset_btn = document.querySelector('.reset-btn');
var toggle_btn = document.querySelector('.toggle-btn');
var image_btn = document.querySelector('.image-btn');
var text = document.querySelector('.txt').value;

var redClassName = 'red';
var boxClassName = 'box';
var imageURL = 'https://i.imgur.com/69NjYBH.png';

function addRed(){
    var boxes = document.querySelectorAll('.box')
    boxes.forEach(function(box){
        box.classList.add(redClassName);
    });
}

function addBox(){
    var box = document.createElement('div');
    box.className = boxClassName;
    document.body.appendChild(box);
}

function delBox(){
    var boxes = document.querySelectorAll('.box');
    if(boxes.length != 0)
        boxes.item(boxes.length-1).remove();
}

function setText(){
    var boxes = document.querySelectorAll('.box');
    boxes.forEach(function(box){
        box.innerHTML = text;
    });
}

function reset(){
    var boxes = document.querySelectorAll('.box');
    boxes.forEach(function(box){
        box.remove();
    });
}


function toggle(){
    var boxes = document.querySelectorAll('.box');
    boxes.forEach(function(box){
        if(box.style.display === "none")
            box.style.display = "block";
        else
            box.style.display = "none";
    })
}

function setImage(){
    var boxes = document.querySelectorAll('.box');
    if(boxes.length === 0){
        addBox();
    }
    boxes.forEach(function(box){
        var img = document.createElement('img');
        img.src = imageURL;
        box.appendChild(img);
    }); 
}

add_red_btn.addEventListener('click', addRed);
add_btn.addEventListener('click', addBox);
delete_btn.addEventListener('click', delBox);
text_btn.addEventListener('click', setText);
reset_btn.addEventListener('click', reset);
toggle_btn.addEventListener('click', toggle);
image_btn.addEventListener('click', setImage);