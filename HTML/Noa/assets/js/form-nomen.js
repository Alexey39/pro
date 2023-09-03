function sendJsonFor(data){
    let response = fetch("http://192.168.1.102:8080/soletrader", {
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

function getForm()
{
    let name = document.querySelector('[name="product_name"]').value;
    let jnvls = document.querySelector('[name="vital_necessity"]').value;
    let vsego = document.querySelector('[name="total"]').value;
    let ostatok = document.querySelector('[name="free"]').value;
    let rezerv = document.querySelector('[name="reserve"]').value;
    let data = {"product_name": name, "vital_necessity": jnvls, "total" : vsego, "free" : ostatok, "reserve" : rezerv}
    if (data['product_name'] != '' && data['vital_necessity'] != '' && data['total'] != '' && data['free'] != '' && data['reserve'] != '') {

        console.log(data);
        sendJsonFor(data);
    } else {
        alert('Заполните все поля')
    }
}

let ip_button = document.getElementById('nom_btn')
ip_button.onclick = () => getForm();