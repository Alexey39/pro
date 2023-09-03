const groups_button = document.querySelector('.form_groups-btn');
const groups_form = document.querySelector('#groups_blablabla');
const groups_popup = document.querySelector('.groups_popup');
const groups_close_button = document.querySelector('.groups_close_btn');

groups_button.addEventListener('click', () => {
    console.log('rqrqrqrqrqeqwe');
    groups_form.classList.add('open');
    groups_popup.classList.add('groups_popup_open');
});

groups_close_button.addEventListener('click', () => {
    console.log('qeqwe');
    groups_form.classList.remove('close');
    groups_popup.classList.remove('groups_popup_open');
  });
