const mobileForm = document.querySelector('.email__input');
const emailForm = document.querySelector('.phone__input');
const linkedinForm = document.querySelector('.linkedin__input');
const gitHubForm = document.querySelector('.github__input');

const mobileLink = document.querySelector('.icon__number').href;
const emailLink = document.querySelector('.icon__mail').href;
const linkedinLink = document.querySelector('.icon__linkedin').href;
const githubLink = document.querySelector('.icon__github').href;

const fillMobileNumber = () => {
    if(mobileForm === ""){
        mobileLink.href = "";
    }else {
        mobileLink.href = `tel:`+ mobileForm;
    }
};

mobileForm.addEventListener('keyup', fillMobileNumber);

const fillGithubLink = () => {
    if(gitHubForm.value === "") {
        githubLink = "";
    }else {
        githubLink = gitHubForm.value;
    }
};

gitHubForm.addEventListener('keyup', fillGithubLink);