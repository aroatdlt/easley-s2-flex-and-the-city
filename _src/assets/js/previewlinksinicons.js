const mobileForm = document.querySelector('.phone__input');
const emailForm = document.querySelector('.email__input');
const linkedinForm = document.querySelector('.linkedin__input');
const gitHubForm = document.querySelector('.github__input');
const icons = document.querySelectorAll('.icon__item');

const fillLink = (savedDataLocal,icon,url) => {
    (savedDataLocal !== "") ? icon.href = url+savedDataLocal : console.log('else',icon);
}

const handleMobile = () => {
    updateUserInfo('phone', mobileForm.value);
    setLocalStorage();
    fillLink(userInfo.phone,icons[0],'tel:');
}

const handleMail = () => {
    updateUserInfo('email', emailForm.value);
    setLocalStorage();
    fillLink(userInfo.email,icons[1],'mailto:');
}

const handleLinkedin = () => {
    updateUserInfo('linkedin', linkedinForm.value);
    setLocalStorage();
    fillLink(userInfo.linkedin,icons[2],'https://www.linkedin.com/in/');
}

const handleGithub = () => {
    updateUserInfo('github', gitHubForm.value);
    setLocalStorage();
    fillLink(userInfo.github,icons[3],'https://github.com/');
}

mobileForm.addEventListener('keyup', handleMobile);
emailForm.addEventListener('keyup', handleMail);
linkedinForm.addEventListener('keyup', handleLinkedin);
gitHubForm.addEventListener('keyup', handleGithub);

