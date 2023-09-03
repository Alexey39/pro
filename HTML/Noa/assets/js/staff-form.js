function sendJsonFormStaff(data) {
    let response = fetch("http://192.168.1.221:8080/user", {
        method: 'POST',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(data)
    }).then((res) => {
        if (res.status === 200) {

        }
    });;
}

function getFormStaff() {
    const form = document.querySelector('.staff_form')

    let selected_organization = document.querySelector('[name="organization_employees"]');
    let option_organization = selected_organization.options[selected_organization.selectedIndex]
    let selected_organization_id = option_organization.id;

    let number = document.querySelector('[name="number"]').value;
    let surname = document.querySelector('[name="surname"]').value;
    let name = document.querySelector('[name="name"]').value;
    let patronymic = document.querySelector('[name="patronymic"]').value;
    let data_birth = document.querySelector('[name="data_birth"]').value;
    let pol = document.querySelector('[name="pol"]').value;

    let selected_pharmacy = document.querySelector('[name="pharmacy"]');
    let option_pharmacy = selected_pharmacy.options[selected_pharmacy.selectedIndex]
    let selected_pharmacy_id = option_pharmacy.id;


    let job_title = document.querySelector('[name="job_title"]').value;

    let data_job = document.querySelector('[name="data"]').value;
    let email = document.querySelector('[name="email"]').value;
    let password = document.querySelector('[name="password"]').value;
    let phone = document.querySelector('[name="phone"]').value;

    let fields = [
        { value: selected_organization_id, name: 'Организация' },
        { value: number, name: 'Таб. номер' },
        { value: surname, name: 'Фамилия' },
        { value: name, name: 'Имя' },
        { value: patronymic, name: 'Отчество' },
        { value: data_birth, name: 'Дата рождения' },
        { value: pol, name: 'Пол' },
        { value: selected_pharmacy_id, name: 'Подразделение' },
        { value: job_title, name: 'Должность', arrayName: 'job_titles' },
        { value: data_job, name: 'Дата приёма' },
        { value: email, name: 'Email' },
        { value: password, name: 'Пароль' },
        { value: phone, name: 'Телефон' },
    ]

    let emptyField = null;
    let job_titles = [];

    for (let i = 0; i < fields.length; i++) {
        if (fields[i].value === '' || fields[i].value === null) {
            emptyField = fields[i].name;
            break;
        }

        if (fields[i].arrayName === 'job_titles') {
            job_titles.push(fields[i].value);
        }
    }

    if (emptyField === null) {
        let data = {
            "organization": selected_organization_id,
            "tab_number": number,
            "last_name": surname,
            "first_name": name,
            "patronymic": patronymic,
            "date_of_birth": data_birth,
            "gender": pol,
            "pharmacy": selected_pharmacy_id,
            "roles": job_titles,
            "registration_data": data_job,
            "user_identifier": email,
            "password": password,
            "phone": phone
        }

        let arrayData = [data];
        console.log(data);
        sendJsonFormStaff(data);
    } else {
        alert('Заполните поле: ' + emptyField)
    }
}

let staff_button = document.getElementById('staff-btn')
staff_button.onclick = () => getFormStaff();

function getOptionStaff() {
    return fetch("http://192.168.1.221:8080/organization/all")
        .then((res) => res.text())
        .then((data) => {
            data = JSON.parse(data);
            data.forEach(e => {
                let substance = document.querySelector("organization_employees");
                let option = document.createElement("option");

                option.setAttribute('id', e['id'])
                option.setAttribute('data-id', e['id'])
                option.innerHTML = e['organizationName']
                substance.appendChild(option)
            })
        })
}

window.onload = getOptionStaff()