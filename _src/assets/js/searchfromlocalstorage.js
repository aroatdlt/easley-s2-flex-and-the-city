let savedUserInfo = JSON.parse(localStorage.getItem('userInfo'));
const ubuntuTypo = document.querySelector("#Ubuntu");
const comicSansTypo = document.querySelector("#ComicSans");
const montserratTypo = document.querySelector("#Montserrat");

const refillFormUserInfo = () => {
  if (savedUserInfo !== null) {
    userInfo = savedUserInfo;
    //añade la info del formulario al ls
    refillFormField(userNameForm, 'name');
    refillFormField(professionForm, 'job');
    refillFormField(linkedinForm, 'linkedin');
    refillFormField(emailForm, 'email');
    refillFormField(mobileForm, 'phone');
    refillFormField(gitHubForm, 'github');
    //pinta en la tarjeta la info del ls (función en previewnamejob y previewlinksinicons)
    fillCardName();
    fillCardProfession();
    fillLink(userInfo.phone,icons[0],'tel:');
    fillLink(userInfo.email,icons[1],'mailto:');
    fillLink(userInfo.linkedin,icons[2],'https://www.linkedin.com/in/');
    fillLink(userInfo.github,icons[3],'https://github.com/');

    if (userInfo.typography === 1) {
      addUbuntuTypo();
      ubuntuTypo.setAttribute('checked', 'true');
    } else if (userInfo.typography === 2) {
      addComicSansTypo();
      comicSansTypo.setAttribute('checked', 'true');
    } else if (userInfo.typography === 3) {
      addMonserratTypo();
      montserratTypo.setAttribute('checked', 'true');
    }

    if (userInfo.palette === 1) {
      addFirstPalete();
      firstPalete.setAttribute('checked', 'true');
    } else if (userInfo.palette === 2) {
      addSecondPalete();
      secondPalete.setAttribute('checked', 'true');
    } else if (userInfo.palette === 3) {
      addThirdPalete();
      thirdPalete.setAttribute('checked', 'true');
    } 
    const skillsInObject = userInfo.skills;
    const paletteUserInfo = userInfo.palette;
    const listContentSkillsLS = skillsInObject.map(skill => {
      if (paletteUserInfo === 1) {
        return `<li class="tag add__color__medium-green">${skill}</li>`;
      } else if (paletteUserInfo === 2) {
        return `<li class="tag add__color__medium-red">${skill}</li>`;
      } else if (paletteUserInfo === 3) {
        return `<li class="tag add__color__medium-blue">${skill}</li>`;
      }
    });

    let skillsListElement = document.querySelector('.skill__tags');
    skillsListElement.innerHTML = listContentSkillsLS.join(""); 
  }
}

const refillFormField = (inputField, key) => {
  inputField.value = userInfo[key];
};

refillFormUserInfo();
