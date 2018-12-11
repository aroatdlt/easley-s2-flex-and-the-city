const ubuntuTypo = document.querySelector('#Ubuntu');
const comicSansTypo = document.querySelector('#ComicSans');
const montserratTypo = document.querySelector('#Montserrat');

const nameTypo = document.querySelector('.name');
const professionTypo = document.querySelector('.profession');

function addUbuntuTypo(event) {
  nameTypo.classList.add('add__font__ubuntu');
  nameTypo.classList.remove('add__font__comicsans');
  nameTypo.classList.remove('add__font__monserrat');

  professionTypo.classList.add('add__font__ubuntu');
  professionTypo.classList.remove('add__font__comicsans');
  professionTypo.classList.remove('add__font__monserrat');
};

function addComicSansTypo(event) {
  nameTypo.classList.add('add__font__comicsans');
  nameTypo.classList.remove('add__font__ubuntu');
  nameTypo.classList.remove('add__font__monserrat');

  professionTypo.classList.add('add__font__comicsans');
  professionTypo.classList.remove('add__font__ubuntu');
  professionTypo.classList.remove('add__font__monserrat');
};

function addMonserratTypo(event) {
  nameTypo.classList.add('add__font__monserrat');
  nameTypo.classList.remove('add__font__ubuntu');
  nameTypo.classList.remove('add__font__comicsans');

  professionTypo.classList.add('add__font__monserrat');
  professionTypo.classList.remove('add__font__ubuntu');
  professionTypo.classList.remove('add__font__comicsans');
};

ubuntuTypo.addEventListener('click', addUbuntuTypo);
comicSansTypo.addEventListener('click', addComicSansTypo);
montserratTypo.addEventListener('click', addMonserratTypo);
