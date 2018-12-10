const skillsInputElements = document.querySelectorAll('.checkbox__input');
const skillsLabelElements = document.querySelectorAll('.checkbox__label');

const skillsListElement = document.querySelector('.skill__tags');



/*function limitCheckBox() {
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

function handleCheckBoxClick(event) {
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
