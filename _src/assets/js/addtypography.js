const listSelectTypo = document.querySelector('.type_fonts_container');
const nameJobEl = document.querySelector('.name__container');

function selectTypo (event) {
  const typoSelect = event.target;
  console.log (typoSelect.id);
  if (typoSelect.id === 'Ubuntu'){
    addUbuntuTypo ();
    userInfo.typography = 1;
  localStorage.setItem('userInfo', JSON.stringify(userInfo));
  } else if (typoSelect.id === 'ComicSans'){
    addComicSansTypo();
  userInfo.typography = 2;
  localStorage.setItem('userInfo', JSON.stringify(userInfo));
  } else if (typoSelect.id === 'Montserrat') {
    addMonserratTypo();
  userInfo.typography = 3;
  localStorage.setItem('userInfo', JSON.stringify(userInfo));
  }

};

listSelectTypo.addEventListener('click', selectTypo);

function addUbuntuTypo () {
  nameJobEl.classList.add('add__font__ubuntu');
  nameJobEl.classList.remove('add__font__comicsans', 'add__font__monserrat');
};
function addComicSansTypo () {
  nameJobEl.classList.add('add__font__comicsans');
  nameJobEl.classList.remove('add__font__ubuntu', 'add__font__monserrat');
};
function addMonserratTypo () {
  nameJobEl.classList.add('add__font__monserrat');
  nameJobEl.classList.remove('add__font__comicsans', 'add__font__ubuntu');
};