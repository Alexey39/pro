function getCreateTableClient() {
    return fetch("https://192.168.1.221:8080/provider/all")
        .then(res => res.json())
        .then(data => {
            data = JSON.parse(data)
            console.log('32123')
            let count = 1
            const delet = "Удалить";
            data.forEach(e => {
                console.log('dssfa')
                let client_table = document.querySelector('#client_card_table')

                let row = document.createElement('tr')
                row.setAttribute('id', e['id']);
                row.setAttribute('data-id', e['id']);
                row.setAttribute('style', 'cursor: pointer;')

                let type_client = e['client_type'];
                let row_type_client = document.createElement('td');
                row_type_client.setAttribute('data-field', 'name')
                row_type_client.setAttribute('class', 'sorting_1')
                row_type_client.innerHTML = type_client;
                row.appendChild(row_type_client);

                let name = e['provider_name'];
                let link = document.createElement('button');
                let row_name = document.createElement('td');
                row_name.setAttribute('data-field', 'name')
                link.innerHTML = name;
                link.setAttribute('id', '' + e['id']);
                link.onclick = () => transfer_client(link);

                row_name.appendChild(link);
                row.appendChild(row_name);

                let fullName = e['fullName'];
                let row_fullName = document.createElement('td');
                row_fullName.setAttribute('data-field', 'name')
                row_fullName.innerHTML = fullName;
                row.appendChild(row_fullName);

                let inn = e['inn'];
                let row_inn = document.createElement('td');
                row_inn.setAttribute('data-field', 'name');
                row_inn.innerHTML = inn;
                row.appendChild(row_inn);

                let phone = e['phone'];
                let row_phone = document.createElement('td');
                row_phone.setAttribute('data-field', 'name');
                row_phone.innerHTML = phone;
                row.appendChild(row_phone);

                let bank_account = e['bank_account'];
                let row_bank_account = document.createElement('td');
                row_bank_account.setAttribute('data-field', 'name');
                row_bank_account.innerHTML = bank_account;
                row.appendChild(row_bank_account);

                let del_button = document.createElement('button');
                del_button.innerHTML = delet;
                del_button.setAttribute('class', 'btn btn-primary fs-14 text-white edit-icn');
                del_button.setAttribute('id', 'nomendelRow')

                let row_del = document.createElement('td');
                row_del.appendChild(del_button);

                row.appendChild(row_del);

                client_table.appendChild(row);

                let td = del_button.parentElement;
                del_button.onclick = () => delete_Client(td);

                if (count % 2 == 0) {
                    row.setAttribute('class', 'even')
                } else {
                    row.setAttribute('class', 'odd')
                }
                count++
            })
            console.log(data)
        })
}

window.onload = getCreateTableClient();

function delete_Client(td) {
    tr = td.parentElement;
    console.log(tr.id)

    fetch('https://192.168.1.221:8080/provider/' + tr.id, { method: 'DELETE' })

    tr.remove()
    console.log('fdgdffgf')
}

function transfer_client(text) {
    fetch("https://192.168.1.221:808/provider/" + text.id, { method: 'GET' })
        .then((res) => res.text())
        .then((data) => {
            localStorage.setItem('client-card', data);

            window.location = 'client_card2.html';
        })
}