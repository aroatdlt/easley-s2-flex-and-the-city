let savedUserInfo = JSON.parse(localStorage.getItem('userInfo'));

// Queremos que, cuando se recarga la página:
function refillFormUserInfo(){
    // Si hay información en el LOCALSTORAGE
    if (savedUserInfo !== null){
        // 1. El objeto userInfo se rellene con esa información
        userInfo = savedUserInfo;
        
        // 2. Se rellene el formulario (cada campo, en este caso sería el campo del nombre pero habría que ejecutar esta función para cada campo) con la información correspondiente del OBJETO userInfo, que viene a su vez del localStorage (esta función la explico justo debajo, en la línea 70 de este archivo)
        refillFormField(userNameForm, 'name');

        // 3. Se rellene la tarjeta con la información del OBJETO userInfo. Como nuestra función que rellena la tarjeta YA RECOGE LA INFORMACIÓN DEL OBJETO, no tenemos que cambiar nada, y podemos simplemente ejecutarla
        fillCardName();

        /*Typographi refill */
        if(userInfo.typography === 1) {
            addUbuntuTypo();
            ubuntuTypo.setAttribute('checked', 'true');
        } else if(userInfo.typography === 2) {
            addComicSansTypo();
            comicSansTypo.setAttribute('checked', 'true');
        } else if(userInfo.typography === 3) {
            addMonserratTypo();
            montserratTypo.setAttribute('checked', 'true');
        }
        
        /*Color palettes refill */
        if(userInfo.palette === 1) {
            addFirstPalete();
            firstPalete.setAttribute('checked', 'true');
        } else if (userInfo.palette === 2) {
            addSecondPalete();
            secondPalete.setAttribute('checked', 'true');
        } else if (userInfo.palette === 3) {
            addThirdPalete();
            thirdPalete.setAttribute('checked', 'true');
        }
     } 
    
    /*userInfo.name = savedUserInfo.name;
    userNameForm.value = userInfo.name;
    
    
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
    }*/
       
}

// Esta función es similar a la función updateUserInfo que está en el js previewnamejob, solo que al revés. Si en esa función hacíamos que la info del input se guardara en el objeto userInfo, ahora queremos que la info del objeto userInfo se escriba en el input:
function refillFormField(inputField, key) {
    inputField.value = userInfo[key];
    // Esto es lo mismo que escribir:

    // userNameForm.value = userInfo.name;

    // Pero en lugar de escribir la línea de arriba por cada input dentro de la función refillFormUserInfo, ejecutamos la función refillFormField con los argumentos que tocan cada vez. Por ejemplo, para rellenar el input de profession sería:

    // refillFormField(userProfessionForm, 'job');
}

refillFormUserInfo();


// Aquí también habrá que hacer algo diferente para colores/tipografías, foto y skills, pero de nuevo, el orden de la lógica sería el mismo