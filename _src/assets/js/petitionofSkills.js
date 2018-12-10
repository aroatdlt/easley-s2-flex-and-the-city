const skillsInputElements = document.querySelectorAll('.checkbox__input');
const skillsLabelElements = document.querySelectorAll('.checkbox__label');
let skillsListElement = document.querySelector('.skill__tags');

/*function handleCheckBoxClick(event){
    
    fetch('https://raw.githubusercontent.com/Adalab/dorcas-s2-proyecto-data/master/skills.json')
    .then(response => response.json())
    .then(data => {
        const skills = data.skills;
       
          for (const skillsList of skills) {
            skillsListElement.innerHTML += `<li class="tag">` + skillsList + `</li>`;
        
    }
    });

};

for (let i = 0; i < skillsInputElements.length; i++) {
    skillsInputElements[i].addEventListener('click', handleCheckBoxClick);
};*/