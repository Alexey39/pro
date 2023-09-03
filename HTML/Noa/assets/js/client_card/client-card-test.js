function sendJsonForMain(data) {
    let response = fetch("http://192.168.1.221:8080/provider", {
        method: 'POST',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(data)
    }).then((res) => {
        if (res.status === 200) {
            location.reload()
        }
    });;
};

function getSupplierCard() {

    let selected_typeOfClient = document.querySelector('[name="typeOfClient"]');
    let option_typeOfClient = selected_typeOfClient.options[selected_typeOfClient.selectedIndex]
    let selected_typeOfClient_id = option_typeOfClient.id;

    let name = document.querySelector('[name="name"]').value;
    let INN = document.querySelector('[name="inn"]').value;
    let fullName = document.querySelector('[name="fullName"]').value;

    let selected_region = document.querySelector('[name="region"]');
    let option_region = selected_region.options[selected_region.selectedIndex]
    let selected_region_id = option_region.id;

    let phone = document.querySelector('[name="phn"]').value;
    let adress = document.querySelector('[name="adress"]').value;
    let nameConsignee = document.querySelector('[name="nameConsignee"]').value;
    let adressConsignee = document.querySelector('[name="adressConsignee"]').value;
    let OGRN = document.querySelector('[name="OGRN"]').value;
    let OKPO = document.querySelector('[name="OKPO"]').value;
    let OKONH = document.querySelector('[name="OKONH"]').value;
    let KPP = document.querySelector('[name="KPP"]').value;

    let nalog_nds = document.querySelector('[name="isNDSAccounting"]').checked;
    let nalog_nds_sum = document.querySelector('[name="isNDSAccounting"]').checked;
    let nalog_np = document.querySelector('[name="isNPAccounting"]').checked;
    let nalog_np_sum = document.querySelector('[name="isNPSum"]').checked;

    let number_check = document.querySelector('[name="number_check"]').value;


    let bank = document.querySelector('[name="bank"]').value;

    let bank_location = document.querySelector('[name="bank_location"]').value;
    let correspondent_bank = document.querySelector('[name="correspondent_bank"]').value;
    let correspondent_account = document.querySelector('[name="correspondent_account"]').value;
    let bik = document.querySelector('[name="bik"]').value;


    // Проверка на ввод данных
    let fields = [
        { value: selected_typeOfClient_id, name: "Тип клиента" },
        { value: name, name: "Наименование" },
        { value: INN, name: "ИНН" },
        { value: fullName, name: "Полное наименование" },
        { value: selected_region_id, name: "Регион" },
        { value: phone, name: "Номер телефона" },
        { value: adress, name: "Адрес" },
        { value: nameConsignee, name: "Наименование грузополучателя" },
        { value: adressConsignee, name: "Адрес грузополучателя" },
        { value: OGRN, name: "ОГРН" },
        { value: OKPO, name: "ОКПО" },
        { value: OKONH, name: "ОКОНХ" },
        { value: KPP, name: "КПП" },
        { value: number_check, name: "Номер счёта" },
        { value: bank, name: "Банк" },
        { value: bank_location, name: "Местонахождение банка" },
        { value: correspondent_bank, name: "Банк-корреспондент" },
        { value: correspondent_account, name: "Корреспондентный счёт" },
        { value: bik, name: "БИК" },
        // ... добавьте остальные поля
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
            // ваш код для создания объекта data
            "client_type": selected_typeOfClient_id,
            "provider_name": name,
            "inn": INN,

            "full_name": fullName,
            "region": selected_region_id,
            "phone": phone,
            "adress": adress,
            "consignee_name": nameConsignee,
            "consignee_adress": adressConsignee,
            "ogrn": OGRN,
            "okpo": OKPO,
            "okonh": OKONH,
            "kpp": KPP,

            "isNDSAccounting": nalog_nds,
            "isNDSSum": nalog_nds_sum,
            "isNPAccounting": nalog_np,
            "isNPSum": nalog_np_sum,

            "bank_account": number_check,
            "bank": bank,
            "bank_address": bank_location,
            "correspondent_bank": correspondent_bank,
            "correspondent_account": correspondent_account,
            "bik": bik
        };

        let arrayData = [data];
        console.log(data);
        sendJsonForMain(data);
    } else {
        alert('Заполните поле: ' + emptyField);
    }
}

let main_btn = document.getElementById('main-btn')
main_btn.onclick = () => console.log('НЕ РАБОТАЕТ')
main_btn.onclick = () => getSupplierCard();

function getDataExchange() {
    let EDO = document.querySelector('[name="EDO"]').value;
    let type_trasnport = document.querySelector('[name="type_transport"]').value;

    let type_price = document.querySelector('[name="type_price"]').value;
    let update_data = document.querySelector('[name="update_data"]').value;
    let shipment_block = document.querySelector('[name="shipment_block"]').value;

    // Проверка на ввод данных
    let fields = [
        { value: EDO, name: "ЭДО" },
        { value: type_trasnport, name: "Вид транспорта" },

        { value: type_price, name: "Вид прайса" },
        { value: update_data, name: "Дата обновления" },
        { value: shipment_block, name: "Отгрузка заблок" },

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
            //код для создания объекта data
            "": EDO,
            "": type_trasnport,
            "": type_price,
            "": update_data,
            "": shipment_block,

        };

        let arrayData = [data];
        console.log(data);
        sendJsonForMain(data);
    } else {
        alert('Заполните поле: ' + emptyField);
    }
}

function getMDLP() {
    let organization_MDLP = document.querySelector('[name="organization_MDLP"]').value;
    let activity_method = document.querySelector('[name="activity_method"]').value;
    let acceptance_scheme_in = document.querySelector('[name="acceptance_scheme_in"]').value;
    let acceptance_scheme_out = document.querySelector('[name="acceptance_scheme_out"]').value;
    let notification_mode = document.querySelector('[name="notification_mode"]').value;

    // Проверка на ввод данных
    let fields = [
        { value: organization_MDLP, name: "Организация МДЛП" },
        { value: activity_method, name: "Метод деятельности МДЛП" },
        { value: acceptance_scheme_in, name: "Схема акцептирования приход" },
        { value: acceptance_scheme_out, name: "Схема акцептирования расход" },
        { value: notification_mode, name: "Уведомительный режим" },

    ];

    let emptyField = null;

    for (let i = 0; i < fields.length; i++) {
        if (fields[i].value === '' || fields[i].value === null || fields[i].value === 'Не выбрано') {
            emptyField = fields[i].name;
            break;
        }
    }

    if (emptyField === null) {
        let data = {
            //код для создания объекта data
            "": organization_MDLP,
            "": activity_method,
            "": acceptance_scheme_in,
            "": acceptance_scheme_out,
            "": notification_mode,
        };

        let arrayData = [data];
        console.log(data);
        sendJsonForMain(data);
    } else {
        alert('Заполните поле: ' + emptyField);
    }
}


let dogovor_btn = document.getElementById('dogovor-btn')
dogovor_btn.onclick = () => console.log('dfsfsfsfsdfsdf');
dogovor_btn.onclick = () => getTreaty();

let mdlp_btn = document.getElementById('mdlp_btn')
mdlp_btn.onclick = () => getMDLP();
mdlp_btn.onclick = () => console.log('dgdfg')