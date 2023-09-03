//GET запрос для отрисовки вида клиента
function getOptionProvider() {
    return fetch("http://192.168.1.221:8080/clienttype/all")
        .then((res) => res.text())
        .then((data) => {
            data = JSON.parse(data)
            data.forEach(e => {
                let option_provider = document.querySelector('#option_provider')

                let option = document.createElement('option')
                option.setAttribute('id', e['id'])
                option.setAttribute('data-id', e['id'])
                option.innerHTML = e['clientTypeName']

                option_provider.appendChild(option)

            })
        })
}

window.onload = getOptionProvider();

//GET запрос для отрисовки Региона

function getOptionRegion() {
    return fetch("http://192.168.1.221:8080/region/all")
        .then((res) => res.text())
        .then((data) => {
            data = JSON.parse(data)
            data.forEach(e => {
                let option_region = document.querySelector('#region')
                let option = document.createElement('option')

                option.setAttribute('id', e['id'])
                option.setAttribute('data-id', e['id'])
                option.innerHTML = e['regionName']

                option_region.appendChild(option)
            })
        })
}

window.onload = getOptionRegion();