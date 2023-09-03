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