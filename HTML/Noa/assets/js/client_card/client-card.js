function getAllOsnova() {
    return fetch("http://192.168.1.221:8080/provider/all")
        .then((res) => res.text())
        .then((data) => {
            data = JSON.parse(data)
            data.forEach(e => {
                let osnova = document.querySelector("#osnova");

                let id = e['id'];
                row_id = document.querySelector('[name="code"]').value;
                row_id.setAttribute('class', 'sorting_1');
                row_id.innerHTML = id;
                row.appendChild(row_id);

                let full_name = e['full_name'];
                row_full_name = document.querySelector('[name="fullName"]').value;
                row_full_name.innerHTML = full_name;
                row.appendChild(row_full_name);

                let region = e['region'];
                row_region = document.querySelector('[name="region"]').value;
                row_region.innerHTML = region;
                row.appendChild(row_region);

                let phone = e['phone'];
                row_phone = document.querySelector('[name="phn"]').value;
                row_phone.innerHTML = phone;
                row.appendChild(row_phone);

                let adress = e['adress'];
                row_adress = document.querySelector('[name="adress"]').value;
                row_adress.innerHTML = adress;
                row.appendChild(row_adress);

                let nameConsignee = e['consignee_name'];
                row_nameConsignee = document.querySelector('[name="nameConsignee"]').value;
                row_nameConsignee.innerHTML = nameConsignee;
                row.appendChild(row_nameConsignee);

                let adressConsignee = e['consignee_adress'];
                row_adressConsignee = document.querySelector('[name="adressConsignee"]').value;
                row_adressConsignee.innerHTML = adressConsignee;
                row.appendChild(row_adressConsignee);

                let ogrn = e['ogrn'];
                row_ogrn = document.querySelector('[name="OGRN"]').value;
                row_ogrn.innerHTML = ogrn;
                row.appendChild(row_ogrn);

                let okpo = e['okpo'];
                row_okpo = document.querySelector('[name="OKPO"]');
                row_okpo.innerHTML = okpo;
                row.appendChild(row_okpo);

                let okonh = e['okonh'];
                row_okonh = document.querySelector('[name="OKONH"]');
                row_okonh.innerHTML = okonh;
                row.appendChild(row_okonh);

                let kpp = e['kpp'];
                row_kpp = document.querySelector('[name="KPP"]');
                row_kpp.innerHTML = kpp;
                row.appendChild(row_kpp);
            })
        })
}

function getAllRequisites() {
    return fetch("http://192.168.1.221:8080/provider/all")
        .then((res) => res.text())
        .then((data) => {
            data = JSON.parse(data)
            data.forEach(e => {
                let requisites = document.querySelector("#requisites");

                let number_check = e['bank_account'];
                row_number_check = document.querySelector('[name="number_check"]').value;
                row_number_check.setAttribute('class', 'sorting_1');
                row_number_check.innerHTML = number_check;
                row.appendChild(row_number_check);

                let bank = e['bank'];
                row_bank = document.querySelector('[name="bank"]').value;
                row_bank.innerHTML = bank;
                row.appendChild(row_bank);

                let bank_location = e['bank_address'];
                row_bank_location = document.querySelector('[name="bank_location"]');
                row_bank_location.innerHTML = bank_location;
                row.appendChild(row_bank_location);

                let correspondent_bank = e['correspondent_bank'];
                row_correspondent_bank = document.querySelector('[name="correspondent_bank"]');
                row_correspondent_bank.innerHTML = correspondent_bank;
                row.appendChild(row_correspondent_bank);

                let correspondent_account = e['correspondent_account'];
                row_correspondent_account = document.querySelector('[name="correspondent_account"]');
                row_correspondent_account.innerHTML = correspondent_account;
                row.appendChild(row_correspondent_account);

                let bik = e['bik'];
                row_bik = document.querySelector('[name="bik"]');
                row_bik.innerHTML = bik;
                row.appendChild(row_bik);
            })
        })
}