const button_button = document.querySelector('.fix-form');
const button_form = document.querySelector('#button_blablabla');
const button_popup = document.querySelector('.button_popup');
const button_close_button = document.querySelector('.close_fix-btn');

button_button.addEventListener('click', () => {
    console.log('rqrqrqrqrqeqwe');
    button_form.classList.add('open');
    button_popup.classList.add('button_popup_open');
});

button_close_button.addEventListener('click', () => {
    console.log('qeqwe');
    button_form.classList.remove('close');
    button_popup.classList.remove('button_popup_open');
});


function sendJsonForFix(data) {
    let response = fetch("http://192.168.1.221:8080/pharmacy", {
        method: 'POST',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(data)
    }).then((res) => {
        if (res.status === 200) {
            location.reload()
        }
    });;
}

function getFormFix() {
    let name = document.querySelector('[name="create_price"]').value;
    let data = { "create_price": name }
    if (data['create_price'] != '') {

        console.log(data);
        sendJsonForFix(data);
    } else {
        alert('Заполните все поле')
    }
}

let fix_price_button = document.getElementById('fix_price_form')
fix_price_button.onclick = () => getFormFix();