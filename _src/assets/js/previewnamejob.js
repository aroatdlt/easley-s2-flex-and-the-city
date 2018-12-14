const userNameForm = document.querySelector('.full__name');
const professionForm = document.querySelector('.profession__input');

const userNameCard = document.querySelector('.name');
const professionCard = document.querySelector('.profession');

function updateUserInfo(key, value) {
    userInfo[key] = value;
}

function setLocalStorage() {
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
}

function handleCardName() {
    //userInfo.name = userNameForm.value;
    updateUserInfo('name', userNameForm.value);
    //localStorage.setItem('userInfo', JSON.stringify(userInfo));
    setLocalStorage();
    fillCardName();
}

function fillCardName() {
    if (userInfo.name !== "") {
        userNameCard.innerHTML = userInfo.name;
    } else {
        userNameCard.innerHTML = "Nombre Apellido";
    }

    /* if (userNameForm.value !== "") {
        userNameCard.innerHTML = userNameForm.value;
    } else if (userInfo.name !== "") {
        userNameCard.innerHTML = userInfo.name;
    } else {
        userNameCard.innerHTML = "Nombre Apellido";
    } */
}

function handleCardProfession() {
    fillCardProfession();
    userInfo.job = professionForm.value;
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
}

const fillCardProfession = () => {
    if(professionForm.value === "") {
        professionCard.innerHTML = "Front-end developer";
    }else {
        professionCard.innerHTML = professionForm.value;
    }
}

userNameForm.addEventListener('keyup', handleCardName);
professionForm.addEventListener('keyup', handleCardProfession);