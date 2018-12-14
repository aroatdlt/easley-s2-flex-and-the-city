let savedUserInfo = JSON.parse(localStorage.getItem('userInfo'));

function refillFormUserInfo(){
    if (savedUserInfo !== null){
        userInfo = savedUserInfo;
        refillFormField(userNameForm, 'name');
        refillFormField(professionForm, 'job');
        refillFormField(linkedinForm, 'linkedin');
        refillFormField(emailForm, 'email');
        refillFormField(mobileForm, 'phone');
        refillFormField(gitHubForm, 'github');

        fillCardName();
        fillCardProfession();
        fillLinkedin();
        fillMail();
        fillMobileNumber();
        fillGithubLink();
    } 
}

function refillFormField(inputField, key) {
    inputField.value = userInfo[key];
}

refillFormUserInfo();
