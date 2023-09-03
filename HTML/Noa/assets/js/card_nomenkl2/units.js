// Открытие таблицы ЕДИНИЦЫ ИЗМЕРЕНИЯ
const unit_button = document.querySelector('.unit-btn');
const unit_form = document.querySelector('#unit_blablabla');
const unit_popup = document.querySelector('.unit_popup');
const unit_close_button = document.querySelector('.unit_close_btn');

unit_button.addEventListener('click', () => {
    console.log('rqrqrqrqrqeqwe');
    unit_form.classList.add('open');
    unit_popup.classList.add('unit_popup_open');
});

unit_close_button.addEventListener('click', () => {
    console.log('qeqwe');
    unit_form.classList.remove('close');
    unit_popup.classList.remove('unit_popup_open');
});
//  Закрытие таблицы ЕДИНИЦЫ ИЗМЕРЕНИЯ




// Отправка данных с формы таблицы ЕДИНИЦЫ ИЗМЕРЕНИЯ
function sendJsonForUn(data) {
    let response = fetch("http://192.168.1.186:8080/unit", {
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

function getFormUn() {
    let unit = document.querySelector('[name="unit-form"]').value;
    let coefficient = document.querySelector('[name="coefficient"]').value;
    let unit_code = document.querySelector('[name="id-form"]').value;

    let fields = [
        { value: unit, name: 'Единица' },
        { value: coefficient, name: 'Коэффициент' },
        { value: unit_code, name: 'Код' }
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
            "unit": unit,
            "coefficient": coefficient,
            "unit_code": unit_code
        }

        let arrayData = [data];
        console.log(data);
        sendJsonForUn(data);
    } else {
        alert('Заполните поле: ' + emptyField)
    }
}

let unit_form_button = document.getElementById('btn_unit')
unit_form_button.onclick = () => getFormUn();
// Конец отправка данных с формы таблицы ЕДИНИЦЫ ИЗМЕРЕНИЯ

// Отрисовка таблицы СПИСОК ЕДИНИЦ ИЗМЕРЕНИЯ
function getCreatTableUnit() {
    return fetch("http://192.168.1.186:8080/unit/all")
        .then((res) => res.text())
        .then((data) => {
            data = JSON.parse(data)
            let count = 1
            const delet = "Удалить";
            data.forEach(e => {
                let nomenkla_table = document.querySelector('#units_table')

                let row = document.createElement('tr')
                row.setAttribute('id', e['id'])
                row.setAttribute('data-id', e['id']);
                row.setAttribute('style', 'cursor: pointer;')

                let name = e['unit']
                let row_name = document.createElement('td');
                row_name.setAttribute('data-field', 'name');
                row_name.setAttribute('class', 'sorting_1')
                row_name.innerHTML = name;
                row.appendChild(row_name);


                let jnvls = e['coefficient']
                let row_jnvls = document.createElement('td');
                row_jnvls.setAttribute('data-field', 'name')
                row_jnvls.innerHTML = jnvls;
                row.appendChild(row_jnvls)

                let vsego = e['unitCode']
                let row_vsego = document.createElement('td');
                row_vsego.setAttribute('data-field', 'name')
                row_vsego.innerHTML = vsego;
                row.appendChild(row_vsego);


                let edit_button = document.createElement('button')
                edit_button.setAttribute('class', 'btn btn-primary fs-14 text-white edit-icn')
                edit_button.innerHTML = 'Изменить'

                let row_button = document.createElement('td')
                row_button.appendChild(edit_button)

                edit_button.onclick = () => editRowUnit(edit_button)

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
                del_button.onclick = () => delete_row_unit(td)

                if (count % 2 == 0) {
                    row.setAttribute('class', 'even')
                } else {
                    row.setAttribute('class', 'odd')
                }
                count++
            })
        })
}


window.onload = getCreatTableUnit();

function delete_row_unit(td) {

    tr = td.parentElement
    console.log(tr.id)

    fetch('http://192.168.1.186:8080/unit/' + tr.id, { method: 'DELETE' })

    tr.remove()
    console.log('qwrqwrqw')
}

function editRowUnit(button_nom) {
    // получаем строку таблицы, в которой находится кнопка
    var row = button_nom.parentNode.parentNode;
    // получаем ячейки со значениями
    var unit = row.cells[0].textContent;
    var coefficient = row.cells[1].textContent;
    var unitCode = row.cells[2].textContent;
    var edit_button = row.cells[4].textContent;
    // создаем инпуты для изменения значений
    var unitInput = document.createElement("input");
    unitInput.type = "text";
    unitInput.value = unit;
    var coefficientInput = document.createElement("input");
    coefficientInput.type = "text";
    coefficientInput.value = coefficient;
    var unitCodeInput = document.createElement("input");
    unitCodeInput.type = "text";
    unitCodeInput.value = unitCode;
    // заменяем значения ячеек на инпуты
    row.cells[0].innerHTML = "";
    row.cells[0].appendChild(unitInput);
    row.cells[1].innerHTML = "";
    row.cells[1].appendChild(coefficientInput);
    row.cells[2].innerHTML = "";
    row.cells[2].appendChild(unitCodeInput);
    // заменяем кнопку на кнопки "Сохранить" и "Отмена"
    button_nom.textContent = "Сохранить";
    button_nom.onclick = function() { saveRowUnit(this); };
}

function saveRowUnit(button_nom) {
    // получаем строку таблицы, в которой находится кнопка
    var row = button_nom.parentNode.parentNode;
    // получаем значения из инпутов
    var newunitInput = row.cells[0].childNodes[0].value;
    var newcoefficientInput = row.cells[1].childNodes[0].value;
    var newunitCodeInput = row.cells[2].childNodes[0].value;
    // заменяем инпуты на значения
    row.cells[0].innerHTML = newunitInput;
    row.cells[1].innerHTML = newcoefficientInput;
    row.cells[2].innerHTML = newunitCodeInput;

    let data = { "unit": newunitInput, "coefficient": newcoefficientInput, "unit_code": newunitCodeInput }
    console.log(data)
    if (data['unit'] != '' && data['coefficient'] != '' && data['unit_code'] != '') {
        console.log(row.id)

        fetch('http://192.168.1.154:8080/unit/' + row.id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })

    }
    // заменяем кнопки "Сохранить" и "Отмена" на кнопку "Изменить"
    button_nom.textContent = "Изменить";
    button_nom.onclick = function() { editRowUnit(this); };
    row.cells[6].innerHTML = '<button onclick="editRowUnit(this)">Изменить</button>';
}
// Конец отрисовки таблицы СПИСОК ЕДИНИЦ ИЗМЕРЕНИЯ