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
        { value: manufacture_name, name: 'Производитель' },

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