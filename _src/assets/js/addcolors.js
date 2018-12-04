const firstPalete = document.querySelector('#setcolors_green');
const secondPalete = document.querySelector('#setcolors_red');
const thirdPalete = document.querySelector('#setcolors_blue');

const nameColor = document.querySelector('.name');
const rectangleColor = document.querySelector('.rectangle__decoration');
const buttonsColor = document.querySelectorAll('.social__media-button');
const tagColors = document.querySelectorAll('.tag');


function addSecondPalete (event) {
    nameColor.classList.add('add__color__dark-red');
    rectangleColor.classList.add('add__color__light-red');
    for (let i=0;i<tagColors.length;i++) {
        tagColors[i].classList.add('add__color__medium-red');
    }

};


secondPalete.addEventListener('click', addSecondPalete);
