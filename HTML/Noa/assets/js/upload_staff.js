function getInfoStaff() {
    data = JSON.parse(localStorage.getItem('staff'));
    console.log(data);

    let satff_table = document.querySelector('#satff_table');

    let select_organization = document.querySelector('#organization');
    select_organization.value = data['organization'];

    let input_number = document.querySelector('[name="number"]');
    input_number.value = data['tab_number'];

    let input_surname = document.querySelector('[name="surname"]');
    input_surname.value = data['last_name'];

    let input_name = document.querySelector('[name="name"]');
    input_name.value = data['first_name'];

    let input_patronymic = document.querySelector('[name="patronymic"]');
    let input_patronymic_value = data['patronymic'];

    let input_data_birth = document.querySelector('[name="data_birth"]');
    input_data_birth.value = data['date_of_birth'];

    let select_pol = document.querySelector('[name="pol"]');
    select_pol.value = data['gender'];

    let input_sudivision = document.querySelector('[name="sudivision"]');
    input_sudivision.value = data['sudivision'];

    let input_job_title = document.querySelector('[name="job_title"]');
    input_job_title.value = data['roles'];

    let input_data_job = document.querySelector('[name="data"]');
    input_data_job.value = data['registration_data'];

    let input_email = document.querySelector('[name="email"]');
    input_email.value = data['user_identifier'];

    let input_password = document.querySelector('[name="password"]');
    input_password.value = data['password'];

    let input_phone = document.querySelector('[name="phone"]');
    input_phone.value = data['phone'];
}

getInfoStaff();