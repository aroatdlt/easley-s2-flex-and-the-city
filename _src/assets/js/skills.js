const skillsInputElements = document.querySelectorAll ('.checkbox__input');
const skillsLabelElements = document.querySelectorAll ('.checkbox__label');

const skillsListElement = document.querySelector ('.skill__tags');

const skills = [];


function handleCheckBoxClick (event) {
    const checkBoxClick = event.currentTarget;
    for(let i=0; i < skillsInputElements.length; i++) {
        if (skillsInputElements[i].checked === true){
            skills.push(skillsInputElements[i].value);
            skillsListElement.innerHTML = `<li class="tag">${skills[i]}</li>`;
        }
    }  
}


for(let i=0; i < skillsInputElements.length; i++) {
    skillsInputElements[i].addEventListener('click', handleCheckBoxClick);

}













