//GET запрос на отображение видов договора
function getOptionTreaty() {
    return fetch("http://192.168.1.221:8080/treatytype/all")
        .then((res) => res.text())
        .then((data) => {
            data = JSON.parse(data)
            data.forEach(e => {
                let option_treaty = document.querySelector('#option_treaty')

                let option = document.createElement('option')
                option.setAttribute('id', e['id'])
                option.setAttribute('data-id', e['id'])
                option.innerHTML = e['treatyTypeName']
                console.log(e['treatyTypeName'])
                option_treaty.appendChild(option)

            })
        })
}

window.onload = getOptionTreaty();

//GET запрос на отрисовку поставщика
function getOptionProviderP() {
    return fetch("http://192.168.1.221:8080/provider/all")
        .then((res) => res.text())
        .then((data) => {
            data = JSON.parse(data)
            data.forEach(e => {
                let option_provider = document.querySelector('#option_provider')

                let option = document.createElement('option')
                option.setAttribute('id', e['id'])
                option.setAttribute('data-id', e['id'])
                option.innerHTML = e['providerName']
                console.log(e['providerName'])
                option_provider.appendChild(option)

            })
        })
}

window.onload = getOptionProviderP();

function sendJsonForTreaty(data) {
    let response = fetch("http://192.168.1.221:8080/treaty", {
        method: 'POST',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(data)
    });
};

function getTreaty() {
    let selected_provider = document.getElementById('option_provider');
    let option_provider = selected_provider.options[selected_provider.selectedIndex]
    let selected_provider_id = option_provider.id;

    let treaty = document.querySelector('[name="treaty"]').value;

    let selected_treaty_type = document.getElementById('option_treaty');
    let option_treaty_type = selected_treaty_type.options[selected_treaty_type.selectedIndex]
    let selected_treaty_type_id = option_treaty_type.id;

    console.log(selected_treaty_type_id);

    let data_treaty = document.querySelector('[name="data_treaty"]').value;
    let data_end = document.querySelector('[name="data_end"]').value;
    let presentation = document.querySelector('[name="presentation"]').value;
    let postponement_fee = document.querySelector('[name="postponement_fee"]').value;
    let surplus_interest = document.querySelector('[name="surplus_interest"]').value;
    let natural = document.querySelector('[name="natural"]').value;
    let financial = document.querySelector('[name="financial"]').value;
    let payment_deferment = document.querySelector('[name="payment_deferment"]').value;
    let bank_1 = document.querySelector('[name="bank-1"]').checked ? "банковских" : "календарных";
    let percent = document.querySelector('[name="percent"]').value;
    let reserve_deferral = document.querySelector('[name="reserve_deferral"]').value;
    let bank_2 = document.querySelector('[name="bank-2"]').checked ? "банковских" : "календарных";
    let not_control = document.querySelector('[name="not_control"]').checked;
    let loan_depth = document.querySelector('[name="loan_depth"]').value;
    let implementation_agreement = document.querySelector('[name="implementation_agreement"]').checked;
    let amount_credit = document.querySelector('[name="amount_credit"]').value;
    let min_delivery_lot = document.querySelector('[name="min_delivery_lot"]').value;
    let delivery_period = document.querySelector('[name="delivery_period"]').value;
    let replacement_goods = document.querySelector('[name="replacement_goods"]').value;


    let by_default = document.querySelector('[name="by_default"]').checked;
    let block = document.querySelector('[name="block"]').checked;




    // Проверка на ввод данных
    let fields = [
        { value: treaty, name: "Договор" },
        { value: selected_treaty_type_id, name: "Вид договора" },

        { value: data_treaty, name: "Дата договора" },
        { value: data_end, name: "Дата окончания" },
        { value: presentation, name: "Срок презентаций" },
        { value: postponement_fee, name: "Наценка на отсрочку" },
        { value: surplus_interest, name: "Прибавочный процент для ценообразования" },
        { value: natural, name: "Наутральная, %" },
        { value: financial, name: "Финансовая, %" },
        { value: payment_deferment, name: "Отсрочка платежа" },

        { value: percent, name: "Процент" },
        { value: reserve_deferral, name: "Отсрочка резерва" },

        { value: loan_depth, name: "Глубина кредита" },

        { value: amount_credit, name: "Сумма кредита" },
        { value: min_delivery_lot, name: "Минимальная партия доставки" },
        { value: delivery_period, name: "Срок доставки" },
        { value: replacement_goods, name: "Замена срокового товара" },

        { value: by_default, name: "По умолчанию" },
        { value: block, name: "Блокировка" },
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
            "provider": Number(selected_provider_id),
            "treaty_number": treaty,
            "treaty_type": selected_treaty_type_id,

            "treaty_date": data_treaty,
            "expiration_date": data_end,
            "claim_period": presentation,
            "deferement_fee": postponement_fee,
            "surplus_interest": Number(surplus_interest),
            "natural_discount": Number(natural),
            "financial_discount": Number(financial),
            "deferment_fee": Number(payment_deferment),
            "deferred_payment_type": bank_1,
            "reserve_deferral_type": bank_2,
            "payment_percentage": Number(percent),
            "reserve_deferral": Number(reserve_deferral),

            "is_not_control_credit": Boolean(not_control),

            "is_sales_contract": Boolean(implementation_agreement),

            "credit_depth": Number(loan_depth),

            "amount_credit": amount_credit,
            "minimum_delivery_lot": Number(min_delivery_lot),
            "estimated_delivery_time": Number(delivery_period),
            "replacement_term_goods": replacement_goods,

            "is_default": Boolean(by_default),
            "is_block": Boolean(block)
        };

        let arrayData = [data];
        console.log(data);
        sendJsonForTreaty(data);
    } else {
        alert('Заполните поле: ' + emptyField);
    }
}


let dogovor_btn = document.getElementById('treaty-btn')
dogovor_btn.onclick = () => console.log('dfdfgfd')
dogovor_btn.onclick = () => getTreaty();

let natural_on = document.querySelector('[name="natural_on"]');
let natural_activity = document.querySelector('[name="natural"]');

let financial_on = document.querySelector('[name="financial_on"]');
let financial_activity = document.querySelector('[name="financial"]');

natural_on.addEventListener('change', function() {
    if (natural_on.checked) {
        natural_activity.removeAttribute('disabled');
    } else {
        natural_activity.setAttribute('disabled', 'disabled');
    }
});

financial_on.addEventListener('change', function() {
    if (financial_on.checked) {
        financial_activity.removeAttribute('disabled');
    } else {
        financial_activity.setAttribute('disabled', 'disabled');
    }
});