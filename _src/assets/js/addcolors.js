const firstPalete = document.querySelector('#setcolors_green');
const secondPalete = document.querySelector('#setcolors_red');
const thirdPalete = document.querySelector('#setcolors_blue');

const nameColor = document.querySelector('.name');
const rectangleColor = document.querySelector('.rectangle__decoration');
const buttonsColor = document.querySelectorAll('.icon__item');
const circleColor = document.querySelectorAll('.social__media-buttom');
const tagColors = document.querySelectorAll('.tag');


function addSecondPalete (event) {
    nameColor.classList.add('add__color__dark-red');
    rectangleColor.classList.add('add__color__light-red');
    for (let i=0;i<tagColors.length;i++) {
        tagColors[i].classList.add('add__color__medium-red');
    }
    for (let i=0;i<buttonsColor.length;i++) {
        buttonsColor[i].classList.add('add__color__dark-red');
    }
    for (let i=0;i<circleColor.length;i++) {
        circleColor[i].classList.add('add__border__light-red');
    }

};


secondPalete.addEventListener('click', addSecondPalete);
