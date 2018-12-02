// No hacer caso a la línea del FileReader, como en el mago de oz con el tipo de la cortina :)
const fr = new FileReader();

// Caso a partir de aquí :)
const uploadBtn = document.querySelector('.button_add-image');

const fileField = document.querySelector('#img-selector');
const profileImage = document.querySelector('.photo__user');

function getImage(e){
  var myFile = e.currentTarget.files[0];
  fr.addEventListener('load', writeImage);
  fr.readAsDataURL(myFile);
}

function writeImage() {
  profileImage.src= fr.result;
}

function fakeFileClick() {
 fileField.click(); 
}

fileField.addEventListener('change', getImage);
uploadBtn.addEventListener('click', fakeFileClick);
