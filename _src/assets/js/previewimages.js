'use strict';

const userPhotoCard = document.querySelector(".photo__user");
console.log(userPhotoCard);

function fillPhoto() {
    if (userInfo.photo !== "") {
      userPhotoCard.src = userInfo.photo;
    } else {
      userPhotoCard.src = "assets/images/default.jpeg";
    }
  }
