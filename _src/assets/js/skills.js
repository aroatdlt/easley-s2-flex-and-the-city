const skillContainer = document.querySelector('.container_skills');

let skillsArr = [];
let listContent = "";
let skillsListElement = '';

const showSkills = () => {

  fetch('https://raw.githubusercontent.com/Adalab/dorcas-s2-proyecto-data/master/skills.json')
    .then(response => response.json())
    .then(data => {
      const totalSkills = data.skills;
      for (const skill of totalSkills) {
        skillContainer.innerHTML += `<input class="checkbox__input checkbox__input--${skill}" id="${skill}" type="checkbox" name="skill_option" value="${skill}"><label class="checkbox__label checkbox__label--${skill}" for="${skill}">${skill}</label>`;
      }
      const skillsInputElements = document.querySelectorAll('.checkbox__input');

      skillsListElement = document.querySelector('.skill__tags');

      const limitCheckBox =() => {
        let count = 0;
        for (const skill of skillsInputElements) {
          if (skill.checked) {
            count += 1;
          }
        }
        if (count >= 3) {
          for (const skill of skillsInputElements) {
            if (!skill.checked) {
              skill.disabled = true;
            }
          }
        } else {
          for (const skill of skillsInputElements) {
            if (!skill.checked) {
              skill.disabled = false;
            }
          }
        }
      }

      const handleCheckBoxClick = () => {
        skillsArr = [];
        for (const skill of skillsInputElements) {
          if (skill.checked) {
            skillsArr.push(skill);
          }
        }
        updateUserInfo('skills', skillsArr);
        setLocalStorage();
        limitCheckBox();
        skillsInCard();
      }

      for (const skill of skillsInputElements) {
        skill.addEventListener('click', handleCheckBoxClick);
      }
    });
};

showSkills();

const skillsInCard = () => {
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