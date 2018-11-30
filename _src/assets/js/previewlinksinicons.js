const mobileForm = document.querySelector('.email__input');
const emailForm = document.querySelector('.phone__input');
const linkedinForm = document.querySelector('.linkedin__input');
const gitHubForm = document.querySelector('.github__input');

const mobileLink = document.querySelector('.icon__number');
const emailLink = document.querySelector('.icon__mail');
const linkedinLink = document.querySelector('.icon__linkedin');
const githubLink = document.querySelector('.icon__github');

const fillMobileNumber = () => {
    if(mobileForm === ""){
        mobileLink.href = "";
    }
}