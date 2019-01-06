const firstPalete = document.querySelector('#setcolors_green');
const secondPalete = document.querySelector('#setcolors_red');
const thirdPalete = document.querySelector('#setcolors_blue');
const nameColor = document.querySelector('.name');
const rectangleColor = document.querySelector('.rectangle__decoration');
const buttonsColor = document.querySelectorAll('.icon__item');
const circleColor = document.querySelectorAll('.social__media-buttom');
const tagColors = document.querySelectorAll('.tag');

function handleFirstPalete() {
    addFirstPalete();
    userInfo.palette = 1;
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
}

function handleSecondPalete() {
    addSecondPalete();
    userInfo.palette = 2;
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
}

function handleThirdPalete() {
    addThirdPalete();
    userInfo.palette = 3;
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
}

function addFirstPalete() {
    const tagColors = document.querySelectorAll('.tag');
    //nameColor.classList.add('add__color__dark-green');
    //nameColor.classList.remove('add__color__dark-red');
    //nameColor.classList.remove('add__color__dark-blue')
    rectangleColor.classList.add('add__color__light-green');
    rectangleColor.classList.remove('add__color__light-blue');
    rectangleColor.classList.remove('add__color__light-red');
    for (let i = 0; i < tagColors.length; i++) {
        tagColors[i].classList.add('add__color__medium-green');
        tagColors[i].classList.remove('add__color__medium-blue');
        tagColors[i].classList.remove('add__color__medium-red');
    }
    for (let i = 0; i < buttonsColor.length; i++) {
        buttonsColor[i].classList.add('add__color__dark-green');
        buttonsColor[i].classList.remove('.add__color__dark-blue');
        buttonsColor[i].classList.remove('add__color__dark-red');
    }
    for (let i = 0; i < circleColor.length; i++) {
        circleColor[i].classList.add('add__border__light-green');
        circleColor[i].classList.remove('add__border__light-blue');
        circleColor[i].classList.remove('add__border__light-red');
    }
};

function addSecondPalete() {
    const tagColors = document.querySelectorAll('.tag');
    nameColor.classList.add('add__color__dark-red');
    nameColor.classList.remove('add__color__dark-green');
    nameColor.classList.remove('add__color__dark-blue');
    rectangleColor.classList.add('add__color__light-red');
    rectangleColor.classList.remove('add__color__light-blue');
    rectangleColor.classList.remove('add__color__light-green');
    for (let i = 0; i < tagColors.length; i++) {
        tagColors[i].classList.add('add__color__medium-red');
        tagColors[i].classList.remove('add__color__medium-blue');
        tagColors[i].classList.remove('add__color__medium-green');
    }
    for (let i = 0; i < buttonsColor.length; i++) {
        buttonsColor[i].classList.add('add__color__dark-red');
        buttonsColor[i].classList.remove('.add__color__dark-blue');
        buttonsColor[i].classList.remove('add__color__dark-green');
    }
    for (let i = 0; i < circleColor.length; i++) {
        circleColor[i].classList.add('add__border__light-red');
        circleColor[i].classList.remove('add__border__light-green');
        circleColor[i].classList.remove('add__border__light-blue');
    }
};

function addThirdPalete() {
    const tagColors = document.querySelectorAll('.tag');
    nameColor.classList.add('add__color__dark-blue');
    nameColor.classList.remove('add__color__dark-red');
    nameColor.classList.remove('add__color__dark-green');
    rectangleColor.classList.add('add__color__light-blue');
    rectangleColor.classList.remove('add__color__light-green');
    rectangleColor.classList.remove('add__color__light-red');
    for (let i = 0; i < tagColors.length; i++) {
        tagColors[i].classList.add('add__color__medium-blue');
        tagColors[i].classList.remove('add__color__medium-green');
        tagColors[i].classList.remove('add__color__medium-red');
    }
    for (let i = 0; i < buttonsColor.length; i++) {
        buttonsColor[i].classList.add('.add__color__dark-blue');
        buttonsColor[i].classList.remove('add__color__dark-green');
        buttonsColor[i].classList.remove('add__color__dark-red');
    }
    for (let i = 0; i < circleColor.length; i++) {
        circleColor[i].classList.add('add__border__light-blue');
        circleColor[i].classList.remove('add__border__light-green');
        circleColor[i].classList.remove('add__border__light-red');
    }
};

secondPalete.addEventListener('click', handleSecondPalete);
thirdPalete.addEventListener('click', handleThirdPalete);
firstPalete.addEventListener('click', handleFirstPalete);
