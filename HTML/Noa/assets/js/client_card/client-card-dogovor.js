//Заполнение таблицы с ДОГОВОРАМИ
function getCreateTableTeaty() {
    return fetch("http://192.168.1.221:8080/treaty/all")
        .then((res) => res.text())
        .then((data) => {
            data = JSON.parse(data)
            let count = 1
            const delet = "Удалить";
            data.forEach(e => {
                let treaty_table = document.querySelector('#treaty_list')

                let row = document.createElement('tr')
                row.setAttribute('id', e['id'])
                row.setAttribute('data-id', e['id'])
                row.setAttribute('style', 'cursor: pointer;')

                let dogovor_treaty = e['treatyNumber']
                let row_treaty = document.createElement('td');
                let link = document.createElement('button')
                row_treaty.setAttribute('data-field', 'name')
                row_treaty.setAttribute('class', 'sorting_1')
                link.innerHTML = dogovor_treaty;
                link.setAttribute('id', '' + e['id'])
                link.onclick = () => transer_treaty_card(link)

                row_treaty.appendChild(link)
                row.appendChild(row_treaty);


                let dogovor_type_of_contract = e['treatyType']
                let row_contract = document.createElement('td');
                row_contract.setAttribute('data-field', 'name')
                row_contract.innerHTML = dogovor_type_of_contract;
                console.log(dogovor_type_of_contract)
                row.appendChild(row_contract)

                let dogovor_by_default = e['isDefault'];
                let row_default = document.createElement('td')
                row_default.setAttribute('data-field', 'name')
                row_default.innerHTML = dogovor_by_default ? "да" : "нет";

                row.appendChild(row_default)

                let dogovor_block = e['isBlock']
                let row_block = document.createElement('td')
                row_block.setAttribute('data-field', 'name')
                row_block.innerHTML = dogovor_block ? "да" : "нет";
                row.appendChild(row_block)

                let delete_button = document.createElement('button')
                delete_button.innerHTML = delet
                delete_button.setAttribute('class', 'btn btn-primary fs-14 text-white edit-icn')
                delete_button.setAttribute('id', 'trdelRow')

                let row_del = document.createElement('td')
                row_del.appendChild(delete_button)

                row.appendChild(row_del)

                treaty_table.appendChild(row)

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

window.onload = getCreateTableTeaty();

function delete_row(td) {
    tr = td.parentElement
    console.log(tr.id)

    fetch('http://192.168.1.221:8080/treaty/' + tr.id, { method: 'DELETE' })

    tr.remove()
    console.log('qwrqwrqw')
}

function transer_treaty_card(text) {
    fetch("http://192.168.1.221:8080/treaty/" + text.id, { method: 'GET' })
        .then((res) => res.text())
        .then((data) => {
            localStorage.setItem('treaty', data);


        });
}