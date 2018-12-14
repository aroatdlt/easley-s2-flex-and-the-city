const userNameForm = document.querySelector('.full__name');
const professionForm = document.querySelector('.profession__input');

const userNameCard = document.querySelector('.name');
const professionCard = document.querySelector('.profession');

// Tenemos una función handle que controla qué ocurre cuando se escribe en los inputs. Queremos que, cuando la usuaria rellene un campo, pasen 3 cosas:
function handleCardName() {
    // 1. Se actualice el objeto userInfo en el que guardamos toda la información que introduce la usuaria (explicación en línea 19 de este archivo)
    updateUserInfo('name', userNameForm.value);

    // 2. La información que se ha guardado en el objeto se guarde también en el localStorage (explicación en línea 43 de este archivo)
    setLocalStorage();

    // 3. SOLO DESPUÉS DE ESO, se rellene el campo correspondiente en la tarjeta (explicación en línea 53 de este archivo)
    fillCardName();
}

// 1. Se actualiza el objeto userInfo
function updateUserInfo(key, value) {
    userInfo[key] = value;
    // Lo que hace esta función es lo mismo que escribir:

    // userInfo.name = userNameForm.value;

    // Pero en lugar de escribir la línea de arriba en cada función handle, ejecutamos esta función, y le pasamos como parámetro los valores que necesitamos en cada función handle. Si yo ejecuto:

    // updateUserInfo('name', userNameForm.value);

    // Es lo mismo que si escribiéramos dentro de la función handle:

    // userInfo.name = userNameForm.value;

    // Porque userInfo[key] equivale a userInfo.name, y value equivale a userNameForm.value. Lo bueno de esta función es que puedo hacer lo mismo en la función handleCardProfession:

    // updateUserInfo('job', userProfessionForm.value);

    // Que sería lo mismo que escribir:

    // userInfo.job = userProfessionForm.value;
}

// 2. La información que se ha guardado en el objeto se guarda también en el localStorage. En esta función únicamente he guardado una línea de código que hasta ahora estamos repitiendo en toooodas las funciones handle, o sea que no es nada nuevo
function setLocalStorage() {
    // Solo que en lugar de escribir todo el rato esto:
    localStorage.setItem('userInfo', JSON.stringify(userInfo));

    // Simplemente tendríamos que ejecutar la función (en el mismo sitio en el que escribiríamos la línea de arriba):

    // setLocalStorage();
}

// 3. Se rellena el campo correspondiente de la tarjeta A PARTIR DE LA INFORMACIÓN DEL OBJETO userInfo, NO A PARTIR DEL VALUE DE LOS INPUTS, NI A PARTIR DE LA INFO QUE HAY EN LOCALSTORAGE
function fillCardName() {
    // Si hay información en el objeto userInfo
    if (userInfo.name !== "") {
        // El campo de la tarjeta se rellena con esa información
        userNameCard.innerHTML = userInfo.name;

    // Si no,
    } else {
        // El campo de la tarjeta es igual a lo que viene por defecto
        userNameCard.innerHTML = "Nombre Apellido";
    }

    // Dejo justo debajo (línea 73 de este archivo) lo que estábamos haciendo ayer para que comparéis. En realidad solo nos hacen falta dos condiciones, porque es mejor que la tarjeta se rellene SIEMPRE desde el objeto (salvo que no haya info dentro del objeto, de ahí la segunda condición). Esto es porque, en realidad, cuando la usuaria rellena el formulario ya estamos guardando esa información en el objeto (según lo que hemos definido en la función handle de arriba), por lo que la tarjeta puede rellenarse directamente desde el objeto, en lugar de desde el formulario. Así nos quitamos de líos cuando ejecutamos la función que rellena formulario+tarjeta cuando se recarga la página (y la explicación continúa en el archivo js searchfromlocalstorage)

    // --> Debajo (línea 82 de este archivo) tenéis todavía las funciones handleCardProfession y fillCardProfession con la lógica que teníamos hasta ahora, así podéis comparar

    // Por cierto que estas nuevas funciones que he propuesto solo valen para los inputs del formulario. Para colores/tipografías, foto y skills habrá que hacer funciones diferentes, pero el orden de la lógica será el mismo (usuaria escribe en input --> se rellena userInfo --> se guarda en localStorage y la tarjeta se rellena desde la info de userInfo)


    /* if (userNameForm.value !== "") {
        userNameCard.innerHTML = userNameForm.value;
    } else if (userInfo.name !== "") {
        userNameCard.innerHTML = userInfo.name;
    } else {
        userNameCard.innerHTML = "Nombre Apellido";
    } */
}

function handleCardProfession() {
    fillCardProfession();
    userInfo.job = professionForm.value;
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
}

const fillCardProfession = () => {
    if(professionForm.value === "") {
        professionCard.innerHTML = "Front-end developer";
    }else {
        professionCard.innerHTML = professionForm.value;
    }
}

userNameForm.addEventListener('keyup', handleCardName);
professionForm.addEventListener('keyup', handleCardProfession);