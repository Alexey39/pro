function getInfoOOO() {
    data = JSON.parse(localStorage.getItem('ooo'));
    console.log(data);
    let ooo_table_form = document.querySelector('#ooo-table-form');

    let input_oooname = document.querySelector('[name="oooname"]');
    input_oooname.value = data[''];

    let input_short_name = document.querySelector('[name="short_name"]');
    input_short_name.value = data[''];

    let input_ooo_inn = document.querySelector('[name="ooo-inn"]');
    input_ooo_inn.value = data[''];

    let input_ogrn = document.querySelector('[name="ogrn"]');
    input_ogrn.value = data[''];

    let input_kpp = document.querySelector('[name="kpp"]');
    input_kpp.value = data[''];

    let input_ifns = document.querySelector('[name="ifns"]');
    input_ifns.value = data[''];

    let input_data = document.querySelector('[name="data"]');
    input_data.value = data[''];

    let input_number = document.querySelector('[name="number"]');
    input_number.value = data[''];

    let input_adres = document.querySelector('[name="adres"]');
    input_adres.value = data[''];
}

getInfoOOO();