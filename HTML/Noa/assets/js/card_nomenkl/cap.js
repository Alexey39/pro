function getInput() {
    data = JSON.parse(localStorage.getItem('product'));
    console.log(data);
        let nomenkla_form = document.querySelector('#form-nomenkl')
        
        let photo = document.getElementById('photo')
        let path = data['photo']
        photo.setAttribute('src', path)

        let input_type = document.querySelector('[name="view_cap"]');
        input_type.value = data['type']

        let input_sybtype = document.querySelector('[name="pview_cap"]');
        input_sybtype.value = data['sybtype']

        let input_name = document.querySelector('[name="name_cap"]');
        input_name.value = data['productName'] 
        
        let input_artikl = document.querySelector('[name="artikl_cap"]');
        input_artikl.value = data['artikl_cap'] 

        console.log('1')
        let input_kod = document.querySelector('[name="kod_cap"]');
        input_kod.value = data['id']

        console.log('2')
        let input_activeSubstance = document.querySelector('[name="m_name"]');
        data['activeSubstance'] != null ? input_activeSubstance.value = data['activeSubstance'] : 
        
        console.log('6')
        let input_labelPrinting = document.querySelector('[name="name_printing"]');
        input_labelPrinting.value = data['labelPrinting']

        console.log('5')
        let input_obligatory1 = document.querySelector('[name="check_number"]');
        input_obligatory1.checked = data['obligatory1']
        if (data['obligatory1'] == true)
        {
            input_obligatory1.setAttribute('checked', 'checked');
        }
        else 
        {
            input_obligatory1.removeAttribute('checked', 'checked');
        }

        let input_obligatory2 = document.querySelector('[name="check_number_two"]');
        input_obligatory2.checked = data['obligatory2']
        if (data['obligatory2'] == true)
        {
            input_obligatory2.setAttribute('checked', 'checked');
        }
        else 
        {
            input_obligatory2.removeAttribute('checked', 'checked');
        }

        let input_topSales = document.querySelector('[name="check_top_sales"]');
        input_topSales.checked = data['topSales']
        if (data['topSales'] == true)
        {
            input_topSales.setAttribute('checked', 'checked');
        }
        else 
        {
            input_topSales.removeAttribute('checked', 'checked');
        }
        console.log('rabotaet')

        let input_isStopSeles = document.querySelector('[name="check_sellin"]');
        input_isStopSeles.checked = data['isStopSeles']
        if (data['isStopSeles'] == true)
        {
            input_isStopSeles.setAttribute('checked', 'checked');
        }
        else 
        {
            input_isStopSeles.removeAttribute('checked', 'checked');
        }
        console.log('rabotaet')

        let input_isNotPublic = document.querySelector('[name="check_not_publish"]');
        input_isNotPublic.checked = data['isNotPublic']
        if (data['isNotPublic'] == true)
        {
            input_isNotPublic.setAttribute('checked', 'checked');
        }
        else 
        {
            input_isNotPublic.removeAttribute('checked', 'checked');
        }
        console.log('rabotaet')

        let input_oldProduct = document.querySelector('[name="check_old_goods"]');
        input_oldProduct.checked = data['oldProduct']
        if (data['oldProduct'] == true)
        {
            input_oldProduct.setAttribute('checked', 'checked');
        }
        else 
        {
            input_oldProduct.removeAttribute('checked', 'checked');
        }

        console.log('3')
  
        let checkbox = document.querySelector('[name="check_sign_OA"]');
        checkbox.checked = data['signOa']
        if (data['signOa'] == true)
        {
            checkbox.setAttribute('checked', 'checked');
        }
        else 
        {
            checkbox.removeAttribute('checked', 'checked');
        }

        console.log('3')
        let input_vital = document.querySelector('[name="check_sign_OA"]');
        input_vital.checked = data['vital']
        if (data['vital'] == true)
        {
            input_vital.setAttribute('checked', 'checked');
        }
        else 
        {
            input_vital.removeAttribute('checked', 'checked');
        } 

        let input_signPkkn = document.querySelector('[name="check_sign_PKKN"]');
        input_signPkkn.checked = data['signPkkn']
        if (data['signPkkn'] == true)
        {
            input_signPkkn.setAttribute('checked','checked');
        }
        else 
        {
            input_signPkkn.removeAttribute('checked', 'checked');
        } 

        let input_isDontTakeManufacturer = document.querySelector('[name="check_ignore_manufacturer"]');
        input_isDontTakeManufacturer.checked = data['isDontTakeManufacturer']
        if (data['isDontTakeManufacturer'] == true)
        {
            input_isDontTakeManufacturer.setAttribute('checked','checked');
        }
        else 
        {
            input_isDontTakeManufacturer.removeAttribute('checked', 'checked');
        } 

        let input_salesLimit = document.querySelector('[name="residue_rate"]');
        input_salesLimit.value = data['salesLimit']

        let input_labelPrint = document.querySelector('[name="check_print_labels"]');
        input_labelPrint.checked = data['labelPrint']
        if (data['labelPrint'] == true)
        {
            input_labelPrint.setAttribute('checked', 'checked');
        }
        else 
        {
            input_labelPrint.removeAttribute('checked', 'checked');
        } 

        let input_batch = document.querySelector('[name="scheduleS"]');
        input_batch = data['batch']

        let input_unit = document.querySelector('[name="base_unit"]');
        input_unit.value = data['unit']

        let input_unitForSales = document.querySelector('[name="sales_unit"]');
        input_unitForSales.value = data['unitForSales']

        let input_closeDivision = document.querySelector('[name="check_prohibition_division"]');
        input_closeDivision.checked = data['closeDivision']
        if (data['closeDivision'] == true)
        {
            input_closeDivision.setAttribute('checked', 'checked');
        }
        else 
        {
            input_closeDivision.removeAttribute('checked', 'checked');
        } 

        let input_coefficient = document.querySelector('[name="plan_conversion_factor"]');
        input_coefficient.value = data['coefficient']

        let input_for_company = document.querySelector('[name="for_company"]');
        input_for_company.value = data[' ']

        let input_planGroup = document.querySelector('[name="group_AP"]');
        input_planGroup.value = data['planGroup']

        let input_isIncludedPlan = document.querySelector('[name="check_vhod_AP"]');
        input_isIncludedPlan.value = data['isIncludedPlan']
        if (data['isIncludedPlan'] == true)
        {
            input_isIncludedPlan.setAttribute('checked', 'checked');
        }
        else 
        {
            input_isIncludedPlan.removeAttribute('checked', 'checked');
        } 

        let input_abc_group = document.querySelector('[name="group_ABC"]');
        input_abc_group.value = data['abcGroup']

        let input_minimumBalance = document.querySelector('[name="minimum_balance"]');
        input_minimumBalance.value = data['minimumBalance']

        let input_minimumLotOrder = document.querySelector('[name="minimum_lot"]');
        input_minimumLotOrder.value = data['minimumLotOrder']
    }

getInput();