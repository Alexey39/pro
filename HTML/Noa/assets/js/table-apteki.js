function getCreatTableApteki() {
    return fetch("http://192.168.1.221:8080/pharmacy/all")
        .then((res) => res.text())
        .then((data) => {
            data = JSON.parse(data)
            let count = 1
            const delet = "Удалить";
            data.forEach(e => {
                let apteki_table = document.querySelector('#apteki_table')
                console.log(e)

                let row = document.createElement('tr')
                row.setAttribute('id', e['id'])
                row.setAttribute('data-id', e['id']);
                row.setAttribute('style', 'cursor: pointer;')

                let apteki_name = e['pharmacyName']
                let row_name = document.createElement('td');
                let link = document.createElement('button');
                row_name.setAttribute('data-field', 'name');
                row_name.setAttribute('class', 'sorting_1')
                link.innerHTML = apteki_name;
                link.setAttribute('id', '' + e['id'])
                link.onclick = () => transer_editable();

                row_name.appendChild(link);
                row.appendChild(row_name);


                let apteki_adres = e['address']
                let row_adres = document.createElement('td');
                row_adres.setAttribute('data-field', 'name')
                row_adres.innerHTML = apteki_adres;
                row.appendChild(row_adres)

                let apteki_organization = e['organization']
                let row_organization = document.createElement('td');
                row_organization.setAttribute('data-field', 'name')
                row_organization.innerHTML = apteki_organization;
                row.appendChild(row_organization);

                let apteki_phone = e['phone']
                let row_phone = document.createElement('td');
                row_phone.setAttribute('data-field', 'name')
                row_phone.innerHTML = apteki_phone;
                row.appendChild(row_phone)

                let apteki_schedule = e['schedule']
                let row_schedule = document.createElement('td');
                row_schedule.setAttribute('data-field', 'name')
                row_schedule.innerHTML = apteki_schedule;
                row.appendChild(row_schedule);

                let apteki_status = e['status']
                let row_status = document.createElement('td');
                row_status.setAttribute('data-field', 'name')
                row_status.innerHTML = apteki_status;
                row.appendChild(row_status);



                let edit_button = document.createElement('button')
                edit_button.setAttribute('class', 'btn btn-primary fs-14 text-white edit-icn')
                edit_button.innerHTML = 'Изменить'

                let row_button = document.createElement('td')
                row_button.appendChild(edit_button)

                edit_button.onclick = () => editRow(edit_button)

                row.appendChild(row_button)

                let del_button = document.createElement('button')
                del_button.innerHTML = delet
                del_button.setAttribute('class', 'btn btn-primary fs-14 text-white edit-icn')
                del_button.setAttribute('id', 'aptekidelRow')

                let row_del = document.createElement('td')
                row_del.appendChild(del_button)

                row.appendChild(row_del)

                apteki_table.appendChild(row)

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


window.onload = getCreatTableApteki();


function delete_row(td) {

    tr = td.parentElement
    console.log(tr.id)

    fetch('http://192.168.1.186:8080/pharmacy/' + tr.id, { method: 'DELETE' })

    tr.remove()
    console.log('qwrqwrqw')
}

function transer_editable(text) {
    fetch("http://192.168.1.7:8080/pharmacy/" + text.id, { method: 'GET' })
        .then((res) => res.text())
        .then((data) => {
            localStorage.setItem('pharmacy', data);

            window.location = 'table-editable-form.html';
        });
}


/*
function editRow(button) {
    // получаем строку таблицы, в которой находится кнопка
    var row = button.parentNode.parentNode;
    // получаем ячейки со значениями
    var pharmacy_name = row.cells[0].textContent;
    var address = row.cells[1].textContent;
    var organization = row.cells[2].textContent;
    var coordinates = row.cells[3].textContent;
    var phone = row.cells[4].textContent;
    var schedule = row.cells[5].textContent;
    var status = row.cells[6].textContent;
    var edit_button = row.cells[7].textContent;
    // создаем инпуты для изменения значений
    var pharmacy_nameInput = document.createElement("input");
    pharmacy_nameInput.type = "text";
    pharmacy_nameInput.value = pharmacy_name;
    var addressInput = document.createElement("input");
    addressInput.type = "text";
    addressInput.value = address;
    var organizationInput = document.createElement("input");
    organizationInput.type = "text";
    organizationInput.value = organization;
    var coordinatesInput = document.createElement("input");
    coordinatesInput.type = "text";
    coordinatesInput.value = coordinates;
    var phoneInput = document.createElement("input");
    phoneInput.type = "text";
    phoneInput.value = phone;
    var scheduleInput = document.createElement("input");
    scheduleInput.type = "text";
    scheduleInput.value = schedule;
    var statusInput = document.createElement("input");
    statusInput.type = "text";
    statusInput.value = status;
    // заменяем значения ячеек на инпуты
    row.cells[0].innerHTML = "";
    row.cells[0].appendChild(pharmacy_nameInput);
    row.cells[1].innerHTML = "";
    row.cells[1].appendChild(addressInput);
    row.cells[2].innerHTML = "";
    row.cells[2].appendChild(organizationInput);
    row.cells[3].innerHTML = "";
    row.cells[3].appendChild(coordinatesInput);
    row.cells[4].innerHTML = "";
    row.cells[4].appendChild(phoneInput);
    row.cells[5].innerHTML = "";
    row.cells[5].appendChild(scheduleInput);
    row.cells[6].innerHTML = "";
    row.cells[6].appendChild(statusInput);
    // заменяем кнопку на кнопки "Сохранить" и "Отмена"
    button.textContent = "Сохранить";
    button.onclick = function() { saveRow(this); };
}

function saveRow(button) {
    // получаем строку таблицы, в которой находится кнопка
    var row = button.parentNode.parentNode;
    // получаем значения из инпутов
    var newPharmacy_nameInput = row.cells[0].childNodes[0].value;
    var newAddressInput = row.cells[1].childNodes[0].value;
    var newOrganizationInput = row.cells[2].childNodes[0].value;
    var newCoordinatesInput = row.cells[3].childNodes[0].value;
    var newPhoneInput = row.cells[4].childNodes[0].value;
    var newScheduleInput = row.cells[5].childNodes[0].value;
    var newStatusInput = row.cells[6].childNodes[0].value;
    // заменяем инпуты на значения
    row.cells[0].innerHTML = newPharmacy_nameInput;
    row.cells[1].innerHTML = newAddressInput;
    row.cells[2].innerHTML = newOrganizationInput;
    row.cells[3].innerHTML = newCoordinatesInput;
    row.cells[4].innerHTML = newPhoneInput;
    row.cells[5].innerHTML = newScheduleInput;
    row.cells[6].innerHTML = newStatusInput;

    let data = { "pharmacy_name": newPharmacy_nameInput, "address": newAddressInput, "organization": Number(newOrganizationInput), "coordinates": newCoordinatesInput, "phone": newPhoneInput, "schedule": newScheduleInput, "status": newStatusInput }
    if (data['pharmacy_name'] != '' && data['address'] != '' && data['organization'] != '' && data['coordinates'] != '' && data['phone'] != '' && data['status'] != '') {

        console.log(row.id)

        fetch('http://192.168.1.186:8080/pharmacy/' + row.id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
    } else {
        alert('Заполните все поля')
    }
    // заменяем кнопки "Сохранить" и "Отмена" на кнопку "Изменить"
    button.textContent = "Изменить";
    button.onclick = function() { editRow(this); };
    row.cells[3].innerHTML = '<button onclick="editRow(this)">Изменить</button>';
}

*/

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