let size = 16;
let div = [];
let color = 'black';

const container = document.querySelector('#container');
const create = function(size) {
    for (let i = 0; i < size * size; i ++) {
        div[i] = document.createElement('div');
        div[i].classList.add('divs');
        div[i].style.width = `calc(100% / ${size})`;
        div[i].style.height = `calc(100% / ${size})`;
        div[i].addEventListener('mouseover', event => {
            div[i].style.backgroundColor = color;
            let x = document.querySelector('input[name="color"]:checked');
            if (x.value == 'black') {
                color = 'black';
                div[i].style.backgroundColor = color;
            }
            else if (x.value == 'rgb') {
                color = randomColor();
                div[i].style.backgroundColor = color;
            }
            else {
                color = 'rgb(0, 0, 0, 0.1)';
                div[i].style.backgroundColor = color;
            }
            });            
        container.appendChild(div[i]);
    };
}

const inputs = Array.from(document.querySelectorAll('input'));


const randomColor = function() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (i = 0; i < 6; i ++) {
        color += letters[Math.floor(Math.random() * 16)];
    };
    return color;
}

const reset = document.querySelector('#reset');
reset.addEventListener('click', event => {
    for (i = 0; i < div.length; i ++) {
        div[i].style.backgroundColor = 'white';
        container.removeChild(div[i]);
    }
    size = prompt('How many squares per sides to you want me to make the new grid?');
    div = [];
    create(size);
});

create(size);
