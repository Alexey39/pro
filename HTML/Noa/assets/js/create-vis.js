const button = document.querySelector('.form_rounding-btn');
const form = document.querySelector('#rounding_blablabla');
const popup = document.querySelector('.rounding_popup');
const close_button = document.querySelector('.rounding_close_btn');

button.addEventListener('click', () => {
    console.log('rqrqrqrqrqeqwe');
    form.classList.add('open');
    popup.classList.add('rounding_popup_open');
});

close_button.addEventListener('click', () => {
    console.log('qeqwe');
    form.classList.remove('close');
    popup.classList.remove('rounding_popup_open');
  });

const thresholds_button = document.querySelector('.form_thresholds-btn');
const thresholds_form = document.querySelector('#thresholds_blablabla');
const thresholds_popup = document.querySelector('.thresholds_popup');
const thresholds_close_button = document.querySelector('.thresholds_close_btn');

    thresholds_button.addEventListener('click', () => {
    console.log('rqrqrqrqrqeqwe');
    thresholds_form.classList.add('open');
    thresholds_popup.classList.add('thresholds_popup_open');
});

    thresholds_close_button.addEventListener('click', () => {
    console.log('qeqwe');
    thresholds_form.classList.remove('close');
    thresholds_popup.classList.remove('thresholds_popup_open');
  });