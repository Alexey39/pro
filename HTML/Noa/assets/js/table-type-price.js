function getCreateTableTypePrice() {
    return fetch("http://192.168.1.7:8080/")
        .then((res) => res.text())
        .then((data) => {
            data = JSON.parse(data)
            let count = 1;
            const delet = "Удалить";
            data.forEach(e => {
                let table_type_price = document.querySelector('#table_type_price');

                let row = document.createElement('tr')
                row.setAttribute('id', e['id'])
                row.setAttribute('data-id', e['id'])
                row.setAttribute('style', 'cursor: pointer;')

                let name = e[''];
                let row_name = document.createElement('td');
                let link = document.createElement('button');
                row_name.setAttribute('data-field', 'name')
                row_name.setAttribute('class', 'sorting_1')
                link.innerHTML = name;
                link.setAttribute('id', '' + e['id'])
                link.onclick = () => transer_type_price(link)

                row_name.appendChild(link)
                row.appendChild(row_name);

                let pricing = e[''];
                let row_pricing = document.createElement('td');
                row_pricing.setAttribute('data-field', 'name')
                row_pricing.innerHTML = pricing;
                row.appendChild(row_pricing)

                let onforsale = e[''];
                let row_onforsale = document.createElement('td');
                row_onforsale.setAttribute('data-field', 'name')
                row_onforsale.innerHTML = onforsale;
                row.appendChild(row_onforsale)

                let delete_button = document.createElement('button')
                delete_button.innerHTML = delet
                delete_button.setAttribute('class', 'btn btn-primary fs-14 text-white edit-icn')
                delete_button.setAttribute('id', 'trdelRow')

                let row_del = document.createElement('td')
                row_del.appendChild(delete_button)

                row.appendChild(row_del)

                table_type_price.appendChild(row)

                let td = delete_button.parentElement
                delete_button.onclick = () => delete_row(td)

                if (count % 2 == 0) {
                    row.setAttribute('class', 'even')
                } else {
                    row.setAttribute('class', 'odd')
                }
                count++
            })
        })
}

window.onload = getCreateTableTypePrice();

function delete_row(td) {
    tr = td.parentElement
    console.log(tr.id)

    fetch('http://192.168.1.7:8080//' + tr.id, { method: 'DELETE' })

    tr.remove()
    console.log('qwrqwrqw')
}

function transer_type_price(text) {
    fetch("http://192.168.1.7:8080//" + text.id, { method: 'GET' })
        .then((res) => res.text())
        .then((data) => {
            localStorage.setItem('typePrice', data);

            window.location = 'create-vid.html';
        });
}