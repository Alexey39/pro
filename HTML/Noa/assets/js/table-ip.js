function getCreatTableIP() {
    return fetch("http://192.168.1.221:8080/soletrader/all")
        .then((res) => res.text())
        .then((data) => {
            data = JSON.parse(data)
            let count = 1
            const delet = "Удалить";
            data.forEach(e => {
                let ip_table = document.querySelector('#ip_table')

                let row = document.createElement('tr')
                row.setAttribute('id', e['id'])
                row.setAttribute('data-id', e['id']);
                row.setAttribute('style', 'cursor: pointer;')

                let ip_name = e['organization_name']
                let row_name = document.createElement('td');
                row_name.setAttribute('data-field', 'name');
                row_name.setAttribute('class', 'sorting_1')
                row_name.innerHTML = ip_name;
                row.appendChild(row_name);


                let ip_ogrnip = e['ogrnip']
                let row_ogrnip = document.createElement('td');
                row_ogrnip.setAttribute('data-field', 'name')
                row_ogrnip.innerHTML = ip_ogrnip;
                row.appendChild(row_ogrnip)

                let ip_inn = e['inn']
                let row_inn = document.createElement('td');
                row_inn.setAttribute('data-field', 'name')
                row_inn.innerHTML = ip_inn;
                row.appendChild(row_inn);

                let ip_number = e['accountNumber']
                let row_number = document.createElement('td');
                row_number.setAttribute('data-field', 'name')
                row_number.innerHTML = ip_number;
                row.appendChild(row_number);

                let ip_type = e['accountType']
                let row_type = document.createElement('td');
                row_type.setAttribute('data-field', 'name')
                row_type.innerHTML = ip_type;
                row.appendChild(row_type)

                let ip_bank = e['bankBik']
                let row_bank = document.createElement('td');
                row_bank.setAttribute('data-field', 'name')
                row_bank.innerHTML = ip_bank;
                row.appendChild(row_bank);


                ip_table.appendChild(row)

                if (count % 2 == 0) {
                    row.setAttribute('class', 'even')
                } else {
                    row.setAttribute('class', 'odd')
                }
                count++
            })
        })
}


window.onload = getCreatTableIP();
