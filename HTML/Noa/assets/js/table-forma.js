const button = document.querySelector('.row-btn');
const form = document.querySelector('#ip-form');
const popup = document.querySelector('#ip-popup');
const close_button = document.querySelector('.close_btn');

button.addEventListener('click', () => {
    form.classList.add('open');
    popup.classList.add('popup_open');
});

close_button.addEventListener('click', () => {
    form.classList.remove('close');
    popup.classList.remove('popup_open');
});

const button_filtr = document.querySelector('.filtr-btn');
const form_filtr = document.querySelector('#albalbalb');
const popup_filtr = document.querySelector('.popup_filtr');
const close_button_filtr = document.querySelector('.close_btn_filtr');

button_filtr.addEventListener('click', () => {
    console.log('rqrqrqrqrqeqwe');
    form_filtr.classList.add('open');
    popup_filtr.classList.add('popup_open_filtr');
});

close_button_filtr.addEventListener('click', () => {
    console.log('qeqwe');
    form_filtr.classList.remove('close');
    popup_filtr.classList.remove('popup_open_filtr');
});