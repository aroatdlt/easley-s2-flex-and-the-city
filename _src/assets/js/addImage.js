// No hacer caso a la línea del FileReader, como en el mago de oz con el tipo de la cortina :)
const fr = new FileReader();

// Caso a partir de aquí :)
const uploadBtn = document.querySelector('.button_add-image');

const fileField = document.querySelector('#img-selector');
const profileImage = document.querySelector('.photo__user');
const littleImage = document.querySelector('.image-preview');




function getImage(e){
  var myFile = e.currentTarget.files[0];
  fr.addEventListener('load', writeImage);
  fr.readAsDataURL(myFile);
}

function writeImage() {
  profileImage.src= fr.result;
  littleImage.src= fr.result;
}

function fakeFileClick() {
 fileField.click(); 
}

function imageLocalStorage() {
  userInfo.photo = myFile.src;
  localStorage.setItem('userInfo', JSON.stringify);
}

fileField.addEventListener('change', getImage);
fileField.addEventListener('load', imageLocalStorage);
uploadBtn.addEventListener('click', fakeFileClick);


