function sendJsonForOOO(data) {
    let response = fetch("http://192.168.1.7:8080/organization", {
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

function getFormOOO() {
    const form = document.querySelector('.oop-form')
    let name = document.querySelector('[name="oooname"]').value;
    let short_name = document.querySelector('[name="short_name"]').value;
    let inn = document.querySelector('[name="ooo-inn"]').value;
    let ogrn = document.querySelector('[name="ogrn"]').value;
    let kpp = document.querySelector('[name="kpp"]').value;
    let ifns = document.querySelector('[name="ifns"]').value;
    let data_nedeli = document.querySelector('[name="data"]').value;
    let number = document.querySelector('[name="number"]').value;
    let adres = document.querySelector('[name="adres"]').value;

    let fields = [
        { value: name, name: 'Наименование' },
        { value: short_name, name: 'Сокращённое наименование' },
        { value: inn, name: 'ИНН' },
        { value: ogrn, name: 'ОГРН' },
        { value: kpp, name: 'КПП' },
        { value: ifns, name: 'Код ИНФНС' },
        { value: data_nedeli, name: 'Дата в нд.' },
        { value: number, name: 'Серия и номер' },
        { value: adres, name: 'Юр. адрес' }

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
            "organization_name": name,
            "shortname": short_name,
            "registration_number": ogrn,
            "kpp": kpp,
            "ifns_code": ifns,
            "data": data_nedeli,
            "passport": number,
            "legal_address": adres,
            "inn": inn
        }

        let arrayData = [data];
        console.log(data);
        sendJsonForOOO(data);
    } else {
        alert('Заполните поле: ' + emptyField)
    }
}

let oop_button = document.getElementById('staff_btn')
oop_button.onclick = () => getFormOOO();