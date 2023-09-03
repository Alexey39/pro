function getInfoTreaty() {
    data = JSON.parse(localStorage.getItem('treaty'));
    console.log(data);
    let treaty_list = document.querySelector('#treaty');

    let select_provider = document.querySelector('[name="provider"]');
    select_provider.value = data['provider'];

    let input_treaty = document.querySelector('[name="treaty"]');
    input_treaty.value = data['treaty_number'];

    let select_treaty_type = document.querySelector('[name="treaty_type"]');
    select_treaty_type.value = data['treaty_type'];

    let input_data_treaty = document.querySelector('[name="data_treaty"]');
    input_data_treaty.value = data['treaty_date'];

    let input_data_end = document.querySelector('[name="data_end"]');
    input_data_end.value = data['expiration_date'];

    let input_presentaion = document.querySelector('[name="presentation"]');
    input_presentaion.value = data['claim_period'];

    let input_postponement_fee = document.querySelector('[name="postponement_fee"]');
    input_postponement_fee.value = data['deferement_fee'];

    let input_surplus_interest = document.querySelector('[name="surplus_interest"]');
    input_surplus_interest.value = data['surplus_interest'];

    let input_natural = document.querySelector('[name="natural"]');
    input_natural.value = data['natural_discount'];
    let checkbox_natural = document.querySelector('[name="natural_on"]');
    if (data['natural_discount'] != null) {
        checkbox_natural.setAttribute('checked', 'checked');
    } else {
        checkbox_natural.removeAttribute('checked', 'checked');
    }

    let input_financial = document.querySelector('[name="financial"]');
    input_financial.value = data['financial_discount'];
    let checkbox_financial = document.querySelector('[name="financial_on"]');
    if (data['financial_discount'] != null) {
        checkbox_financial.setAttribute('checked');
    } else {
        checkbox_financial.removeAttribute('checked', 'checked');
    }

    let input_payment_deferment = document.querySelector('[name="payment_deferment"]');
    input_payment_deferment.value = data['deferment_fee'];

    let radio_bank1 = document.querySelector('[name="bank-1"]');
    radio_bank1.value = data['deferred_payment_type'];
    if (data['deferred_payment_type'] == 'банковских') {
        radio_bank1.setAttribute('checked', 'checked');
    } else {
        radio_bank1.setAttribute('checked', 'checked');
    }

    let radio_bank2 = document.querySelector('[name="bank-2"]');
    radio_bank2.value = data['reserve_deferral_type'];
    if (data['reserve_deferral_type'] == 'банковских') {
        radio_bank2.setAttribute('checked', 'checked');
    } else {
        radio_bank2.setAttribute('checked', 'checked');
    }

    let input_percent = document.querySelector('[name="percent"]');
    input_percent.value = data['payment_percentage'];

    let input_reserve_deferral = document.querySelector('[name="reserve_deferral"]');
    input_reserve_deferral.value = data['reserve_deferral'];

    let checkbox_not_control = document.querySelector('[name="not_control"]');
    checkbox_not_control.checked = data['is_not_control_credit'];
    if (data['is_not_control_credit'] == true) {
        checkbox_not_control.setAttribute('checked', 'checked');
    } else {
        checkbox_not_control.removeAttribute('checked', 'checked');
    }

    let checkbox_implementation_agreement = document.querySelector('[name="implementation_agreement"]');
    checkbox_implementation_agreement = data['is_sales_contract'];
    if (data['is_sales_contract'] == true) {
        checkbox_implementation_agreement.setAttribute('checked', 'checked');
    } else {
        checkbox_implementation_agreement.removeAttribute('checked', 'checked');
    }

    let input_loan_depth = document.querySelector('[name="loan_depth"]');
    input_loan_depth.value = data['credit_depth'];

    let input_amout_credit = document.querySelector('[name="amount_credit"]');
    input_amout_credit.value = data['amount_credit'];

    let input_min_delivery_lot = document.querySelector('[name="min_delivery_lot"]');
    input_min_delivery_lot.value = data['minimum_delivery_lot'];

    let input_delivery_period = document.querySelector('[name="delivery_period"]');
    input_delivery_period.value = data['estimated_delivery_time'];

    let selecet_replacement_goods = document.querySelector('[name="replacement_goods"]');
    selecet_replacement_goods.value = data['replacement_term_goods'];

    let checkbox_is_default = document.querySelector('[name="by_default"]');
    checkbox_is_default.checked = data['is_default'];
    if (data['is_default'] == true) {
        checkbox_is_default.setAttribute('checked');
    } else {
        checkbox_is_default.removeAttribute('checked');
    }

    let checkbox_is_block = document.querySelector('[name="block"]');
    checkbox_is_block.checked = data['is_block'];
    if (data['is_block'] == true) {
        checkbox_is_block.setAttribute('checked', 'checked');
    } else {
        checkbox_is_block.removeAttribute('checked', 'checked');
    }
}

getInfoTreaty();