function sendJsonTo(data){
    const url ="http://192.168.1.212:8080/develope/request";
    let response = fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(data)
        });
    alert('Благодарим за оставленную заявку!');
}

function getForm()
{
    let name = document.querySelector('[name="nameReq"]').value;
    let adres = document.querySelector('[name="lastNameReq"]').value;
    let nati = document.querySelector('[name="telReq"]').value;
    let grafik = document.querySelector('[name="grafReq"]').value;
    let foto = document.querySelector('[name="example"]').value;
    let doki = document.querySelector('[name="docReq"]').value;
    let data = {"name": name, "adres": adres, "nati" : nati, "grafik" : grafik, "foto" : foto, "doki" : doki}
    if (data['name'] != '' && data['adres'] != '' && data['nati'] != '' && data['grafik'] != '' && data['foto'] != '' && data['doki'] != '') {
        sendJsonTo(data);
    }
}

let button = document.getElementById('form-table')

button.onclick = () => getForm();