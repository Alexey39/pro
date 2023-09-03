// Отрисовка таблицы ФИКСИРОВАННАЯ ЦЕНА 
function getCreatTableFix(id) {
    return fetch("http://192.168.1.221:8080/product/price/" + id)
    .then((res) => res.text())
      .then((data) => {
        data = JSON.parse(data)
        let count = 1
        const delet = "Удалить";
        data.forEach(e => {
          let nomenkla_table = document.querySelector('#fix_table')

          let row = document.createElement('tr')
          row.setAttribute('id', e['id'])
          row.setAttribute('data-id', e['id']);
          row.setAttribute('style', 'cursor: pointer;')
        
          let name = e['planPharmacy']
          let row_name = document.createElement('td'); 
          row_name.setAttribute('data-field', 'name');
          row_name.setAttribute('class', 'sorting_1')
          row_name.innerHTML = name;
          row.appendChild(row_name);
         
      
          let jnvls = e['manufacturer']
          let row_jnvls = document.createElement('td');
          row_jnvls.setAttribute('data-field', 'name')
          row_jnvls.innerHTML = jnvls;
          row.appendChild(row_jnvls)
      
          let vsego = e['prise']
          let row_vsego = document.createElement('td');
          row_vsego.setAttribute('data-field', 'name')
          row_vsego.innerHTML = vsego;
          row.appendChild(row_vsego);
      

          let edit_button = document.createElement('button')
          edit_button.setAttribute('class', 'btn btn-primary fs-14 text-white edit-icn')
          edit_button.innerHTML = 'Изменить'

          let row_button = document.createElement('td')
          row_button.appendChild(edit_button)

          edit_button.onclick = () => editRowFix(edit_button)

          row.appendChild(row_button)

          let del_button = document.createElement('button')
          del_button.innerHTML = delet
          del_button.setAttribute('class', 'btn btn-primary fs-14 text-white edit-icn')
          del_button.setAttribute('id', 'nomendelRow')

          let row_del = document.createElement('td')
          row_del.appendChild(del_button)

          row.appendChild(row_del)

          nomenkla_table.appendChild(row)

          let td = del_button.parentElement
          del_button.onclick = () => delete_row_fix(td)

          if(count % 2 == 0){
            row.setAttribute('class', 'even')
          }
          else{
            row.setAttribute('class', 'odd')
          }
          count++
      })
    })
    }


window.onload = getCreatTableFix();

  
  function editRowFix(button_nom) {
    // получаем строку таблицы, в которой находится кнопка
    var row = button_nom.parentNode.parentNode;
    // получаем ячейки со значениями
    var planPharmacy = row.cells[0].textContent;
    var manufacturer = row.cells[1].textContent;
    var prise = row.cells[2].textContent;
    var edit_button = row.cells[3].textContent;
    // создаем инпуты для изменения значений
    var planPharmacyInput = document.createElement("input");
    planPharmacyInput.type = "text";
    planPharmacyInput.value = planPharmacy;
    var manufacturerInput = document.createElement("input");
    manufacturerInput.type = "text";
    manufacturerInput.value = manufacturer;
    var priseInput = document.createElement("input");
    priseInput.type = "text";
    priseInput.value = prise;
    // заменяем значения ячеек на инпуты
    row.cells[0].innerHTML = "";
    row.cells[0].appendChild(planPharmacyInput);
    row.cells[1].innerHTML = "";
    row.cells[1].appendChild(manufacturerInput);
    row.cells[2].innerHTML = "";
    row.cells[2].appendChild(priseInput);
    // заменяем кнопку на кнопки "Сохранить" и "Отмена"
    button_nom.textContent = "Сохранить";
    button_nom.onclick = function () { saveRowFix(this); };
  }
  
  function saveRowFix(button_nom) {
    // получаем строку таблицы, в которой находится кнопка
    var row = button_nom.parentNode.parentNode;
    // получаем значения из инпутов
    var newplanPharmacyInput = row.cells[0].childNodes[0].value;
    var newmanufacturerInput = row.cells[1].childNodes[0].value;
    var newpriseInput = row.cells[2].childNodes[0].value;
    // заменяем инпуты на значения
    row.cells[0].innerHTML = newplanPharmacyInput;
    row.cells[1].innerHTML = newmanufacturerInput;
    row.cells[2].innerHTML = newpriseInput;
  
    let data = {"planPharmacy": newplanPharmacyInput, "manufacturer": newmanufacturerInput, "prise" : newpriseInput}
      if (data['planPharmacy'] != '' && data['manufacturer'] != '' && data['prise'] != '') {
        console.log( row.id)
  
        fetch('http://192.168.1.221:8080/product/' + row.id, {
        method: 'PUT',
        headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
  })
  
      }
    // заменяем кнопки "Сохранить" и "Отмена" на кнопку "Изменить"
    button_nom.textContent = "Изменить";
    button_nom.onclick = function () { editRowFix(this); };
    row.cells[3].innerHTML = '<button onclick="editRowFix(this)">Изменить</button>';
  }
//   Конец отрисовки таблицы ФИКСИРОВАННАЯ ЦЕНА