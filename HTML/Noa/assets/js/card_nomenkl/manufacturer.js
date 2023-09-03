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
    let response = fetch("http://192.168.1.221:8080/manufacturer", {
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
    let response = fetch("http://192.168.1.221:8080/barcode", {
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
    });
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
    let response = fetch("http://192.168.1.221:8080/provider", {
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




// Отрисовка таблицы СПИСОК ИЗГОТОВИТЕЛЕЙ
function getCreatTableManufact() {
    return fetch("http://192.168.1.221:8080/manufacturer/all")
        .then((res) => res.text())
        .then((data) => {
            data = JSON.parse(data)
            let count = 1
            const delet = "Удалить";
            data.forEach(e => {
                let manufact_table = document.querySelector('#manufact_table')

                let row = document.createElement('tr')
                row.setAttribute('id', e['id'])
                row.setAttribute('data-id', e['id']);
                row.setAttribute('style', 'cursor: pointer;')

                let name = e['manufactureName']
                let row_name = document.createElement('td');
                let link = document.createElement('button')
                row_name.setAttribute('data-field', 'name')
                row_name.setAttribute('class', 'sorting_1')
                console.log(row_name);
                link.innerHTML = name;
                link.setAttribute('id', '' + e['id'])
                console.log(link);
                link.onclick = () => listMan(link)

                row_name.appendChild(link)
                row.appendChild(row_name)

                let edit_button = document.createElement('button')
                edit_button.setAttribute('class', 'btn btn-primary fs-14 text-white edit-icn')
                edit_button.innerHTML = 'Изменить'

                let row_button = document.createElement('td')
                row_button.appendChild(edit_button)

                edit_button.onclick = () => editRowManufact(edit_button)

                row.appendChild(row_button)

                let del_button = document.createElement('button')
                del_button.innerHTML = delet
                del_button.setAttribute('class', 'btn btn-primary fs-14 text-white edit-icn')
                del_button.setAttribute('id', 'nomendelRow')

                let row_del = document.createElement('td')
                row_del.appendChild(del_button)

                row.appendChild(row_del)

                manufact_table.appendChild(row)

                let td = del_button.parentElement
                del_button.onclick = () => delete_row_manufacturer(td)

                if (count % 2 == 0) {
                    row.setAttribute('class', 'even')
                } else {
                    row.setAttribute('class', 'odd')
                }
                count++
            })
        })
}

window.onload = getCreatTableManufact();

function listMan(text) {
    fetch("http://192.168.1.221:8080/manufacturer/" + text.id + "/provider", {
            method: 'GET',
        })
        .then((res) => res.text())
        .then((data) => {
            data = JSON.parse(data)
                //отрисовка таблиц
            getCreatTableProvider()
        })
    fetch("http://192.168.1.221:8080/manufacturer/" + text.id + "/barcode", {
            method: 'GET',
        })
        .then((res) => res.text())
        .then((data) => {
            data = JSON.parse(data)
                //отрисовка таблиц
            getCreatTableBar();
        })
}

window.onload = listMan();

function delete_row_manufacturer(td) {

    tr = td.parentElement
    console.log(tr.id)

    fetch('http://192.168.1.221:8080/manufacturer/' + tr.id, { method: 'DELETE' })

    tr.remove()
    console.log('qwrqwrqw')
}

function editRowManufact(button_nom) {
    // получаем строку таблицы, в которой находится кнопка
    var row = button_nom.parentNode.parentNode;
    // получаем ячейки со значениями
    var manufactureName = row.cells[0].textContent;
    var edit_button = row.cells[1].textContent;
    // создаем инпуты для изменения значений
    var manufactureNameInput = document.createElement("input");
    manufactureNameInput.type = "text";
    manufactureNameInput.value = manufactureName;
    // заменяем значения ячеек на инпуты
    row.cells[0].innerHTML = "";
    row.cells[0].appendChild(manufactureNameInput);
    // заменяем кнопку на кнопки "Сохранить" и "Отмена"
    button_nom.textContent = "Сохранить";
    button_nom.onclick = function() { saveRowManufact(this); };
}

function saveRowManufact(button_nom) {
    // получаем строку таблицы, в которой находится кнопка
    var row = button_nom.parentNode.parentNode;
    // получаем значения из инпутов
    var newmanufactureNameInput = row.cells[0].childNodes[0].value;
    // заменяем инпуты на значения
    row.cells[0].innerHTML = newmanufactureNameInput;

    let data = { "manufacture_name": newmanufactureNameInput }
    if (data['manufacture_name'] != '') {
        console.log(row.id)

        fetch('http://192.168.1.221:8080/manufacturer/' + row.id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })

    }
    // заменяем кнопки "Сохранить" и "Отмена" на кнопку "Изменить"
    button_nom.textContent = "Изменить";
    button_nom.onclick = function() { editRowManufact(this); };
    row.cells[3].innerHTML = '<button onclick="editRowManufact(this)">Изменить</button>';
}
// Конец отрисовка таблицы СПИСОК ИЗГОТОВИТЕЛЕЙ










//   Отрисовка таблицы СПИСОК ШТРИХ-КОТОВ
function getCreatTableBar() {
    return fetch("http://192.168.1.221:8080/barcode/all")
        .then((res) => res.text())
        .then((data) => {
            data = JSON.parse(data)
            let count = 1
            const delet = "Удалить";
            data.forEach(e => {
                let nomenkla_table = document.querySelector('#code_bar_table')

                let row = document.createElement('tr')
                row.setAttribute('id', e['id'])
                row.setAttribute('data-id', e['id']);
                row.setAttribute('style', 'cursor: pointer;')

                let name = e['barCode']
                let row_name = document.createElement('td');
                row_name.setAttribute('data-field', 'name');
                row_name.setAttribute('class', 'sorting_1')
                row_name.innerHTML = name;
                row.appendChild(row_name);


                let jnvls = e['unit']
                let row_jnvls = document.createElement('td');
                row_jnvls.setAttribute('data-field', 'name')
                row_jnvls.innerHTML = jnvls;
                row.appendChild(row_jnvls)


                let edit_button = document.createElement('button')
                edit_button.setAttribute('class', 'btn btn-primary fs-14 text-white edit-icn')
                edit_button.innerHTML = 'Изменить'

                let row_button = document.createElement('td')
                row_button.appendChild(edit_button)

                edit_button.onclick = () => editRowBar(edit_button)

                row.appendChild(row_button)

                let del_button = document.createElement('button')
                del_button.innerHTML = delet
                del_button.setAttribute('class', 'btn btn-primary fs-14 text-white edit-icn')
                del_button.setAttribute('id', 'nomendelRow')

                let row_del = document.createElement('td')
                row_del.appendChild(del_button)

                row.appendChild(row_del)

                nomenkla_table.appendChild(row)

                let td = del_button.parentElement
                del_button.onclick = () => delete_row_bar(td)

                if (count % 2 == 0) {
                    row.setAttribute('class', 'even')
                } else {
                    row.setAttribute('class', 'odd')
                }
                count++
            })
        })
}

window.onload = getCreatTableBar();

function delete_row_bar(td) {

    tr = td.parentElement
    console.log(tr.id)

    fetch('http://192.168.1.221:8080/barcode/' + tr.id, { method: 'DELETE' })

    tr.remove()
    console.log('qwrqwrqw')
}

function editRowBar(button_nom) {
    // получаем строку таблицы, в которой находится кнопка
    var row = button_nom.parentNode.parentNode;
    // получаем ячейки со значениями
    var barCode = row.cells[0].textContent;
    var unit = row.cells[1].textContent;
    var edit_button = row.cells[2].textContent;
    // создаем инпуты для изменения значений
    var barCodeInput = document.createElement("input");
    barCodeInput.type = "text";
    barCodeInput.value = barCode;
    var unitInput = document.createElement("input");
    unitInput.type = "text";
    unitInput.value = unit;
    // заменяем значения ячеек на инпуты
    row.cells[0].innerHTML = "";
    row.cells[0].appendChild(barCodeInput);
    row.cells[1].innerHTML = "";
    row.cells[1].appendChild(unitInput);
    // заменяем кнопку на кнопки "Сохранить" и "Отмена"
    button_nom.textContent = "Сохранить";
    button_nom.onclick = function() { saveRowBar(this); };
}

function saveRowBar(button_nom) {
    // получаем строку таблицы, в которой находится кнопка
    var row = button_nom.parentNode.parentNode;
    // получаем значения из инпутов
    var newbarCodeInput = row.cells[0].childNodes[0].value;
    var newunitInput = row.cells[1].childNodes[0].value;
    // заменяем инпуты на значения
    row.cells[0].innerHTML = newbarCodeInput;
    row.cells[1].innerHTML = newunitInput;

    let data = { "bar_code": newbarCodeInput, "unit": newunitInput }
    if (data['bar_code'] != '' && data['unit'] != '') {
        console.log(row.id)

        fetch('http://192.168.1.221:8080/barcode/' + row.id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })

    }
    // заменяем кнопки "Сохранить" и "Отмена" на кнопку "Изменить"
    button_nom.textContent = "Изменить";
    button_nom.onclick = function() { editRowBar(this); };
    row.cells[4].innerHTML = '<button onclick="editRowBar(this)">Изменить</button>';
}
//   Конец отрисовки таблицы СПИСОК ШТРИХ КОДОВ









// Отрисовка таблицы СПИСОК ПОСТАВЩИКОВ
function getCreatTableProvider() {
    return fetch("http://192.168.1.221:8080/provider/all")
        .then((res) => res.text())
        .then((data) => {
            data = JSON.parse(data)
            let count = 1
            const delet = "Удалить";
            data.forEach(e => {
                let nomenkla_table = document.querySelector('#provider_table')

                let row = document.createElement('tr')
                row.setAttribute('id', e['id'])
                row.setAttribute('data-id', e['id']);
                row.setAttribute('style', 'cursor: pointer;')

                let id = e['id']
                let row_id = document.createElement('td');
                row_id.setAttribute('data-field', 'name');
                row_id.setAttribute('class', 'sorting_1')
                row_id.innerHTML = id;
                row.appendChild(row_id);


                let jnvls = e['providerName']
                let row_jnvls = document.createElement('td');
                row_jnvls.setAttribute('data-field', 'name')
                row_jnvls.innerHTML = jnvls;
                row.appendChild(row_jnvls)


                let edit_button = document.createElement('button')
                edit_button.setAttribute('class', 'btn btn-primary fs-14 text-white edit-icn')
                edit_button.innerHTML = 'Изменить'

                let row_button = document.createElement('td')
                row_button.appendChild(edit_button)

                edit_button.onclick = () => editRowProvider(edit_button)

                row.appendChild(row_button)

                let del_button = document.createElement('button')
                del_button.innerHTML = delet
                del_button.setAttribute('class', 'btn btn-primary fs-14 text-white edit-icn')
                del_button.setAttribute('id', 'nomendelRow')

                let row_del = document.createElement('td')
                row_del.appendChild(del_button)

                row.appendChild(row_del)

                nomenkla_table.appendChild(row)

                let td = del_button.parentElement
                del_button.onclick = () => delete_row_Provider(td)

                if (count % 2 == 0) {
                    row.setAttribute('class', 'even')
                } else {
                    row.setAttribute('class', 'odd')
                }
                count++
            })
        })
}

window.onload = getCreatTableProvider();

function delete_row_Provider(td) {

    tr = td.parentElement
    console.log(tr.id)

    fetch('http://192.168.1.221:8080/provider/' + tr.id, { method: 'DELETE' })

    tr.remove()
    console.log('qwrqwrqw')
}

function editRowProvider(button_nom) {
    // получаем строку таблицы, в которой находится кнопка
    var row = button_nom.parentNode.parentNode;
    // получаем ячейки со значениями
    var id = row.cells[0].textContent;
    var providerName = row.cells[1].textContent;
    var edit_button = row.cells[3].textContent;
    // создаем инпуты для изменения значений
    var idInput = document.createElement("input");
    idInput.type = "text";
    idInput.value = id;
    var providerNameInput = document.createElement("input");
    providerNameInput.type = "text";
    providerNameInput.value = providerName;
    // заменяем значения ячеек на инпуты
    row.cells[0].innerHTML = "";
    row.cells[0].appendChild(idInput);
    row.cells[1].innerHTML = "";
    row.cells[1].appendChild(providerNameInput);
    // заменяем кнопку на кнопки "Сохранить" и "Отмена"
    button_nom.textContent = "Сохранить";
    button_nom.onclick = function() { saveRowProvider(this); };
}

function saveRowProvider(button_nom) {
    // получаем строку таблицы, в которой находится кнопка
    var row = button_nom.parentNode.parentNode;
    // получаем значения из инпутов
    var newidInput = row.cells[0].childNodes[0].value;
    var newproviderNameInput = row.cells[1].childNodes[0].value;
    // заменяем инпуты на значения
    row.cells[0].innerHTML = newidInput;
    row.cells[1].innerHTML = newproviderNameInput;

    let data = { "id": newidInput, "provider_name": newproviderNameInput }
    if (data['id'] != '' && data['provider_name'] != '') {
        console.log(row.id)

        fetch('http://192.168.1.221:8080/provider/' + row.id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })

    }
    // заменяем кнопки "Сохранить" и "Отмена" на кнопку "Изменить"
    button_nom.textContent = "Изменить";
    button_nom.onclick = function() { editRowProvider(this); };
    row.cells[3].innerHTML = '<button onclick="editRowProvider(this)">Изменить</button>';
}
//   Конец отрисовк таблицы СПИСОК ПОСТАВЩИКОВ