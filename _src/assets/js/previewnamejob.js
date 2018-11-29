
const userNameForm = document.querySelector('.full__name');
const professionForm = document.querySelector('.profession__input');

const userNameCard = document.querySelector('.name');
const professionCard = document.querySelector('.profession');



const fillCardName = () => {
    if(userNameForm.value === "") {
        userNameCard.innerHTML = "Nombre Apellido";
    }else {
        userNameCard.innerHTML = userNameForm.value;
    }
    
}

const fillCardProfession = () => {
    if(professionForm.value === "") {
        professionCard.innerHTML = "Front-end developer";
    }else {
        professionCard.innerHTML = professionForm.value;
    }
}

userNameForm.addEventListener('keyup', fillCardName);
professionForm.addEventListener('keyup', fillCardProfession);