const savedUserInfo = JSON.parse(localStorage.getItem('userInfo'));

function refillColorPalette () {
    if (savedUserInfo.palette === 1) {
        handleFirstPalete();
        firstPalete.setAttribute('checked', 'true');
    }
    if (savedUserInfo.palette === 2) {
        handleSecondPalete();
        secondPalete.setAttribute('checked', 'true');
    }
    if (savedUserInfo.palette === 3) {
        handleThirdPalete();
        thirdPalete.setAttribute('checked', 'true');
    }
}

function refillTypography () {
    if (savedUserInfo.typography === 1) {
        selectUbuntu();
        ubuntuTypo.setAttribute('checked', 'true');
    }
    if (savedUserInfo.typography === 2) {
        selectComicSans();
        comicSansTypo.setAttribute('checked', 'true');
    }
    if (savedUserInfo.typography === 3) {
        selectMontserrat();
        montserratTypo.setAttribute('checked', 'true');
    }
}

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
    if (savedUserInfo.photo !== "") {
        profileImage.src = savedUserInfo.photo;
        littleImage.src = savedUserInfo.photo;
    }
       
    refillColorPalette();
    refillTypography();
}

refillFormUserInfo();
