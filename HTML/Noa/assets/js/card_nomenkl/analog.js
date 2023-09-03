// Отрисовка таблицы АНАЛОГ
function getCreatTableAnalog(id) {
    return fetch("http://192.168.1.186:8080/product/analogues" + id)
        .then((res) => res.text())
        .then((data) => {
            data = JSON.parse(data)
            let count = 1
            const delet = "Удалить";
            data.forEach(e => {
                let nomenkla_table = document.querySelector('#analog_table')

                let row = document.createElement('tr')
                row.setAttribute('id', e['id'])
                row.setAttribute('data-id', e['id']);
                row.setAttribute('style', 'cursor: pointer;')

                let name = e['productName']
                let row_name = document.createElement('td');
                let link = document.createElement('a')
                row_name.setAttribute('data-field', 'name');
                row_name.setAttribute('class', 'sorting_1')
                link.setAttribute('href: nomenk-card.html')
                row_name.innerHTML = name;
                row_name.innerHTML = link;
                row.appendChild(row_name);


                let jnvls = e['id']
                let row_jnvls = document.createElement('td');
                row_jnvls.setAttribute('data-field', 'name')
                row_jnvls.innerHTML = jnvls;
                row.appendChild(row_jnvls)


                let edit_button = document.createElement('button')
                edit_button.setAttribute('class', 'btn btn-primary fs-14 text-white edit-icn')
                edit_button.innerHTML = 'Изменить'

                let row_button = document.createElement('td')
                row_button.appendChild(edit_button)

                edit_button.onclick = () => editRowAnalog(edit_button)

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
                del_button.onclick = () => delete_row_analog(td)

                if (count % 2 == 0) {
                    row.setAttribute('class', 'even')
                } else {
                    row.setAttribute('class', 'odd')
                }
                count++
            })
        })
}


window.onload = getCreatTableAnalog();

function delete_row_analog(td) {

    tr = td.parentElement
    console.log(tr.id)

    fetch('http://192.168.1.186:8080/soletrader/' + tr.id, { method: 'DELETE' })

    tr.remove()
    console.log('qwrqwrqw')
}

function editRowAnalog(button_nom) {
    // получаем строку таблицы, в которой находится кнопка
    var row = button_nom.parentNode.parentNode;
    // получаем ячейки со значениями
    var productName = row.cells[0].textContent;
    var id = row.cells[1].textContent;
    var edit_button = row.cells[2].textContent;
    // создаем инпуты для изменения значений
    var productNameInput = document.createElement("input");
    productNameInput.type = "text";
    productNameInput.value = productName;
    var idInput = document.createElement("input");
    idInput.type = "text";
    idInput.value = id;
    // заменяем значения ячеек на инпуты
    row.cells[0].innerHTML = "";
    row.cells[0].appendChild(productNameInput);
    row.cells[1].innerHTML = "";
    row.cells[1].appendChild(idInput);
    // заменяем кнопку на кнопки "Сохранить" и "Отмена"
    button_nom.textContent = "Сохранить";
    button_nom.onclick = function() { saveRowAnalog(this); };
}

function saveRowAnalog(button_nom) {
    // получаем строку таблицы, в которой находится кнопка
    var row = button_nom.parentNode.parentNode;
    // получаем значения из инпутов
    var newproductNameInput = row.cells[0].childNodes[0].value;
    var newidInput = row.cells[1].childNodes[0].value;
    // заменяем инпуты на значения
    row.cells[0].innerHTML = newproductNameInput;
    row.cells[1].innerHTML = newidInput;

    let data = { "productName": newproductNameInput, "id": newidInput }
    if (data['productName'] != '' && data['id'] != '') {
        console.log(row.id)

        fetch('http://192.168.1.186:8080/soletrader/' + row.id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })

    }
    // заменяем кнопки "Сохранить" и "Отмена" на кнопку "Изменить"
    button_nom.textContent = "Изменить";
    button_nom.onclick = function() { editRowAnalog(this); };
    row.cells[3].innerHTML = '<button onclick="editRowAnalog(this)">Изменить</button>';
}
// Конец отрисовки таблицы АНАЛОГ