// Открытие таблицы список изготовителей
const button = document.querySelector('.manufacturer-btn');
const form = document.querySelector('#blablabla');
const popup = document.querySelector('.popup');
const close_button = document.querySelector('.close_btn');

button.addEventListener('click', () => {
    console.log('rqrqrqrqrqeqwe');
    form.classList.add('open');
    popup.classList.add('popup_open');
});

close_button.addEventListener('click', () => {
    console.log('qeqwe');
    form.classList.remove('close');
    popup.classList.remove('popup_open');
});
//  Закрытие таблицы список изготовителей





// Открытие таблицы штрих котов
const groups_button = document.querySelector('.bar_code-btn');
const groups_form = document.querySelector('#groups_blablabla');
const groups_popup = document.querySelector('.groups_popup');
const groups_close_button = document.querySelector('.groups_close_btn');

groups_button.addEventListener('click', () => {
    console.log('rqrqrqrqrqeqwe');
    groups_form.classList.add('open');
    groups_popup.classList.add('groups_popup_open');
});

groups_close_button.addEventListener('click', () => {
    console.log('qeqwe');
    groups_form.classList.remove('close');
    groups_popup.classList.remove('groups_popup_open');
});
// Закрытие таблицы штрих котов







// Открытие таблицы список кодов поставщика
const thresholds_button = document.querySelector('.provider-btn');
const thresholds_form = document.querySelector('#thresholds_blablabla');
const thresholds_popup = document.querySelector('.thresholds_popup');
const thresholds_close_button = document.querySelector('.thresholds_close_btn');

thresholds_button.addEventListener('click', () => {
    console.log('rqrqrqrqrqeqwe');
    thresholds_form.classList.add('open');
    thresholds_popup.classList.add('thresholds_popup_open');
});

thresholds_close_button.addEventListener('click', () => {
    console.log('qeqwe');
    thresholds_form.classList.remove('close');
    thresholds_popup.classList.remove('thresholds_popup_open');
});
// Закрытие таблицы список кодов поставщика







// Отправка данных с формы таблицы СПИСОК ИЗГОТОВИТЕЛЕЙ
function sendJsonForMarg(data) {
    let response = fetch("http://192.168.1.225:8080/manufacturer", {
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

function getFormMarg() {
    let manufacture_name = document.querySelector('[name="manufacture"]').value;
    let fields = [
        { value: manufacture_name, name: 'Изготовитель' },
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
            "manufacture_name": manufacture_name
        }

        let arrayData = [data];
        console.log(data);
        sendJsonForMarg(data);
    } else {
        alert('Заполните поле: ' + emptyField)
    }
}

let manufacture_button = document.getElementById('manufacture')
manufacture_button.onclick = () => getFormMarg();
// Конец отправка данных с формы таблицы СПИСОК ИЗГОТОВИТЕЛЕЙ










// Отправка данных с формы таблицы СПИСОК ШТРИХ-КОДОВ
function sendJsonForShC(data) {
    let response = fetch("http://192.168.1.225:8080/barcode", {
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

function getFormShC() {
    let bar_code = document.querySelector('[name="bar_code"]').value;
    let unit = document.querySelector('[name="unit"]').value;

    let fields = [
        { value: bar_code, name: 'Штрих-код' },
        { value: unit, name: 'Единица измерения' }
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
            "bar_code": bar_code,
            "unit": unit
        }

        let arrayData = [data];
        console.log(data);
        sendJsonForShC(data);
    } else {
        alert('Заполните поле: ' + emptyField)
    }
}

let bar_code_button = document.getElementById('code_bar')
bar_code_button.onclick = () => getFormShC();
// Конец отправка данных с формы таблицы СПИСОК ШТРИХ-КОДОВ










// Отправка данных с формы таблицы СПИСОК КОДОВ ПОСТАВЩИКА
function sendJsonForPS(data) {
    let response = fetch("http://192.168.1.225:8080/provider", {
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

function getFormPS() {
    let id = document.querySelector('[name="id"]').value;
    let name = document.querySelector('[name="provider_name"]').value;

    let fields = [
        { value: name, name: 'Поставщик' },
        { value: id, name: 'Код' }
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
            "id": id,
            "provider_name": name
        }

        let arrayData = [data];
        console.log(data);
        sendJsonForPS(data);
    } else {
        alert('Заполните поле: ' + emptyField)
    }
}

let postavcka_button = document.getElementById('postavcka')
postavcka_button.onclick = () => getFormPS();
// Конец отправка данных с формы таблицы СПИСОК КОДОВ ПОСТАВЩИКА