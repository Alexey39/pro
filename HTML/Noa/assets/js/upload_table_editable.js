function getInfoApteki() {
    data = JSON.parse(localStorage.getItem('pharmacy'));
    console.log(data);

    let pharmacy = document.querySelector('#pharmacy');

    let input_name = document.querySelector('[name="name"]');
    input_name.value = data['pharmacy_name'];

    let input_adres = document.querySelector('[name="adres"]');
    input_adres.value = data['address'];

    let select_organization = document.querySelector('[name="organization"]');
    select_organization.value = data['organization'];

    let input_phone = document.querySelector('[name="phone"]');
    input_phone.value = data['phone'];

    let select_beginning_of_work = document.querySelector('[name="scheduleS"]');
    select_beginning_of_work.value = data['schedule'].slice(0, 5);

    let select_end_of_work = document.querySelector('[name="scheduleDO"]');
    select_end_of_work.value = data['schedule'].slice(6);

    let select_status = document.querySelector('[name="status"]');
    select_status.value = data['status'];
}

getInfoApteki();