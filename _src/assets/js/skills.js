const skillsInputElements = document.querySelectorAll('.checkbox__input');
const skillsLabelElements = document.querySelectorAll('.checkbox__label');
let skillsListElement = document.querySelector('.skill__tags');


function handleCheckBoxClick(event){
    
    fetch('https://raw.githubusercontent.com/Adalab/dorcas-s2-proyecto-data/master/skills.json')
    .then(response => response.json())
    .then(data => {
        const skills = data.skills;
    
       for (const skillsList of skills) {
            skillsListElement.innerHTML += `<li class="tag">` + skillsList + `</li>`;
            console.log(skillsList)
    }
        
    });

};

for (let i = 0; i < skillsInputElements.length; i++) {
    skillsInputElements[i].addEventListener('click', handleCheckBoxClick);
};


/*function handleCheckBoxClick(event) {

    let listContent = "";

    for (const skillsItem of skillsInputElements) {
        if (skillsItem.checked === true) {
            listContent += `<li class="tag">${skillsItem.value}</li>`;
        }

    }
    limitCheckBox();
    skillsListElement.innerHTML = listContent;

}

for (let i = 0; i < skillsInputElements.length; i++) {
    skillsInputElements[i].addEventListener('click', handleCheckBoxClick);
}

function limitCheckBox() {
    let count = 0;
    for (let i = 0; i < skillsInputElements.length; i++) {
        if (skillsInputElements[i].checked) {
            count += 1;
        }
        if (count > 3 && skillsInputElements[i].checked === false) {
            skillsInputElements[i].disabled = true;
        }
    }

}*/











