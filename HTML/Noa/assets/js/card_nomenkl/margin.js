// Заполнение таблицы из справочника НАЦЕНКА ТОВАРА
function getCreatTableProduct() {
    return fetch("http://192.168.1.221:8080/goodsmargin/all")
    .then((res) => res.text())
      .then((data) => {
        data = JSON.parse(data)
        let count = 1
        const delet = "Удалить";
        data.forEach(e => {
          let nomenkla_table = document.querySelector('#product_table')

          let row = document.createElement('tr')
          row.setAttribute('id', e['id'])
          row.setAttribute('data-id', e['id']);
          row.setAttribute('style', 'cursor: pointer;')
        
          let name = e['category']
          let row_name = document.createElement('td'); 
          row_name.setAttribute('data-field', 'name');
          row_name.setAttribute('class', 'sorting_1')
          row_name.innerHTML = name;
          row.appendChild(row_name);
         
      
          let jnvls = e['lowerLimit']
          let row_jnvls = document.createElement('td');
          row_jnvls.setAttribute('data-field', 'name')
          row_jnvls.innerHTML = jnvls;
          row.appendChild(row_jnvls)
      
          let vsego = e['upperLimit']
          let row_vsego = document.createElement('td');
          row_vsego.setAttribute('data-field', 'name')
          row_vsego.innerHTML = vsego;
          row.appendChild(row_vsego);
      
          let ostatok = e['markupPercentage']
          let row_ostatok = document.createElement('td');
          row_ostatok.setAttribute('data-field', 'name')
          row_ostatok.innerHTML = ostatok;
          row.appendChild(row_ostatok);
          console.log(data)
      

        //   let edit_button = document.createElement('button')
        //   edit_button.setAttribute('class', 'btn btn-primary fs-14 text-white edit-icn')
        //   edit_button.innerHTML = 'Изменить'

        //   let row_button = document.createElement('td')
        //   row_button.appendChild(edit_button)

        //   edit_button.onclick = () => editRowProduct(edit_button)

        //   row.appendChild(row_button)

        //   let del_button = document.createElement('button')
        //   del_button.innerHTML = delet
        //   del_button.setAttribute('class', 'btn btn-primary fs-14 text-white edit-icn')
        //   del_button.setAttribute('id', 'nomendelRow')

        //   let row_del = document.createElement('td')
        //   row_del.appendChild(del_button)

        //   row.appendChild(row_del)

           nomenkla_table.appendChild(row)

        //   let td = del_button.parentElement
        //   del_button.onclick = () => delete_row_product(td)

        //   if(count % 2 == 0){
        //     row.setAttribute('class', 'even')
        //   }
        //   else{
        //     row.setAttribute('class', 'odd')
        //   }
        //   count++
      })
    })
    }


window.onload = getCreatTableProduct();

// function delete_row_product(td) {

//     tr = td.parentElement
//     console.log( tr.id)
  
//     fetch('http://192.168.1.102:8080/goodsmargin/'  + tr.id, {method: 'DELETE'})
  
//     tr.remove()
//     console.log('qwrqwrqw')
//   }
  
//   function editRowProduct(button_nom) {
//     // получаем строку таблицы, в которой находится кнопка
//     var row = button_nom.parentNode.parentNode;
//     // получаем ячейки со значениями
//     var category = row.cells[0].textContent;
//     var lowerLimit = row.cells[1].textContent;
//     var upperLimit = row.cells[2].textContent;
//     var markupPercentage = row.cells[3].textContent;
//     var edit_button = row.cells[4].textContent;
//     // создаем инпуты для изменения значений
//     var categoryInput = document.createElement("input");
//     categoryInput.type = "text";
//     categoryInput.value = category;
//     var lowerLimitInput = document.createElement("input");
//     lowerLimitInput.type = "text";
//     lowerLimitInput.value = lowerLimit;
//     var upperLimitInput = document.createElement("input");
//     upperLimitInput.type = "text";
//     upperLimitInput.value = upperLimit;
//     var markupPercentageInput = document.createElement("input");
//     markupPercentageInput.type = "text";
//     markupPercentageInput.value = markupPercentage;
//     // заменяем значения ячеек на инпуты
//     row.cells[0].innerHTML = "";
//     row.cells[0].appendChild(categoryInput);
//     row.cells[1].innerHTML = "";
//     row.cells[1].appendChild(lowerLimitInput);
//     row.cells[2].innerHTML = "";
//     row.cells[2].appendChild(upperLimitInput);
//     row.cells[3].innerHTML = "";
//     row.cells[3].appendChild(markupPercentageInput);
//     // заменяем кнопку на кнопки "Сохранить" и "Отмена"
//     button_nom.textContent = "Сохранить";
//     button_nom.onclick = function () { saveRowProduct(this); };
//   }
  
