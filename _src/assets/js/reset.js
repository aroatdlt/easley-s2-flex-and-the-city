const resetBtnEl = document.querySelector('.buttom__reset');
const designForm = document.querySelector('.custom-form');
const fillForm = document.querySelector('.fill-form');
const shareForm = document.querySelector('.share-form');

function handleResetBtn () {
    skillsListElement = document.querySelector('.skill__tags');
    professionCard.innerHTML = "Front-end developer";
    userNameCard.innerHTML = "Nombre Apellido";
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
}

resetBtnEl.addEventListener('click', handleResetBtn);