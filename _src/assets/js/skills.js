const skillsInputElements = document.querySelectorAll ('.checkbox__input');
const skillsLabelElements = document.querySelectorAll ('.checkbox__label');

const skillsListElement = document.querySelector ('.skill__tags');

function handleCheckBoxClick (event) {
    let listContent = "";
    let item = "";
    /*const checkBoxClick = event.currentTarget;*/
    for(const skillsItem of skillsInputElements) {
        if (skillsItem.checked === true){
           item = `<li class="tag">${skillsItem.value}</li>`;
           listContent += item;
        }
    }  
    skillsListElement.innerHTML = listContent;
}


for(let i=0; i < skillsInputElements.length; i++) {
    skillsInputElements[i].addEventListener('click', handleCheckBoxClick);

}













