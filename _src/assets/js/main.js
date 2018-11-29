'use strict';

const userNameForm = document.querySelector('.full__name');
const professionForm = document.querySelector('.profession__input');

const userNameCard = document.querySelector('.name');
const professionCard = document.querySelector('.profession');

const fillCard = () => {
    userNameCard.innerHTML = userNameForm.value;
    professionCard.innerHTML = professionForm.value;
}

userNameForm.addEventListener('keyup', fillCard);
professionForm.addEventListener('keyup', fillCard);