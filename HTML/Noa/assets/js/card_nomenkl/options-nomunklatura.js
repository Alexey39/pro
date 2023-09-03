//GET запрос на отрисовку действующего вещества
function getOptionSubstance() {
    return fetch("http://192.168.1.221:8080/substance/all")
        .then((res) => res.text())
        .then((data) => {
            data = JSON.parse(data);
            data.forEach(e => {
                let substance = document.querySelector("substance");
                let option = document.createElement("option");

                option.setAttribute('id', e['id'])
                option.setAttribute('data-id', e['id'])
                option.innerHTML = e['substanceName']
                substance.appendChild(option)
            })
        })
}

window.onload = getOptionSubstance()

/*
//GET запрос на отрисовку НДС в номенклатуре в основном
function getOptionNDS() {
    return fetch("http://192.168.1.225:8080/product/")
        .then((res) => res.text())
        .then((data) => {
            data = JSON.parse(data);
            data.forEach(e => {
                let opttion_nds = document.querySelector("NDS");
                let option = document.createElement("option");

                option.setAttribute('id', e['id'])
                option.setAttribute('data-id', e['id'])
                option.innerHTML = e['tax']
                opttion_nds.appendChild(option)
            })
        })
}
*/

/*
//GET запрос на отрисовку Базовой единицы в номенклатуре в Единицах измерений
function getOptionBase() {
    return fetch("http://192.168.1.225:8080/.../all")
        .then((res) => res.text())
        .then((data) => {
            data = JSON.parse(data);
            data.forEach(e => {
                let opttion_base = document.querySelector("base_unit");
                let option = document.createElement("option");

                option.setAttribute('id', e['id'])
                option.setAttribute('data-id', e['id'])
                option.innerHTML = e['']
                opttion_base.appendChild(option)
            })
        })
}
*/
/*
//GET запрос на отрисовку Единицы для продажи в номенклатуре в Единицах измерений
function getOptionSale() {
    return fetch("http://192.168.1.225:8080/.../all")
        .then((res) => res.text())
        .then((data) => {
            data = JSON.parse(data);
            data.forEach(e => {
                let opttion_sale = document.querySelector("sales_unit");
                let option = document.createElement("option");

                option.setAttribute('id', e['id'])
                option.setAttribute('data-id', e['id'])
                option.innerHTML = e['']
                opttion_sale.appendChild(option)
            })
        })
}
*/

//GET запрос на отрисовку Для фирмы в номенклатуре в АП

function getOptionAP() {
    return fetch("http://192.168.1.221:8080/pharmacy/all")
        .then((res) => res.text())
        .then((data) => {
            data = JSON.parse(data);
            data.forEach(e => {
                let opttion_ap = document.querySelector("for_company");
                let option = document.createElement("option");

                option.setAttribute('id', e['id'])
                option.setAttribute('data-id', e['id'])
                option.innerHTML = e['pharmacyName']
                opttion_ap.appendChild(option)
            })
        })
}
window.onload = getOptionAP();

/*
//GET запрос на отрисовку Для категории ценообразования в номенклатуре в Наценки
//ПОД ВОПРОСОМ
function getOptionCategory() {
    return fetch("http://192.168.1.225:8080/.../all")
        .then((res) => res.text())
        .then((data) => {
            data = JSON.parse(data);
            data.forEach(e => {
                let opttion_category = document.querySelector("categories_pricing");
                let option = document.createElement("option");

                option.setAttribute('id', e['id'])
                option.setAttribute('data-id', e['id'])
                option.innerHTML = e['']
                opttion_category.appendChild(option)
            })
        })
}

window.onload = getOptionCategory();
*/

//GET запрос на отрисовку Для фирмы ценообразования в номенклатуре в Фикс. Цена

function getOptionCompany() {
    return fetch("http://192.168.1.221:8080/pharmacy/all")
        .then((res) => res.text())
        .then((data) => {
            data = JSON.parse(data);
            data.forEach(e => {
                let opttion_company = document.querySelector("for_firm");
                let option = document.createElement("option");

                option.setAttribute('id', e['id'])
                option.setAttribute('data-id', e['id'])
                option.innerHTML = e['pharmacyName']
                opttion_company.appendChild(option)
            })
        })
}

window.onload = getOptionCompany();