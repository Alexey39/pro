function sendJsonForIP(data){
    let response = fetch("http://192.168.1.217:8080/soletrader", {
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

function getFormIP()
{
    let contracts = document.querySelector('[name="contracts"]').value;
    let vid_contracts = document.querySelector('[name="vid_contracts"]').value;
    let by_default = document.querySelector('[name="by_default"]').value;
    let block = document.querySelector('[name="block"]').value;
    let data = {"sole_trader_name": contracts, "ogrnip": vid_contracts, "inn" : by_default, "account_number" : block}
    if (data['sole_trader_name'] != '' && data['ogrnip'] != '' && data['inn'] != '' && data['account_number'] != '') {

        console.log(data);
        sendJsonForIP(data);
    } else {
        alert('Заполните все поля')
    }
}

let ip_button = document.getElementById('dogovor')
ip_button.onclick = () => getFormIP();