const userNameForm = document.querySelector('.full__name');
const professionForm = document.querySelector('.profession__input');
const userNameCard = document.querySelector('.name');
const professionCard = document.querySelector('.profession');

const updateUserInfo =(key, value) => userInfo[key] = value;
const setLocalStorage = () => localStorage.setItem('userInfo', JSON.stringify(userInfo));
const fillCard = (valueCard,valueSavedLocal) => (valueSavedLocal !== "") ? valueCard.innerHTML = valueSavedLocal : valueCard.innerHTML = "Front-end developer";

const handleCardName = () => {
  updateUserInfo('name', userNameForm.value);
  setLocalStorage();
  fillCard(userNameCard,userInfo.name);
}

const handleCardProfession = () => {
  updateUserInfo('job', professionForm.value);
  setLocalStorage();
  fillCard(professionCard,userInfo.job);
}

userNameForm.addEventListener('keyup', handleCardName);
professionForm.addEventListener('keyup', handleCardProfession);
