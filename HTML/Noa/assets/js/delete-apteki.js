let del_button = document.querySelectorAll('#aptekidelRow')
del_button.onclick = () => console.log('djvbdjv')
let td = del_button.parentElement
del_button.onclick = () => td.parentElement.removeChild()