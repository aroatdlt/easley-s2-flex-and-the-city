const firstPalete = document.querySelector('#setcolors_green');
const secondPalete = document.querySelector('#setcolors_red');
const thirdPalete = document.querySelector('#setcolors_blue');

const nameColor = document.querySelector('.name');
const rectangleColor = document.querySelector('.rectangle__decoration');
const buttonsColor = document.querySelectorAll('.icon__item');
const circleColor = document.querySelectorAll('.social__media-buttom');
const tagColors = document.querySelectorAll('.tag');

/* Adding the original palette
*/
function addFirstPalete (event) {
    nameColor.classList.add('add__color__dark-green');
    rectangleColor.classList.add('add__color__light-green');
    for (let i=0;i<tagColors.length;i++) {
        tagColors[i].classList.add('add__color__medium-green');
    }
    for (let i=0;i<buttonsColor.length;i++) {
        buttonsColor[i].classList.add('add__color__dark-green');
    }
    for (let i=0;i<circleColor.length;i++) {
        circleColor[i].classList.add('add__border__light-green');
    }
};


/* Adding red palette color 
*/
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

/* Adding grey palette color 
*/
function addThirdPalete (event) {
    nameColor.classList.add('add__color__dark-blue');
    rectangleColor.classList.add('add__color__light-blue');
    for (let i=0;i<tagColors.length;i++) {
        tagColors[i].classList.add('add__color__medium-blue');
    }
    for (let i=0;i<buttonsColor.length;i++) {
        buttonsColor[i].classList.add('.add__color__dark-blue');
    }
    for (let i=0;i<circleColor.length;i++) {
        circleColor[i].classList.add('add__border__light-blue');
    }
};

/* Listeners from color card function 
*/
secondPalete.addEventListener('click', addSecondPalete);
thirdPalete.addEventListener('click', addThirdPalete);
firstPalete.addEventListener('click', addFirstPalete);
