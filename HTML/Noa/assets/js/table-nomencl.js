function getCreatTableNom() {
    return fetch("http://192.168.1.221:8080/product/all")
        .then((res) => res.text())
        .then((data) => {
            data = JSON.parse(data)
            console.log('123123')
            let count = 1
            const delet = "Удалить";
            data.forEach(e => {
                console.log("412421")
                let nomenkla_table = document.querySelector('#nomenkla_table')

                let row = document.createElement('tr')
                row.setAttribute('id', e['id'])
                row.setAttribute('data-id', e['id']);
                row.setAttribute('style', 'cursor: pointer;')

                let name = e['productName']
                let row_name = document.createElement('td');
                let link = document.createElement('button')
                row_name.setAttribute('data-field', 'name');
                row_name.setAttribute('class', 'sorting_1')
                link.innerHTML = name;
                link.setAttribute('id', '' + e['id'])
                link.onclick = () => transfer(link)


                row_name.appendChild(link)
                row.appendChild(row_name);


                let jnvls = e['vitalNecessity']
                let row_jnvls = document.createElement('td');
                row_jnvls.setAttribute('data-field', 'name')
                row_jnvls.innerHTML = jnvls;
                row.appendChild(row_jnvls)

                let vsego = e['total']
                let row_vsego = document.createElement('td');
                row_vsego.setAttribute('data-field', 'name')
                row_vsego.innerHTML = vsego;
                row.appendChild(row_vsego);

                let ostatok = e['free']
                let row_ostatok = document.createElement('td');
                row_ostatok.setAttribute('data-field', 'name')
                row_ostatok.innerHTML = ostatok;
                row.appendChild(row_ostatok);

                let rezerv = e['reserve']
                let row_rezerv = document.createElement('td');
                row_rezerv.setAttribute('data-field', 'name')
                row_rezerv.innerHTML = rezerv;
                row.appendChild(row_rezerv)

                let kod = e['id']
                let row_kod = document.createElement('td');
                row_kod.setAttribute('data-field', 'name')
                row_kod.setAttribute('name', 'transfer_kod')
                row_kod.innerHTML = kod;
                row.appendChild(row_kod);


                let del_button = document.createElement('button')
                del_button.innerHTML = delet
                del_button.setAttribute('class', 'btn btn-primary fs-14 text-white edit-icn')
                del_button.setAttribute('id', 'nomendelRow')

                let row_del = document.createElement('td')
                row_del.appendChild(del_button)

                row.appendChild(row_del)

                nomenkla_table.appendChild(row)

                let td = del_button.parentElement
                del_button.onclick = () => delete_Nom(td)

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

window.onload = getCreatTableNom();

function delete_Nom(td) {

    tr = td.parentElement
    console.log(tr.id)

    fetch('http://192.168.1.221:8080/product/' + tr.id, { method: 'DELETE' })

    tr.remove()
    console.log('qwrqwrqw')
}

function transfer(text) {
    fetch("http://192.168.1.221:8080/product/" + text.id, { method: 'GET' })
        .then((res) => res.text())
        .then((data) => {

            localStorage.setItem('product', data);

            window.location = 'nomenk-card.html'
        })


    // {



    //     if (res.status === 200) {
    //         


    //         getInput(text.id)
    //     }
    // });
}