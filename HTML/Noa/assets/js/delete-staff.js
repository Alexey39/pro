let del_button = document.querySelectorAll('#staffdelRow')
del_button.onclick = () => console.log('djvbdjv')
let td = del_button.parentElement
del_button.onclick = () => td.parentElement.removeChild()