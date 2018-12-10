
/*const formFillCollapsable = document.querySelector('.collapseform-fill');*/
const skillContainer = document.querySelector('.container_skills');

function showSkills() {

    fetch('https://raw.githubusercontent.com/Adalab/dorcas-s2-proyecto-data/master/skills.json')
        .then(response => response.json())
        .then(data => {
            const totalSkills = data.skills;
            for (const skill of totalSkills) {
                skillContainer.innerHTML += `<input class="checkbox__input checkbox__input--${skill}" id="${skill}" type="checkbox" name="skill_option" value="${skill}"><label class="checkbox__label checkbox__label--${skill}" for="${skill}">${skill}</label>`;
            }
        });

};
showSkills();

/*formFillCollapsable.addEventListener('focus',showSkills);*/