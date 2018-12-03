const mobileForm = document.querySelector('.phone__input');
const emailForm = document.querySelector('.email__input');
const linkedinForm = document.querySelector('.linkedin__input');
const gitHubForm = document.querySelector('.github__input');

const mobileLink = document.querySelector('.icon__number');
const emailLink = document.querySelector('.icon__mail');
const linkedinLink = document.querySelector('.icon__linkedin');
const githubLink = document.querySelector('.icon__github');

function fillLinkedin(event) {
    const linkedinText = linkedinForm.value;
    linkedinLink.href = 'https://www.' + linkedinText;
};

linkedinForm.addEventListener('keyup', fillLinkedin);

function fillMail(event) {
    const mailText = emailForm.value;
    emailLink.href = 'mailto:' + mailText;
};

emailForm.addEventListener('keyup', fillMail);

function fillMobileNumber(event) {
    const telText = mobileForm.value;
    mobileLink.href = `tel:` + telText;
};

mobileForm.addEventListener('keyup', fillMobileNumber);

/* Enlace del link con la página de github
*/

function fillGithubLink(event) {
    const gitText = gitHubForm.value;
    githubLink.href = 'https://github.com/' + gitText;
};

gitHubForm.addEventListener('keyup', fillGithubLink);