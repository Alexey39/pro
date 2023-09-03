function saveToken(token) {
  sessionStorage.setItem('tokenData', token);
  document.cookie=token;
  alert(document.cookie);
}
function getTokenData() {
  let email = document.querySelector('[name="email"]').value;
  let pass = document.querySelector('[name="pass"]').value;
  let data = {"email" : email, "password" : pass}
  
  return fetch("http://192.168.1.212:8080/login", {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(data)
  })
      .then((res) => {
          if (res.status === 200) {
            window.location = 'index.html';
            saveToken(res.text);
            return Promise.resolve()
          }
          return Promise.reject();
      });
}

let login_button = document.getElementById('login-btn');
login_button.onclick = () => getTokenData();
