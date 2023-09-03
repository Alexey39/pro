function sendJsonTo(data){
    const url ="http://192.168.1.212:8080/registration";
    let response = fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(data)
        });
}

function getForm()
{
    let personal_name = document.querySelector('[name="name"]').value;
    let email = document.querySelector('[name="email"]').value;
    let password = document.querySelector('[name="pass"]').value;
    let data = {"username": personal_name, "email" : email, "password" : password}
    if (data['username'] != '' && data['email'] != '' && data['password'] != '') {
        sendJsonTo(data);
    }
}

let button = document.getElementById('register-button')

button.onclick = () => getForm();