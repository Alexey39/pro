const ooo_button = document.querySelector('.ooo-btn');
const ooo_form = document.querySelector('#ooo-form');
const ooo_popup = document.querySelector('#ooo-popup');
const ooo_close_button = document.querySelector('.ooo_close_btn');

ooo_button.addEventListener('click', () => {
    console.log('rqrqrqrqrqeqwe');
    ooo_form.classList.add('open');
    ooo_popup.classList.add('popup_open');
});

ooo_close_button.addEventListener('click', () => {
    console.log('qeqwe');
    ooo_form.classList.remove('close');
    ooo_popup.classList.remove('popup_open');
});

const ooo_button_filtr = document.querySelector('.ooofiltr-btn');
const form_filtrooo = document.querySelector('#lablablab');
const popup_filtrooo = document.querySelector('.#popup_filtrooo');
const close_button_filtrooo = document.querySelector('.oooclose_btn');

ooo_button_filtr.addEventListener('click', () => {
    console.log('rqrqrqrqrqeqwe');
    form_filtrooo.classList.add('open');
    popup_filtrooo.classList.add('popup_open_filtrooo');
});

close_button_filtrooo.addEventListener('click', () => {
    console.log('qeqwe');
    form_filtrooo.classList.remove('close');
    popup_filtrooo.classList.remove('popup_open_filtrooo');
});