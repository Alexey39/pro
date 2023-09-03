function getInfoClientCard() {
    data = JSON.parse(localStorage.getItem('client-card'));
    console.log(data);

    let client_card = document.querySelector('#client-card');

    let select_provider = document.querySelector('[name="typeOfClient"]');
    select_provider.value = data['client_type'];

    let input_name = document.querySelector('[name="name"]');
    input_name.value = data['provider_name'];

    let input_inn = document.querySelector('[name="inn"]');
    input_inn.value = data['inn'];

    let input_code = document.querySelector('[name="code"]');
    input_code.value = data['id'];

    let input_fullName = document.querySelector('[name="fullName"]');
    input_fullName.value = data['full_name'];

    let select_region = document.querySelector('[name="region"]');
    select_region.value = data['region'];

    let input_phone = document.querySelector('[name="phn"]');
    input_phone.value = data['phone'];

    let input_adress = document.querySelector('[name="adress"]');
    input_adress.value = data['adress'];

    let input_nameConsignee = document.querySelector('[name="nameConsignee"]');
    input_nameConsignee.value = data['consignee_name'];

    let input_adressConsignee = document.querySelector('[name="adressConsignee"]');
    input_adressConsignee.value = data['consignee_adress'];

    let input_OGRN = document.querySelector('[name="OGRN"]');
    input_OGRN.value = data['ogrn'];

    let input_OKPO = document.querySelector('[name="OKPO"]');
    input_OKPO.value = data['okpo'];

    let input_OKONH = document.querySelector('[name="OKONH"]');
    input_OKONH.value = data['okonh'];

    let input_KPP = document.querySelector('[name="KPP"]');
    input_KPP.value = data['kpp'];


    let checkbox_nalog_nds = document.querySelector('[name="isNDSAccounting"]');
    checkbox_nalog_nds.value = data['isNDSAccounting'];

    let checkbox_nalog_nds_sum = document.querySelector('[name="isNDSAccounting"]');
    checkbox_nalog_nds_sum.value = data['isNDSSum'];

    let checkbox_nalog_np = document.querySelector('[name="isNPAccounting"]');
    checkbox_nalog_np.value = data['isNPAccounting'];

    let checkbox_nalog_np_sum = document.querySelector('[name="isNPSum"]');
    checkbox_nalog_np_sum.value = data['isNPSum'];


    let input_number_check = document.querySelector('[name="number_check"]');
    input_number_check.value = data['bank_account'];

    let select_bank = document.querySelector('[name="bank"]');
    select_bank.value = data['bank'];

    let input_bank_location = document.querySelector('[name="bank_location"]');
    input_bank_location.value = data['bank_address'];

    let input_correspondent_bank = document.querySelector('[name="correspondent_bank"]');
    input_correspondent_bank.value = data['correspondent_bank'];

    let input_correspondent_account = document.querySelector('[name="correspondent_account"]');
    input_correspondent_account.value = data['correspondent_account'];

    let input_bik = document.querySelector('[name="bik"]');
    input_bik.value = data['bik'];

}

getInfoClientCard();