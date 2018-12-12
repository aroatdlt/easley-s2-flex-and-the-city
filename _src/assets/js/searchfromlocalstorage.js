const savedUserInfo = JSON.parse(localStorage.getItem('userInfo'));

function refillFormUserInfo(){
    if (savedUserInfo.name !== ""){
        userNameForm.value = savedUserInfo.name;
        fillCardName();
    } 
    if (savedUserInfo.job !== ""){
        professionForm.value = savedUserInfo.job;
        fillCardProfession();
    } 
    if (savedUserInfo.phone !== ""){
        mobileForm.value = savedUserInfo.phone;
        fillMobileNumber();
    } 
    if (savedUserInfo.email !== ""){
        emailForm.value = savedUserInfo.email;
        fillMail();
    } 
    if (savedUserInfo.linkedin !== ""){
        linkedinForm.value = savedUserInfo.linkedin;
        fillLinkedin();
    } 
    if (savedUserInfo.github !== ""){
        gitHubForm.value = savedUserInfo.github;
        fillGithubLink();
    } 
    
}
refillFormUserInfo();

