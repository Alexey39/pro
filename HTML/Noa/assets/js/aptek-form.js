function sendJsonForApteki(data) {
    let response = fetch("http://192.168.1.221:8080/pharmacy", {
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

function getFormApteki() {
    console.log('dvhjsrugjvrh')
    let name = document.querySelector('[name="name"]').value;
    let adres = document.querySelector('[name="adres"]').value;

    let selected_organization = document.getElementById('option_organization');
    let option_organization = selected_organization.options[selected_organization.selectedIndex]
    let selected_organization_id = option_organization.id;

    let phone = document.querySelector('[name="phone"]').value;
    let beginning_of_work = document.querySelector('[name="scheduleS"]').value
    let end_of_work = document.querySelector('[name="scheduleDO"]').value
    let status = document.querySelector('[name="status"]').value;

    let fields = [
        { value: name, name: 'Название аптеки' },
        { value: adres, name: 'Адрес аптеки' },
        { value: selected_organization_id, name: 'Организация' },
        { value: phone, name: 'Телефон' },
        { value: beginning_of_work, name: 'Открытие аптеки' },
        { value: end_of_work, name: 'Закрытие аптеки' },
        { value: status, name: 'Статус' },

    ]

    let emptyField = null;

    for (let i = 0; i < fields.length; i++) {
        if (fields[i].value === '' || fields[i].value === null) {
            emptyField = fields[i].name;
            break;
        }
    }

    if (emptyField === null) {
        let data = {
            "pharmacy_name": name,
            "address": adres,
            "organization": Number(selected_organization_id),
            "phone": phone,
            "schedule": beginning_of_work + ' - ' + end_of_work,
            "status": status
        }

        let arrayData = [data];
        console.log(data);
        sendJsonForApteki(data);
    } else {
        alert('Заполните поле: ' + emptyField)
    }
}

let ip_button = document.getElementById('apteki_btn')
ip_button.onclick = () => getFormApteki();


function getOptionAptek() {
    return fetch("http://192.168.1.221:8080/pharmacy/all")
        .then((res) => res.text())
        .then((data) => {
            data = JSON.parse(data);
            data.forEach(e => {
                let substance = document.querySelector("organization_pharmacies");
                let option = document.createElement("option");

                option.setAttribute('id', e['id'])
                option.setAttribute('data-id', e['id'])
                option.innerHTML = e['organizationName']
                substance.appendChild(option)
            })
        })
}

window.onload = getOptionAptek()