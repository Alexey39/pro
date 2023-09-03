function sendJsonForCard(data) {
    let id = parseInt(document.querySelector('[name="kod_cap"]').value);
    let response = fetch("http://192.168.1.221:8080/product/" + id, {
        method: 'PUT',
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
}

function getFormCard() {
    // ОСНОВНОЕ 
    let view_cap = document.querySelector('[name="view_cap"]').value;
    let pview_cap = document.querySelector('[name="pview_cap"]').value;
    let name_cap = document.querySelector('[name="name_cap"]').value;
    let artikl_cap = document.querySelector('[name="artikl_cap"]').value;
    let m_name = document.querySelector('[name="m_name"]');
    let name_printing = document.querySelector('[name="name_printing"]').value;


    let check_number_one = document.querySelector('[name="check_number_one"]');
    let check_number_two = document.querySelector('[name="check_number_two"]').value;
    let check_top_sales = document.querySelector('[name="check_top_sales"]').value;


    let check_stop_selling = document.querySelector('[name="check_stop_selling"]');
    let check_not_publish = document.querySelector('[name="check_not_publish"]').value;
    let check_old_goods = document.querySelector('[name="check_old_goods"]').value;


    let check_sign_OA = document.querySelector('[name="check_sign_OA"]').value;
    let check_sign_JNVLS = document.querySelector('[name="check_sign_JNVLS"]').value;
    let check_sign_PKKN = document.querySelector('[name="check_sign_PKKN"]').value;


    let check_ignore_manufacturer = document.querySelector('[name="check_ignore_manufacturer"]').value;
    let residue_rate = document.querySelector('[name="residue_rate"]').value;
    let check_print_labels = document.querySelector('[name="check_print_labels"]').value;


    // let scheduleS = document.querySelector('[name="scheduleS"]');
    // Конец ОСНОВНОЕ

    // ЕДИНИЦЫ ИЗМЕРНЕИЯ
    let base_unit = document.querySelector('[name="base_unit"]').value;
    let sales_unit = document.querySelector('[name="sales_unit"]').value;


    let check_prohibition_division = document.querySelector('[name="check_prohibition_division"]').value;


    let plan_conversion_factor = document.querySelector('[name="plan_conversion_factor"]').value;
    // Конец ЕДИНИЦАМ ИЗМЕРЕНИЯ 


    // НАЦЕНКИ
    let categories_pricing = document.querySelector('[name="categories_pricing"]').value;
    // Конец НАЦЕНКИ


    // ФИКСИРОВАННАЯ ЦЕНА

    // Конец ФИКСИРОВАННОЙ ЦЕНЫ
    let data = {
        "type": view_cap,
        "sybtype": pview_cap,
        "product_name": String(name_cap),
        // "  " : artikl_cap, 
        "product_name": String(m_name),
        "label_print": String(name_printing),
        "obligatory_1": Boolean(check_number_one),
        "obligatory_2": Boolean(check_number_two),
        "top_sales": Boolean(check_top_sales),
        "is_stop_seles": Boolean(check_stop_selling),
        "is_not_public": Boolean(check_not_publish),
        "old_product": Boolean(check_old_goods),
        "sign_oa": Boolean(check_sign_OA),
        "vital": Boolean(check_sign_JNVLS),
        "sign_pkkn": Boolean(check_sign_PKKN),
        "is_dont_take_manufacturer": Boolean(check_ignore_manufacturer),
        "sales_limit": parseInt(residue_rate),
        "label_printing": Boolean(check_print_labels),
        // "batch": parseInt(scheduleS),
        "unit": base_unit,
        "unit_for_sales": sales_unit,
        "close_division": Boolean(check_prohibition_division),
        "coefficient": plan_conversion_factor,
        // "sole_trader_name": categories_pricing
    }
    if (data['type'] != '' && data['sybtype'] != '') {

        console.log(data);
        sendJsonForCard(data);
    } else {
        alert('Заполните все поля')
    }
}
let card_button = document.getElementById('save-nomenkl-form')
card_button.onclick = () => getFormCard();