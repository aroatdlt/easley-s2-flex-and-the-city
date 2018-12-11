const buttonCreateCardElement = document.querySelector('.button_deco');

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
      responseURL.innerHTML = '<a href=' + result.cardURL + '>' + result.cardURL + '</a>';
    }else{
      responseURL.innerHTML = 'ERROR:' + result.error;
    }
  }

function handlerSendBackend () {
    sendRequest();
    showURL(result);
}

buttonCreateCardElement.addEventListener('click', handlerSendBackend);