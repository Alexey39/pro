function uploadPhoto() {
    const input = document.getElementById('field__file-2');
    const formData = new FormData();
    formData.append('file', input.files[0]);

    fetch('http://192.168.1.221:8080/product', {
        method: 'POST',
        body: formData,
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('Ошибка:', error);
    });
}
function sendJsonForCardTwo(data) {
    let response = fetch("http://192.168.1.221:8080/product", {
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
}

function getFormCardTwo() {
    // ОСНОВНОЕ 
    let view_cap = document.querySelector('[name="view_cap"]');
    let option_view_cap = view_cap.options[view_cap.selectedIndex]
    let view_cap_id = option_view_cap.id;
    console.log(view_cap_id)


    let pview_cap = document.querySelector('[name="pview_cap"]');
    let option_pview_cap = pview_cap.options[pview_cap.selectedIndex]
    let pview_cap_id = option_pview_cap.id;
    console.log(pview_cap_id)

    let name_cap = document.querySelector('[name="name_cap"]').value;
    let artikl_cap = document.querySelector('[name="artikl_cap"]').value;

    let m_name = document.querySelector('[name="m_name"]');
    let option_m_name = m_name.options[m_name.selectedIndex]
    let m_name_id = option_m_name.id;
    console.log(m_name_id)

    let name_printing = document.querySelector('[name="name_printing"]').value;


    let check_number_one = document.querySelector('[name="check_number_one"]').value;
    let check_number_two = document.querySelector('[name="check_number_two"]').value;
    let check_top_sales = document.querySelector('[name="check_top_sales"]').value;


    let check_stop_selling = document.querySelector('[name="check_stop_selling"]').value;
    let check_not_publish = document.querySelector('[name="check_not_publish"]').value;
    let check_old_goods = document.querySelector('[name="check_old_goods"]').value;


    let check_sign_OA = document.querySelector('[name="check_sign_OA"]').value;
    let check_sign_JNVLS = document.querySelector('[name="check_sign_JNVLS"]').value;
    let check_sign_PKKN = document.querySelector('[name="check_sign_PKKN"]').value;


    let check_ignore_manufacturer = document.querySelector('[name="check_ignore_manufacturer"]').value;
    let residue_rate = document.querySelector('[name="residue_rate"]').value;
    let check_print_labels = document.querySelector('[name="check_print_labels"]').value;


    let scheduleS = document.querySelector('[name="scheduleS"]');
    // Конец ОСНОВНОЕ

    let selectionManufacturers = document.querySelector('[name="selectionManufacturers"]').value;
    let add_barcode = document.querySelector('[name="add_barcode"]').value;

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
    let fix_prise_firm = document.querySelector('[name="fix_prise_firm"]').value;
    let fix_prise_manufacturer = document.querySelector('[name="fix_prise_manufacturer"]').value;
    let fix_prise_price = document.querySelector('[name="fix_prise_price"]').value;
    // Конец ФИКСИРОВАННОЙ ЦЕНЫ
    uploadPhoto()
    let data = {
        "type": Number(view_cap_id),
        "subtype": Number(pview_cap_id),
        "product_name": name_cap,
        // "  " : artikl_cap, 
        "active_substance": Number(m_name_id),
        "label_print": name_printing,
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
        "sales_limit": Number(residue_rate),
        "label_printing": Boolean(check_print_labels),
        "batch": Number(scheduleS),
        "selectionManufacturers": selectionManufacturers,
        "add_barcode": add_barcode,
        "unit": base_unit,
        "unit_for_sales": sales_unit,
        "close_division": Boolean(check_prohibition_division),
        "coefficient": plan_conversion_factor,
        // "sole_trader_name": categories_pricing
        "fix_prise_firm": fix_prise_firm,
        "fix_prise_manufacturer": fix_prise_manufacturer,
        "fix_prise_price": fix_prise_price
    }
    if (data['label_print'] != '') {

        console.log(data);
        sendJsonForCardTwo(data);
    } else {
        alert('Заполните все поля')
    }
}
let card_button = document.getElementById('save_nomenkl_form')
card_button.onclick = () => getFormCardTwo();

