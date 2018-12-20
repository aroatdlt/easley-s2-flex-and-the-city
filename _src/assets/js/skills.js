const skillContainer = document.querySelector('.container_skills');

let skillsArr = [];
let listContent = "";
let skillsListElement = '';

function showSkills() {

  fetch('https://raw.githubusercontent.com/Adalab/dorcas-s2-proyecto-data/master/skills.json')
    .then(response => response.json())
    .then(data => {
      const totalSkills = data.skills;
      for (const skill of totalSkills) {
        skillContainer.innerHTML += `<input class="checkbox__input checkbox__input--${skill}" id="${skill}" type="checkbox" name="skill_option" value="${skill}"><label class="checkbox__label checkbox__label--${skill}" for="${skill}">${skill}</label>`;
      }
      const skillsInputElements = document.querySelectorAll('.checkbox__input');

      skillsListElement = document.querySelector('.skill__tags');

      function limitCheckBox() {
        let count = 0;
        for (let i = 0; i < skillsInputElements.length; i++) {
          if (skillsInputElements[i].checked) {
            count += 1;
          }
        }
        if (count >= 3) {
          for (let i = 0; i < skillsInputElements.length; i++) {
            if (!skillsInputElements[i].checked) {
              skillsInputElements[i].disabled = true;
            }
          }
        } else {
          for (let i = 0; i < skillsInputElements.length; i++) {
            if (!skillsInputElements[i].checked) {
              skillsInputElements[i].disabled = false;
            }
          }
        }
      }

      function handleCheckBoxClick() {
        skillsArr = [];
        for (let i = 0; i < skillsInputElements.length; i++) {
          if (skillsInputElements[i].checked) {
            skillsArr.push(totalSkills[i]);
          }
        }
        updateUserInfo('skills', skillsArr);
        setLocalStorage();
        limitCheckBox();
        skillsInCard();
      }

      for (let i = 0; i < skillsInputElements.length; i++) {
        skillsInputElements[i].addEventListener('click', handleCheckBoxClick);
      }
    });
};

showSkills();

function skillsInCard() {
  skillsListElement = document.querySelector('.skill__tags');
  const skillsUserInfo = userInfo.skills;
  const paletteUserInfo = userInfo.palette;
  listContent = '';
  for (let i = 0; i < skillsUserInfo.length; i++) {

    if (paletteUserInfo === 1) {
      listContent += `<li class="tag add__color__medium-green">${skillsUserInfo[i]}</li>`;
    } else if (paletteUserInfo === 2) {
      listContent += `<li class="tag add__color__medium-red">${skillsUserInfo[i]}</li>`;
    } else if (paletteUserInfo === 3) {
      listContent += `<li class="tag add__color__medium-blue">${skillsUserInfo[i]}</li>`;
    }
  }
  skillsListElement.innerHTML = listContent;
}