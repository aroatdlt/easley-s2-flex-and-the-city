let savedUserInfo = JSON.parse(localStorage.getItem('userInfo'));

function refillFormUserInfo() {
  if (savedUserInfo !== null) {
    userInfo = savedUserInfo;
    refillFormField(userNameForm, 'name');
    refillFormField(professionForm, 'job'); //creados en previewnamejob
    refillFormField(linkedinForm, 'linkedin');
    refillFormField(emailForm, 'email');
    refillFormField(mobileForm, 'phone');
    refillFormField(gitHubForm, 'github');//creados en previewlinksinicons

    fillCardName();
    fillCardProfession();
    fillLinkedin();
    fillMail();
    fillMobileNumber();
    fillGithubLink(); //pasan la info del ls a los links de la tarjeta

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
    } //añade las clases en funcion de la info de ls

    const skillsInObject = userInfo.skills;
    const paletteUserInfo = userInfo.palette;
    let listContentSkillsLS = "";
    let skillsListElement = document.querySelector('.skill__tags');
    for (let i = 0; i < skillsInObject.length; i++) {
      if (paletteUserInfo === 1) {
        listContentSkillsLS += `<li class="tag add__color__medium-green">${skillsInObject[i]}</li>`;
      } else if (paletteUserInfo === 2) {
        listContentSkillsLS += `<li class="tag add__color__medium-red">${skillsInObject[i]}</li>`;
      } else if (paletteUserInfo === 3) {
        listContentSkillsLS += `<li class="tag add__color__medium-blue">${skillsInObject[i]}</li>`;
      }
    } //en funcion de la paleta pinta las skills que haya en ls añadiendo la clase correspondiente

    skillsListElement.innerHTML = listContentSkillsLS; //pinta las skills en la tarjeta
    const skillChildren = skillContainer.querySelectorAll('.checkbox__input');
  }
}

function refillFormField(inputField, key) {
  inputField.value = userInfo[key];
}

refillFormUserInfo();
