const container = document.querySelector('#container');
let size = 16;
let div = [];

const create = function(size) {
    for (let i = 0; i < size * size; i ++) {
        div[i] = document.createElement('div');
        div[i].classList.add('divs');
        div[i].style.width = `calc(100% / ${size})`;
        div[i].style.height = `calc(100% / ${size})`;
        div[i].addEventListener('mouseover', event => {
            div[i].style.backgroundColor = 'violet';
        });
        container.appendChild(div[i]);
    };
}

const reset = document.querySelector('#reset');
reset.addEventListener('click', event => {
    for (i = 0; i < div.length; i ++) {
        div[i].style.backgroundColor = 'white';
        container.removeChild(div[i]);
    }
    console.log(container);
    size = prompt('How many squares per sides to you want me to make the new grid?');
    div = [];
    create(size);
});

create(size);
