function getInfoVid() {
    data = JSON.parse(localStorage.getItem('typePrice'));
    console.log(data);
    let create_vid = document.querySelector('#create-vid');

    let input_name = document.querySelector('[name="name"]');
    input_name.value = data[''];

    let input_idformul = document.querySelector('[name="idformul"]');
    input_idformul.value = data[''];

    let checkbox_onNds = document.querySelector('[name="onNds"]');
    checkbox_onNds.checked = data[''];
    if (data[''] == true) {
        checkbox_onNds.setAttribute('checked', 'checked');
    } else {
        checkbox_onNds.removeAttribute('checked', 'checked');
    }

    let checkbox_onforsale = document.querySelector('[name="onforsale"]');
    checkbox_onforsale.checked = data[''];
    if (data[''] == true) {
        checkbox_onforsale.setAttribute('checked', 'checked');
    } else {
        checkbox_onforsale.removeAttribute('checked', 'checked');
    }

    let input_pricing = document.querySelector('[name="pricing"]');
    input_pricing.value = data[''];
}

getInfoVid();