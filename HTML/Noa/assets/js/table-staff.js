function getCreatTableStaff() {
    return fetch("http://192.168.1.221:8080/user/all")
        .then((res) => res.text())
        .then((data) => {
            data = JSON.parse(data)
            let count = 1
            const delet = "Удалить"
            console.log(data)
            data.forEach(e => {
                let staff_table = document.querySelector('#satff-table')

                let row = document.createElement('tr')
                row.setAttribute('id', e['id'])
                row.setAttribute('data-id', e['id']);
                row.setAttribute('style', 'cursor: pointer;')


                let organization = e['organization']
                let row_organization = document.createElement('td');
                row_organization.innerHTML = organization;
                row.appendChild(row_organization);

                let number = e['tabNumber']
                let row_number = document.createElement('td');
                let link_number = document.createElement('button');
                link_number.innerHTML = staff_number;
                link_number.setAttribute('id', e['id']);
                link_onclick = () => transer_staff(link_number)

                row_number.appendChild(link_number);
                row.appendChild(row_number);


                let surname = e['lastName']
                let row_surname = document.createElement('td');
                row_surname.innerHTML = staff_surname;
                row.appendChild(row_surname)

                let name = e['firstName']
                let row_name = document.createElement('td');
                row_name.innerHTML = staff_name;
                row.appendChild(row_name);

                let patronymic = e['patronymic']
                let row_patronymic = document.createElement('td');
                row_patronymic.innerHTML = staff_patronymic;
                row.appendChild(row_patronymic);

                let data_birth = e['dateOfBirth']
                let row_data_birth = document.createElement('td');
                row_data_birth.innerHTML = staff_data_birth;
                row.appendChild(row_data_birth)

                let pol = e['gender']
                let row_pol = document.createElement('td');
                row_pol.innerHTML = staff_pol;
                row.appendChild(row_pol);

                let subdivision = e['Subdivision']
                let row_subdivision = document.createElement('td');
                row_subdivision.innerHTML = staff_subdivision;
                row.appendChild(row_subdivision);

                let job_title = e['roles']
                let row_job_title = document.createElement('td');
                row_job_title.innerHTML = staff_job_title;
                row.appendChild(row_job_title);

                let data = e['registrationData']
                let row_data = document.createElement('td');
                row_data.innerHTML = staff_data;
                row.appendChild(row_data);


                let edit_button = document.createElement('button')
                edit_button.setAttribute('class', 'btn btn-primary fs-14 text-white edit-icn')
                edit_button.setAttribute('id', 'delRow')

                let row_button = document.createElement('td')
                row_button.appendChild(edit_button)

                edit_button.onclick = () => editRow(edit_button)

                row.appendChild(row_button)

                let del_button = document.createElement('button')
                del_button.innerHTML = delet
                del_button.setAttribute('class', 'btn btn-primary fs-14 text-white edit-icn')
                del_button.setAttribute('id', 'staffdelRow')

                let row_del = document.createElement('td')
                row_del.appendChild(del_button)

                row.appendChild(row_del)

                staff_table.appendChild(row)

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
window.onload = getCreatTableStaff();

function delete_row(td) {

    tr = td.parentElement
    console.log(tr.id)

    fetch('http://192.168.1.221:8080/user/' + tr.id, { method: 'DELETE' })

    tr.remove()
    console.log('qwrqwrqw')
}

function transer_staff(text) {
    fetch('http://192.168.1.221:8080/user/' + text.id, { method: 'GET' })
        .then((res) => res.text())
        .then((data) => {
            localStorage.setItem('staff', data);

            window.location = 'table_-staff-form.html';
        })
}

/*
function editRow(button) {
    // получаем строку таблицы, в которой находится кнопка
    var row = button.parentNode.parentNode;
    // получаем ячейки со значениями
    var organization = row.cells[0].textContent;
    var number = row.cells[1].textContent;
    var surname = row.cells[2].textContent;
    var name = row.cells[3].textContent;
    var patronymic = row.cells[4].textContent;
    var data_birth = row.cells[5].textContent;
    var pol = row.cells[6].textContent;
    var subdivision = row.cells[7].textContent;
    var job_title = row.cells[8].textContent;
    var data = row.cells[9].textContent;
    var edit_button = row.cells[10].textContent;
    // создаем инпуты для изменения значений
    var organizationInput = document.createElement("input");
    organizationInput.type = "text";
    organizationInput.value = organization;

    var numberInput = document.createElement("input");
    numberInput.type = "text";
    numberInput.value = number;

    var surnameInput = document.createElement("input");
    surnameInput.type = "text";
    surnameInput.value = surname;

    var nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.value = name;

    var patronymicInput = document.createElement("input");
    patronymicInput.type = "text";
    patronymicInput.value = patronymic;

    var data_birthInput = document.createElement("input");
    data_birthInput.type = "text";
    data_birthInput.value = data_birth;

    var polInput = document.createElement("input");
    polInput.type = "text";
    polInput.value = pol;

    var subdivisionInput = document.createElement("input");
    subdivisionInput.type = "text";
    subdivisionInput.value = subdivision;

    var job_titleInput = document.createElement("input");
    job_titleInput.type = "text";
    job_titleInput.value = job_title;

    var dataInput = document.createElement("input");
    dataInput.type = "text";
    dataInput.value = data;
    // заменяем значения ячеек на инпуты
    row.cells[0].innerHTML = "";
    row.cells[0].appendChild(organizationInput);
    row.cells[1].innerHTML = "";
    row.cells[1].appendChild(numberInput);
    row.cells[2].innerHTML = "";
    row.cells[2].appendChild(surnameInput);
    row.cells[3].innerHTML = "";
    row.cells[3].appendChild(nameInput);
    row.cells[4].innerHTML = "";
    row.cells[4].appendChild(patronymicInput);
    row.cells[5].innerHTML = "";
    row.cells[5].appendChild(data_birthInput);
    row.cells[6].innerHTML = "";
    row.cells[6].appendChild(polInput);
    row.cells[7].innerHTML = "";
    row.cells[7].appendChild(subdivisionInput);
    row.cells[8].innerHTML = "";
    row.cells[8].appendChild(job_titleInput);
    row.cells[9].innerHTML = "";
    row.cells[9].appendChild(dataInput);
    // заменяем кнопку на кнопки "Сохранить" и "Отмена"
    button.textContent = "Сохранить";
    button.onclick = function() { saveRow(this); };
}

function saveRow(button) {
    // получаем строку таблицы, в которой находится кнопка
    var row = button.parentNode.parentNode;
    // получаем значения из инпутов
    var newOrganizationInput = row.cells[0].childNodes[0].value;
    var newNumberInput = row.cells[1].childNodes[0].value;
    var newSurnameInput = row.cells[2].childNodes[0].value;
    var newNameInput = row.cells[3].childNodes[0].value;
    var newPatronymicInput = row.cells[4].childNodes[0].value;
    var newData_birthInput = row.cells[5].childNodes[0].value;
    var newPolInput = row.cells[6].childNodes[0].value;
    var newSubdivisionInput = row.cells[7].childNodes[0].value;
    var newOb_titleInput = row.cells[8].childNodes[0].value;
    var newDataInput = row.cells[9].childNodes[0].value;
    // заменяем инпуты на значения
    row.cells[0].innerHTML = newOrganizationInput;
    row.cells[1].innerHTML = newNumberInput;
    row.cells[2].innerHTML = newSurnameInput;
    row.cells[3].innerHTML = newNameInput;
    row.cells[4].innerHTML = newPatronymicInput;
    row.cells[5].innerHTML = newData_birthInput;
    row.cells[6].innerHTML = newPolInput;
    row.cells[7].innerHTML = newSubdivisionInput;
    row.cells[8].innerHTML = newOb_titleInput;
    row.cells[8].innerHTML = newDataInput;

    let data = { "organization": organization, "tab_number": number, "last_name": surname, "first_name": name, "patronymic": patronymic, "date_of_birth": data_birth, "gender": pol, "Subdivision": subdivision, "roles": job_title, "registration_data": data_job, "user_identifier": email, "password": password, "phone": phone }
    if (data['organization'] != '' && data['tab_number'] != '' && data['last_name'] != '' && data['first_name'] != '' && data['patronymic'] != '' && data['date_of_birth'] != '' && data['gender'] != '' && data['Subdivision'] != '' && data['roles'] != '' && data['registration_data'] != '' && data['user_identifier'] != '' && data['password'] != '' && data['phone'] != '') {
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
    button.textContent = "Изменить";
    button.onclick = function() { editRow(this); };
    row.cells[3].innerHTML = '<button onclick="editRow(this)">Изменить</button>';
}
*/