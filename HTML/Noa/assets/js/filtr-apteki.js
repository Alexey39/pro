function getFormFiltr()
{
    table = document.getElementById("apteki_table");
    table.addEventListener('keyup', function(e) {
      let target = e.target;
      input = document.getElementsByClassName(target.className)[0];
      filter = input.value.toUpperCase();
    
      console.log(filter);
      if (target.tagName == "INPUT") {
        let num = +target.className;
    
        tr = table.getElementsByTagName("tr");
        for (i = 0; i < tr.length; i++) {
          td = tr[i].getElementsByTagName("td")[num];
          if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
              tr[i].style.display = "";
            } else {
              tr[i].style.display = "none";
            }
          }
        }
      }
    });
}
let button = document.querySelector('.filtr-btn')
button.onclick = () => getFormFiltr