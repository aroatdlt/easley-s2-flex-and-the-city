const buttonCreateCardElement = document.querySelector('.button_deco');
const twitterLinkElement = document.querySelector('.twitter_link');
const twitterAnchor = document.querySelector('.button_twitter');
function sendRequest(){
    fetch('https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/', {
      method: 'POST',
      body: JSON.stringify(userInfo),
      headers: {
        'content-type': 'application/json'
      },
    })
      .then(function(resp) { return resp.json(); })
      .then(function(result) { showURL(result); })
      .catch(function(error) { console.log(error); });

     
  }

  function showURL(result){
    if(result.success){
      twitterLinkElement.innerHTML = '<a href=' + result.cardURL + '>' + result.cardURL + '</a>';
      twitterAnchor.href = `https://twitter.com/intent/tweet?text=${result.cardURL}`;
    }else{
      twitterLinkElement.innerHTML = 'ERROR:' + result.error;
      
    }
  };

function handlerSendBackend (e) {
    event.preventDefault();
    sendRequest();
}

buttonCreateCardElement.addEventListener('click', handlerSendBackend);