const resetBtnEl = document.querySelector('.buttom__reset');

const designForm = document.querySelector('.custom-form');

const fillForm = document.querySelector('.fill-form');

const shareForm = document.querySelector('.share-form');

function handleResetBtn () {
    localStorage.removeItem('userInfo');
    designForm.reset();
    fillForm.reset();
    shareForm.reset();
}

resetBtnEl.addEventListener('click', handleResetBtn);