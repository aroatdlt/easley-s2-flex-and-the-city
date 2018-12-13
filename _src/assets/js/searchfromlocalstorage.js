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

    refillColorPalette ()
    
}
refillFormUserInfo();

function refillColorPalette () {
    if (savedUserInfo.palette === 1) {
        addFirstPalete ();
        firstPalete.setAttribute('checked', 'true');
    }
    if (savedUserInfo.palette === 2) {
        addSecondPalete ();
        secondPalete.setAttribute('checked', 'true');
    }
    if (savedUserInfo.palette === 3) {
        addThirdPalete ();
        thirdPalete.setAttribute('checked', 'true');
    }
}