//Заполнение таблицы с ОБМЕНОВ ДАННЫХ

function getCreateTableData() {
    return fetch("http://192.168.1.221:8080/provider/all")
        .then((res) => res.text())
        .then((data) => {
            data = JSON.parse(data)
            let count = 1
            const delet = "Удалить";
            const edit = "Изменить";
            data.forEach(e => {
                let data_table = document.querySelector('#list-data')

                let row = document.createElement('tr')
                row.setAttribute('id', e['id'])
                row.setAttribute('data-id', e['id']);
                row.setAttribute('style', 'cursor:pointer;')

                let data_type_price = e['type_price']
                let row_price = document.createElement('td')
                row_price.setAttribute('data-field', 'name')
                row_price.setAttribute('class', 'sorting_1')
                row_price.innerHTML = data_type_price;
                row.appendChild(row_price)

                let data_update_data = e['update_data']
                let row_update = document.createElement('td')
                row_update.setAttribute('data-field', 'name')
                row_update.innerHTML = data_update_data;
                row.appendChild(row_update)

                let data_shipment_block = e['shipment_block']
                let row_shipment = document.createElement('td')
                row_shipment.setAttribute('data-field', 'name')
                row_shipment.innerHTML = data_shipment_block;
                row.appendChild(row_shipment)


                let edit_button = document.createElement('button')
                edit_button.setAttribute('class', 'btn btn-primary fs-14 text-white edit-icn')
                edit_button.innerHTML = 'Изменить'

                let row_button = document.createElement('td')
                row_button.appendChild(edit_button)

                edit_button.onclick = () => editRowData(edit_button)

                row.appendChild(row_button)

                let del_button = document.createElement('button')
                del_button.innerHTML = delet
                del_button.setAttribute('class', 'btn btn-primary fs-14 text-white edit-icn')
                del_button.setAttribute('id', 'ipdelRow')

                let row_del = document.createElement('td')
                row_del.appendChild(del_button)

                row.appendChild(row_del)

                data_table.appendChild(row)

                let td = del_button.parentElement
                del_button.onclick = () => delete_row(td)

                if (count % 2 == 0) {
                    row.setAttribute('class', 'even')
                } else {
                    row.setAttribute('class', 'odd')
                }
                count++
            })
        })
}

window.onload = getCreateTableData();


function delete_row(td) {

    tr = td.parentElement
    console.log(tr.id)

    fetch('http://192.168.1.221:8080/provider/' + tr.id, { method: 'DELETE' })

    tr.remove()
    console.log('qwrqwrqw')
}

function editRowData(button_data) {
    var row = button_data.parentNode.parentNode;

    var type_price = row.cells[0].textContent;
    var update_data = row.cells[1].textContent;
    var shipment_block = row.cells[2].textContent;
    var edit_button = row.cells[3].textContent;

    var type_price_input = document.createElement("input");
    type_price_input.type = "text";
    type_price_input.value = type_price;

    var update_data_input = document.createElement("input");
    update_data_input.type = "text";
    update_data_input.value = update_data;

    var shipment_block_input = document.createElement("input");
    shipment_block_input.type = "text";
    shipment_block_input.value = shipment_block;

    row.cells[0].innerHTML = "";
    row.cells[0].appendChild(type_price_input);
    row.cells[1].innerHTML = "";
    row.cells[1].appendChild(update_data_input);
    row.cells[2].innerHTML = "";
    row.cells[2].appendChild(shipment_block_input);

    button_data.textContent = "Сохранить";
    button_data.onclick = function() { saveRowData(this); };
}

function saveRowData(button_data) {
    var row = button_data.parentNode.parentNode;

    var new_type_price_input = row.cells[0].childNodes[0].value;
    var new_update_data_input = row.cells[1].childNodes[0].value;
    var new_shipment_block_input = row.cells[2].childNodes[0].value;

    row.cells[0].innerHTML = new_type_price_input;
    row.cells[1].innerHTML = new_update_data_input;
    row.cells[2].innerHTML = new_shipment_block_input;

    let data = { "": new_type_price_input, "": new_update_data_input, "": new_shipment_block_input };
    if (data[''] != '' && data[''] != '' && data[''] != '') {
        console.log(row.id);

        fetch('http://192.168.1.221:8080/provider/' + row.id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
    }

    button_data.textContent = "Изменить";
    button_data.onclick = function() { editRowData(this); };
    //??
    row.cells[3].innerHTML = '<button onclick="editRowData(this)">Изменить</button>';
}