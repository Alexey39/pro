function getInfoIP() {
    data = JSON.parse(localStorage.getItem('ip'));
    console.log(data);
    let ip_table_form = document.querySelector('#ip-table-form');

    let input_name = document.querySelector('[name="nameReq"]');
    input_name.value = data[''];

    let input_ogrnip = document.querySelector('[name="ogrnip"]');
    input_ogrnip.value = data[''];

    let input_inn = document.querySelector('[name="inn"]');
    input_inn.value = data[''];

    let input_Req = document.querySelector('[name="Req"]');
    input_Req.value = data[''];

    let select_vid = document.querySelector('[name="vid"]');
    select_vid.value = data[''];

    let input_bank = document.querySelector('[name="bank"]');
    input_bank.value = data[''];

}

getInfoIP();