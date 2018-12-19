const userNameForm = document.querySelector('.full__name');
const professionForm = document.querySelector('.profession__input');
const userNameCard = document.querySelector('.name');
const professionCard = document.querySelector('.profession');

function handleCardName() {
  updateUserInfo('name', userNameForm.value);
  setLocalStorage();
  fillCardName();
}

function updateUserInfo(key, value) {
  userInfo[key] = value;
}

function setLocalStorage() {
  localStorage.setItem('userInfo', JSON.stringify(userInfo));
}

function fillCardName() {
  if (userInfo.name !== "") {
    userNameCard.innerHTML = userInfo.name;
  } else {
    userNameCard.innerHTML = "Nombre Apellido";
  }
}

function handleCardProfession() {
  updateUserInfo('job', professionForm.value);
  setLocalStorage();
  fillCardProfession();
}

function fillCardProfession() {
  if (userInfo.job !== "") {
    professionCard.innerHTML = userInfo.job;
    console.log(userInfo.job);
  } else {
    professionCard.innerHTML = "Front-end developer";
  }
}

userNameForm.addEventListener('keyup', handleCardName);
professionForm.addEventListener('keyup', handleCardProfession);