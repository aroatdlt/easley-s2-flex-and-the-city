const fr = new FileReader();
const uploadBtn = document.querySelector('.button_add-image');
const fileField = document.querySelector('#img-selector');
const profileImage = document.querySelector('.photo__user');
const littleImage = document.querySelector('.image-preview');

function getImage(e) {
  var myFile = e.currentTarget.files[0];
  fr.addEventListener('load', writeImage);
  fr.readAsDataURL(myFile);
  writeImage();
}

function writeImage() {
  profileImage.src = fr.result;
  littleImage.src = fr.result;
  userInfo.photo = fr.result;
  setLocalStorage();
}

function fakeFileClick() {
  fileField.click();
}

fileField.addEventListener('change', getImage);
uploadBtn.addEventListener('click', fakeFileClick);

