const button = document.querySelector('.price_row-btn');
const form = document.querySelector('#priceform');
const popup = document.querySelector('#price-popup');
const close_button = document.querySelector('.price_close_btn');

button.addEventListener('click', () => {

    form.classList.add('open');
    popup.classList.add('popup_open');
});

close_button.addEventListener('click', () => {

    form.classList.remove('close');
    popup.classList.remove('popup_open');
});


const nalog_gtn = document.querySelector('#nalog-btn');
const form_nalog = document.querySelector('#nalog-form');
const popup_nalog = document.querySelector('#nalog-popup');
const close_button_nalog = document.querySelector('.nalog_close_btn');

nalog_gtn.addEventListener('click', () => {
    console.log('jhgfghjmhfghjmk')
    form_nalog.classList.add('open');
    popup_nalog.classList.add('popup_open');
});

close_button_nalog.addEventListener('click', () => {
    form_nalog.classList.remove('close');
    popup_nalog.classList.remove('popup_open');
});