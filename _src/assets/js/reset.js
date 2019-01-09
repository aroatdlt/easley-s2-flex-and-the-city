const resetBtnEl = document.querySelector('.buttom__reset');
const designForm = document.querySelector('.custom-form');
const fillForm = document.querySelector('.fill-form');
const shareForm = document.querySelector('.share-form');
const resetImage = document.querySelector('.photo__user');
const linkedinLink = document.querySelector('.icon__linkedin');
const emailLink = document.querySelector('.icon__mail');
const mobileLink = document.querySelector('.icon__number');
const githubLink = document.querySelector('.icon__github');

function handleResetBtn () {
    skillsListElement = document.querySelector('.skill__tags');
    professionCard.innerHTML = "Front-end developer";
    userNameCard.innerHTML = "Nombre Apellido";
    resetImage.src = "assets/images/default.jpeg";
    linkedinLink.href = '';
    emailLink.href = '';
    mobileLink.href = '';
    githubLink.href = '';
    addComicSansTypo();
    addFirstPalete();
    skillsListElement.innerHTML = '<li class="first_tag tag">HTML</li> <li class="second_tag tag">CSS</li> <li class="third_tag tag">GULP</li>';
    localStorage.removeItem('userInfo');
    designForm.reset();
    fillForm.reset();
    shareForm.reset();
    // resetLocalStorage();
}

// function resetLocalStorage () {
//     localStorage.clear();
// }

resetBtnEl.addEventListener('click', handleResetBtn);