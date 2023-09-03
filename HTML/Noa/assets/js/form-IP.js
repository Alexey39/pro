function sendJsonForIP(data) {
    let response = fetch("http://192.168.1.7:8080/soletrader", {
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
    });
}

function getFormIP() {
    let nameReq = document.querySelector('[name="nameReq"]').value;
    let ogrnip = document.querySelector('[name="ogrnip"]').value;
    let inn = document.querySelector('[name="inn"]').value;
    let Req = document.querySelector('[name="Req"]').value;
    let vid = document.querySelector('[name="vid"]').value;
    let bank = document.querySelector('[name="bank"]').value;
    let data = { "organization_name": nameReq, "ogrnip": ogrnip, "inn": inn, "account_number": Req, "account_type": vid, "bank_bik": bank }
    if (data['organization_name'] != '' && data['ogrnip'] != '' && data['inn'] != '' && data['account_number'] != '' && data['account_type'] != '' && data['bank_bik'] != '') {

        console.log(data);
        sendJsonForIP(data);
    } else {
        alert('Заполните все поля')
    }
}

let ip_button = document.getElementById('ip-btn')
ip_button.onclick = () => getFormIP();