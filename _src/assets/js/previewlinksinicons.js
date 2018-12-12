const mobileForm = document.querySelector('.phone__input');
const emailForm = document.querySelector('.email__input');
const linkedinForm = document.querySelector('.linkedin__input');
const gitHubForm = document.querySelector('.github__input');

const mobileLink = document.querySelector('.icon__number');
const emailLink = document.querySelector('.icon__mail');
const linkedinLink = document.querySelector('.icon__linkedin');
const githubLink = document.querySelector('.icon__github');

function handleLinkedin() {
    fillLinkedin();
    userInfo.linkedin = linkedinForm.value;
    localStorage.setItem('userInfo', JSON.stringify(userInfo));

}

function fillLinkedin() {
    const linkedinText = linkedinForm.value;
    linkedinLink.href = `https://www.linkedin.com/in/${linkedinText}`;
};

linkedinForm.addEventListener('keyup', handleLinkedin);

function handleMail() {
    fillMail();
    userInfo.email = emailForm.value;
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
}

function fillMail() {
    const mailText = emailForm.value;
    emailLink.href = 'mailto:' + mailText;
};

emailForm.addEventListener('keyup', handleMail);

function handleMobile() {
    fillMobileNumber();
    userInfo.phone = mobileForm.value;
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
}

function fillMobileNumber() {
    const telText = mobileForm.value;
    mobileLink.href = `tel:` + telText;
};

mobileForm.addEventListener('keyup', handleMobile);

/* Enlace del link con la página de github
*/

function handleGithub() {
    fillGithubLink();
    userInfo.github = gitHubForm.value;
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
}

function fillGithubLink() {
    const gitText = gitHubForm.value;
    githubLink.href = 'https://github.com/' + gitText;
};

gitHubForm.addEventListener('keyup', handleGithub);

/*
opción que nos dió nashiba para hacer más simples las funciones

function updateDataObject (key, value) {
    data{key} = value
}
updateDataobject("name", inputname.value);

*/

