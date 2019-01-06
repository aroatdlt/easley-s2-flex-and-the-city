'use strict';

function fillPhoto() {
  const userPhotoCard = document.querySelector(".photo__user");
console.log(userPhotoCard);
    if (userInfo.photo !== "") {
      userPhotoCard.src = userInfo.photo;
    } else {
      userPhotoCard.src = "assets/images/default.jpeg";
    }
  }