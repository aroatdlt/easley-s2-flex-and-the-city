const mobileForm = document.querySelector('.phone__input');
const emailForm = document.querySelector('.email__input');
const linkedinForm = document.querySelector('.linkedin__input');
const gitHubForm = document.querySelector('.github__input');
const mobileLink = document.querySelector('.icon__number');
const emailLink = document.querySelector('.icon__mail');
const linkedinLink = document.querySelector('.icon__linkedin');
const githubLink = document.querySelector('.icon__github');

function handleLinkedin() {
    updateUserInfo('linkedin', linkedinForm.value);
    setLocalStorage();
    fillLinkedin();
}

function fillLinkedin() {
 if(userInfo.linkedin !== ""){
    linkedinLink.href = `https://www.linkedin.com/in/${userInfo.linkedin}`;
 }
};

linkedinForm.addEventListener('keyup', handleLinkedin);

function handleMail() {
    updateUserInfo('email', emailForm.value);
    setLocalStorage();
    fillMail();
}

function fillMail() {
    if(userInfo.email !== ""){
        emailLink.href = `mailto:${userInfo.email}`;
    }
};

emailForm.addEventListener('keyup', handleMail);

function handleMobile() {
    updateUserInfo('phone', mobileForm.value);
    setLocalStorage();
    fillMobileNumber();
}

function fillMobileNumber() {
    if(userInfo.phone !== "") {
        mobileLink.href = 'tel:' + userInfo.phone;
    }
};

mobileForm.addEventListener('keyup', handleMobile);

function handleGithub() {
    updateUserInfo('github', gitHubForm.value);
    setLocalStorage();
    fillGithubLink();
}

function fillGithubLink() {
    if(userInfo.github !== ""){
        githubLink.href = 'https://github.com/' + userInfo.github;
    }
};

gitHubForm.addEventListener('keyup', handleGithub);
