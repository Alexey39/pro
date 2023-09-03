//GET запрос на отрисовку изготовителей
function getOptionManufacturer() {
    return fetch("http://192.168.1.186:8080/manufacturer/all")
        .then((res) => res.text())
        .then((data) => {
            data = JSON.parse(data);
            data.forEach(e => {
                let substance = document.querySelector("selectionManufacturers");
                let option = document.createElement("option");

                option.setAttribute('id', e['id'])
                option.setAttribute('data-id', e['id'])
                option.innerHTML = e['manufactureName']
                substance.appendChild(option)
            })
        })
}

window.onload = getOptionManufacturer()

function getOptionType() {
    return fetch("http://192.168.1.186:8080/type/all")
        .then((res) => res.text())
        .then((data) => {
            data = JSON.parse(data);
            data.forEach(e => {
                let substance = document.querySelector("view_cap");
                let option = document.createElement("option");

                option.setAttribute('id', e['id'])
                option.setAttribute('data-id', e['id'])
                option.innerHTML = e['typeName']
                substance.appendChild(option)
            })
        })
}

window.onload = getOptionType()

function getOptionSubype() {
    return fetch("http://192.168.1.186:8080/type/" + id + "/subtype")
        .then((res) => res.text())
        .then((data) => {
            data = JSON.parse(data);
            data.forEach(e => {
                let substance = document.querySelector("pview_cap");
                let option = document.createElement("option");

                option.setAttribute('id', e['id'])
                option.setAttribute('data-id', e['id'])
                option.innerHTML = e['subtypeName']
                substance.appendChild(option)
            })
        })
}

window.onload = getOptionSubype()