//   function saveRowProduct(button_nom) {
//     // получаем строку таблицы, в которой находится кнопка
//     var row = button_nom.parentNode.parentNode;
//     // получаем значения из инпутов
//     var newcategoryInput = row.cells[0].childNodes[0].value;
//     var newlowerLimitInput = row.cells[1].childNodes[0].value;
//     var newupperLimitInput = row.cells[2].childNodes[0].value;
//     var newmarkupPercentageInput = row.cells[3].childNodes[0].value;
//     // заменяем инпуты на значения
//     row.cells[0].innerHTML = newcategoryInput;
//     row.cells[1].innerHTML = newlowerLimitInput;
//     row.cells[2].innerHTML = newupperLimitInput;
//     row.cells[3].innerHTML = newmarkupPercentageInput;
  
//     let data = {"category": newcategoryInput, "lower_limit": newlowerLimitInput, "upper_limit" : newupperLimitInput, "markup_percentage" : newmarkupPercentageInput}
//       if (data['category'] != '' && data['lower_limit'] != '' && data['upper_limit'] != '' && data['markup_percentage'] != '') {
//         console.log( row.id)
  
//         fetch('http://192.168.1.102:8080/goodsmargin/' + row.id, {
//         method: 'PUT',
//         headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(data)
//   })
  
//       }
//     // заменяем кнопки "Сохранить" и "Отмена" на кнопку "Изменить"
//     button_nom.textContent = "Изменить";
//     button_nom.onclick = function () { editRowProduct(this); };
//     row.cells[3].innerHTML = '<button onclick="editRowProduct(this)">Изменить</button>';
//   }
// //   Конец заполнения таблицы из справочника НАЦЕНКА ТОВАРА





// Орисовка таблицы из справочника цена для вида товара
function getCreatTable() {
    return fetch("http://192.168.1.221:8080/typemarkup/all")
    .then((res) => res.text())
      .then((data) => {
        data = JSON.parse(data)
        let count = 1
        const delet = "Удалить";
        data.forEach(e => {
          let nomenkla_table = document.querySelector('#view_table')

          let row = document.createElement('tr')
          row.setAttribute('id', e['id'])
          row.setAttribute('data-id', e['id']);
          row.setAttribute('style', 'cursor: pointer;')
        
          let name = e['productType']
          let row_name = document.createElement('td'); 
          row_name.setAttribute('data-field', 'name');
          row_name.setAttribute('class', 'sorting_1')
          row_name.innerHTML = name;
          row.appendChild(row_name);
         
      
          let jnvls = e['product_subtype']
          let row_jnvls = document.createElement('td');
          row_jnvls.setAttribute('data-field', 'name')
          row_jnvls.innerHTML = jnvls;
          row.appendChild(row_jnvls)
      
          let vsego = e['category']
          let row_vsego = document.createElement('td');
          row_vsego.setAttribute('data-field', 'name')
          row_vsego.innerHTML = vsego;
          row.appendChild(row_vsego);
      
          let ostatok = e['lowerLimit']
          let row_ostatok = document.createElement('td');
          row_ostatok.setAttribute('data-field', 'name')
          row_ostatok.innerHTML = ostatok;
          row.appendChild(row_ostatok);
      
          let rezerv = e['upperLimit']
          let row_rezerv = document.createElement('td');
          row_rezerv.setAttribute('data-field', 'name')
          row_rezerv.innerHTML = rezerv;
          row.appendChild(row_rezerv)
      
          let kod = e['markupPercentage']
          let row_kod = document.createElement('td');
          row_kod.setAttribute('data-field', 'name')
          row_kod.innerHTML = kod;
          row.appendChild(row_kod);
          

        //   let edit_button = document.createElement('button')
        //   edit_button.setAttribute('class', 'btn btn-primary fs-14 text-white edit-icn')
        //   edit_button.innerHTML = 'Изменить'

        //   let row_button = document.createElement('td')
        //   row_button.appendChild(edit_button)

        //   edit_button.onclick = () => editRowIp(edit_button)

        //   row.appendChild(row_button)

        //   let del_button = document.createElement('button')
        //   del_button.innerHTML = delet
        //   del_button.setAttribute('class', 'btn btn-primary fs-14 text-white edit-icn')
        //   del_button.setAttribute('id', 'nomendelRow')

        //   let row_del = document.createElement('td')
        //   row_del.appendChild(del_button)

        //   row.appendChild(row_del)

           nomenkla_table.appendChild(row)

        //   let td = del_button.parentElement
        //   del_button.onclick = () => delete_row(td)

        //   if(count % 2 == 0){
        //     row.setAttribute('class', 'even')
        //   }
        //   else{
        //     row.setAttribute('class', 'odd')
        //   }
        //   count++
      })
    })
    }


