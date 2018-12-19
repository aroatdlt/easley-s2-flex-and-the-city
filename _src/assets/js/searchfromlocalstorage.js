let savedUserInfo = JSON.parse(localStorage.getItem('userInfo'));

function refillFormUserInfo() {
  if (savedUserInfo !== null) {
    userInfo = savedUserInfo;
    refillFormField(userNameForm, 'name');
    refillFormField(professionForm, 'job');
    refillFormField(linkedinForm, 'linkedin');
    refillFormField(emailForm, 'email');
    refillFormField(mobileForm, 'phone');
    refillFormField(gitHubForm, 'github');

    fillCardName();
    fillCardProfession();
    fillLinkedin();
    fillMail();
    fillMobileNumber();
    fillGithubLink();

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
    let listContentSkillsLS = "";
    let skillsListElement = document.querySelector('.skill__tags');
    for (let i = 0; i < skillsInObject.length; i++) {
      listContentSkillsLS += `<li class="tag">${skillsInObject[i]}</li>`;
    }
    skillsListElement.innerHTML = listContentSkillsLS;
    const skillChildren = skillContainer.querySelectorAll('.checkbox__input');
  }
}

function refillFormField(inputField, key) {
  inputField.value = userInfo[key];
}

refillFormUserInfo();
