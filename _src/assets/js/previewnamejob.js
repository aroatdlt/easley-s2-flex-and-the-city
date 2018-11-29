
const userNameForm = document.querySelector('.full__name');
const professionForm = document.querySelector('.profession__input');

const userNameCard = document.querySelector('.name');
const professionCard = document.querySelector('.profession');



const fillCardName = () => {
    userNameCard.innerHTML = userNameForm.value;
}

const fillCardProfession = () => {
    professionCard.innerHTML = professionForm.value;
}

userNameForm.addEventListener('keyup', fillCardName);
professionForm.addEventListener('keyup', fillCardProfession);