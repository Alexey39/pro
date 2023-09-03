function sendJsonForVid(data) {
    let response = fetch("http://192.168.1.225:8080/", {
        method: 'POST',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(data)
    }).then((res) => {
        if (res.status === 200) {
            location.reload();
        }
    })
}

function getVid() {
    let name = document.querySelector('[name="name"]').value;
    let idformul = document.querySelector('[name="idformul"]').value;

    let onNds = document.querySelector('[name="onNds"]').checked;
    let onforsale = document.querySelector('[name="onforsale"]').checked;

    let pricing = document.querySelector('[name="pricing"]').value;

    let fields = [
        { value: name, name: "Наименование" },
        { value: idformul, name: "Идентификатор для формул" },
        { value: pricing, name: "Способ задания цен" }
    ];

    let emptyField = null;

    for (let i = 0; i < fields.length; i++) {
        if (fields[i].value === '' || fields[i].value === null) {
            emptyField = fields[i].name;
            break;
        }
    }

    if (emptyField === null) {
        let data = {
            "": name,
            "": idformul,
            "": onNds,
            "": onforsale,
            "": pricing,
        };

        let arrayData = [data];
        console.log(data);
        sendJsonForVid(data);
    } else {
        alert('Заполните поле: ' + emptyField)
    }

}

let vid_btn = document.getElementById('vid_btn');
vid_btn.onclick = () => getVid();