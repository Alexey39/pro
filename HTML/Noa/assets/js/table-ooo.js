function getCreatTableOOO() {
    return fetch("http://192.168.1.221:8080/organization/all").then((res) => res.text()).then((data) => {
        data = JSON.parse(data)
        let count = 1
        const delet = "Удалить"
        console.log(data)
        data.forEach(e => {
            let ooo_table = document.querySelector('#ooo_table')

            let row = document.createElement('tr')
            row.setAttribute('id', e['id'])
            row.setAttribute('data-id', e['id']);
            row.setAttribute('style', 'cursor: pointer;')


            let ooo_orgname = e['organizationName']
            let row_orgname = document.createElement('td');
            let link = document.createElement('button');
            row_orgname.setAttribute('data-field', 'name');
            row_orgname.setAttribute('class', 'sorting_1');
            link.innerHTML = ooo_orgname;
            link.setAttribute('id', '' + e['id']);
            link.onclick = () => transer_ooo_card(link);

            row_orgname.appendChild(link);
            row.appendChild(row_orgname);

            let ooo_shortname = e['shortname']
            let row_sortname = document.createElement('td');
            row_sortname.innerHTML = ooo_shortname;
            row.appendChild(row_sortname)

            let ooo_inn = e['inn']
            let row_inn = document.createElement('td');
            row_inn.innerHTML = ooo_inn;
            row.appendChild(row_inn)

            let ooo_number = e['registrationNumber']
            let row_number = document.createElement('td');
            row_number.innerHTML = ooo_number;
            row.appendChild(row_number);

            let ooo_kpp = e['kpp']
            let row_kpp = document.createElement('td');
            row_kpp.innerHTML = ooo_kpp;
            row.appendChild(row_kpp);

            let ooo_ifns = e['ifnsCode']
            let row_ifns = document.createElement('td');
            row_ifns.innerHTML = ooo_ifns;
            row.appendChild(row_ifns)

            let ooo_data = e['data']
            let row_data = document.createElement('td');
            row_data.innerHTML = ooo_data;
            row.appendChild(row_data);

            let ooo_passport = e['passport']
            let row_passport = document.createElement('td');
            row_passport.innerHTML = ooo_passport;
            row.appendChild(row_passport);

            let ooo_adres = e['legalAddress']
            let row_adres = document.createElement('td');
            row_adres.innerHTML = ooo_adres;
            row.appendChild(row_adres);

            ooo_table.appendChild(row)

            if (count % 2 == 0) {
                row.setAttribute('class', 'even')
            } else {
                row.setAttribute('class', 'odd')
            }
            count++
        })

    })
}

window.onload = getCreatTableOOO();

function transer_ooo_card(text) {
    fetch("http://192.168.1.221:8080/organization/all" + text.id, { method: 'GET' })
        .then((res) => res.text())
        .then((data) => {
            localStorage.setItem('ooo', data);

            window.location = 'oooTable-form.html';
        });
}