window.onload = getCreatTable();

// function delete_row(td) {

//     tr = td.parentElement
//     console.log( tr.id)
  
//     fetch('http://192.168.1.102:8080/typemarkup/'  + tr.id, {method: 'DELETE'})
  
//     tr.remove()
//     console.log('qwrqwrqw')
//   }
  
//   function editRowIp(button_nom) {
//     // получаем строку таблицы, в которой находится кнопка
//     var row = button_nom.parentNode.parentNode;
//     // получаем ячейки со значениями
//     var productType = row.cells[0].textContent;
//     var productSubtype = row.cells[1].textContent;
//     var category = row.cells[2].textContent;
//     var lowerLimit = row.cells[3].textContent;
//     var upperLimit = row.cells[4].textContent;
//     var markupPercentage = row.cells[5].textContent;
//     var edit_button = row.cells[6].textContent;
//     // создаем инпуты для изменения значений
//     var productTypeInput = document.createElement("input");
//     productTypeInput.type = "text";
//     productTypeInput.value = productType;
//     var productSubtypeInput = document.createElement("input");
//     productSubtypeInput.type = "text";
//     productSubtypeInput.value = productSubtype;
//     var categoryInput = document.createElement("input");
//     categoryInput.type = "text";
//     categoryInput.value = category;
//     var lowerLimitInput = document.createElement("input");
//     lowerLimitInput.type = "text";
//     lowerLimitInput.value = lowerLimit;
//     var upperLimitInput = document.createElement("input");
//     upperLimitInput.type = "text";
//     upperLimitInput.value = upperLimit;
//     var markupPercentageInput = document.createElement("input");
//     markupPercentageInput.type = "text";
//     markupPercentageInput.value = markupPercentage;
//     // заменяем значения ячеек на инпуты
//     row.cells[0].innerHTML = "";
//     row.cells[0].appendChild(productTypeInput);
//     row.cells[1].innerHTML = "";
//     row.cells[1].appendChild(productSubtypeInput);
//     row.cells[2].innerHTML = "";
//     row.cells[2].appendChild(categoryInput);
//     row.cells[3].innerHTML = "";
//     row.cells[3].appendChild(lowerLimitInput);
//     row.cells[4].innerHTML = "";
//     row.cells[4].appendChild(upperLimitInput);
//     row.cells[5].innerHTML = "";
//     row.cells[5].appendChild(markupPercentageInput);
//     // заменяем кнопку на кнопки "Сохранить" и "Отмена"
//     button_nom.textContent = "Сохранить";
//     button_nom.onclick = function () { saveRowIp(this); };
//   }
  
//   function saveRowIp(button_nom) {
//     // получаем строку таблицы, в которой находится кнопка
//     var row = button_nom.parentNode.parentNode;
//     // получаем значения из инпутов
//     var newproductTypeInput = row.cells[0].childNodes[0].value;
//     var newproductSubtypeInput = row.cells[1].childNodes[0].value;
//     var newcategoryInput = row.cells[2].childNodes[0].value;
//     var newlowerLimitInput = row.cells[3].childNodes[0].value;
//     var newupperLimitInput = row.cells[4].childNodes[0].value;
//     var newmarkupPercentageInput = row.cells[5].childNodes[0].value;
//     // заменяем инпуты на значения
//     row.cells[0].innerHTML = newproductTypeInput;
//     row.cells[1].innerHTML = newproductSubtypeInput;
//     row.cells[2].innerHTML = newcategoryInput;
//     row.cells[3].innerHTML = newlowerLimitInput;
//     row.cells[4].innerHTML = newupperLimitInput;
//     row.cells[5].innerHTML = newmarkupPercentageInput;
  
//     let data = {"product_type": newproductTypeInput, "product_subtype": productSubtype, "category" : newcategoryInput, "lower_limit" : newlowerLimitInput, "upper_limit" : newupperLimitInput, "markup_lercentage" : newmarkupPercentageInput}
//       if (data['product_type'] != '' && data['product_subtype'] != '' && data['category'] != '' && data['lower_limit'] != '' && data['upper_limit'] != '' && data['markup_lercentage'] != '') {
//         console.log( row.id)
  
//         fetch('http://192.168.1.102:8080/typemarkup/' + row.id, {
//         method: 'PUT',
//         headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(data)
//   })
  
//       }
//     // заменяем кнопки "Сохранить" и "Отмена" на кнопку "Изменить"
//     button_nom.textContent = "Изменить";
//     button_nom.onclick = function () { editRowIp(this); };
//     row.cells[3].innerHTML = '<button onclick="editRowIp(this)">Изменить</button>';
//   }
// // Конец отрисовки таблицы из справочника цена для видов товара
