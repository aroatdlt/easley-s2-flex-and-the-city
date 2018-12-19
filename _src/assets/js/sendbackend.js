const buttonCreateCardElement = document.querySelector('.button_deco');
const twitterLinkElement = document.querySelector('.twitter_link');
const twitterAnchor = document.querySelector('.button_twitter');
const twitterMotherElement = document.querySelector('.twitter_mother');

function sendRequest() {
  fetch('https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/', {
      method: 'POST',
      body: JSON.stringify(userInfo),
      headers: {
        'content-type': 'application/json'
      },
    })
    .then(function (resp) {
      return resp.json();
    })
    .then(function (result) {
      showURL(result);
    })
    .catch(function (error) {
      console.log(error);
    });
}

function showURL(result) {
  if (result.success) {
    twitterLinkElement.innerHTML = '<a class="twitter_link" href=' + result.cardURL + '>' + result.cardURL + '</a>';
    twitterAnchor.href = `https://twitter.com/intent/tweet?text=¡Mira%20qué%20tarjeta%20más%20chula%20he%20creado%20con%20Awesome%20profile-cards!%20${result.cardURL}`;
  } else {
    twitterLinkElement.innerHTML = 'ERROR:' + result.error;
  }
};

function handlerSendBackend(event) {
  event.preventDefault();
  sendRequest();
  twitterMotherElement.classList.remove('hidden');
  buttonCreateCardElement.classList.add('button_created');
}

buttonCreateCardElement.addEventListener('click', handlerSendBackend);