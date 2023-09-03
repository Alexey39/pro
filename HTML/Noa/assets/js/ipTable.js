function getCreateTableIp() {
    return fetch("http://192.168.1.221:8080/soletrader/all")
        .then((res) => res.text())
        .then((data) => {
            data = JSON.parse(data);
            let count = 1;
            const delet = "Удалить";
            data.forEach(e => {
                let ip_table = document.querySelector('#ip_table');

                let row = document.createElement('tr');
                row.setAttribute('id', e['id']);
                row.setAttribute('data-id', e['id']);
                row.setAttribute('style', 'cursor:pointer;');

                let name = e[''];
                let row_name = document.createElement('td');
                let link = document.createElement('button');
                row_name.setAttribute('data-field', 'name');
                row_name.setAttribute('class', 'sorting_1');
                link.innerHTML = name;
                link.setAttribute('id', '' + e['id']);
                link.onclick = () => transer_ip_card(link);

                row_name.appendChild(link);
                row.appendChildNode(row_name);

                let ogrnip = e[''];
                let row_ogrnip = document.createElement('td');
                row_ogrnip.setAttribute('data-field', 'name');
                row_ogrnip.innerHTML = ogrnip;
                row.appendChild(row_ogrnip)

                let inn = e[''];
                let row_inn = document.createElement('td');
                row_inn.setAttribute('data-field', 'name');
                row_inn.innerHTML = inn;
                row.appendChild(row_inn);

                let number = e[''];
                let row_number = document.createElement('td');
                row_number.setAttribute('data-field', 'name');
                row_number.innerHTML = number;
                row.appendChild(row_number);

                let account_type = e[''];
                let row_account_type = document.createElement('td');
                row_account_type.setAttribute('data-field', 'name');
                row_account_type.innerHTML = account_type;
                row.appendChild(row_account_type);

                let bik = e[''];
                let row_bik = document.createElement('td');
                row_bik.setAttribute('data-field', 'name');
                row_bik.innerHTML = bik;
                row.appendChild(row_bik);


                let delete_button = document.createElement('button')
                delete_button.innerHTML = delet
                delete_button.setAttribute('class', 'btn btn-primary fs-14 text-white edit-icn')
                delete_button.setAttribute('id', 'trdelRow')

                let row_del = document.createElement('td')
                row_del.appendChild(delete_button)

                row.appendChild(row_del)

                ip_table.appendChild(row)

                let td = delete_button.parentElement
                delete_button.onclick = () => delete_row(td)

                if (count % 2 == 0) {
                    row.setAttribute('class', 'even')
                } else {
                    row.setAttribute('class', 'odd')
                }
                count++
            });
        })
}

window.onload = getCreateTableIp();

function delete_row(td) {
    tr = td.parentElement
    console.log(tr.id)

    fetch('http://192.168.1.7:8080/soletrader/all' + tr.id, { method: 'DELETE' })

    tr.remove()
    console.log('qwrqwrqw')
}

function transer_ip_card(text) {
    fetch("http://192.168.1.7:8080/soletrader/all" + text.id, { method: 'GET' })
        .then((res) => res.text())
        .then((data) => {
            localStorage.setItem('ip', data);

            window.location = 'ipTable-form.html';
        });
}