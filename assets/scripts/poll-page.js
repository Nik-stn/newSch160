const spanRadio = document.querySelectorAll('.poll-box input[type="radio"]~span');
const spanCheckbox = document.querySelectorAll('.poll-box input[type="checkbox"]~span');

spanRadio.forEach( item => item.classList.add('poll-radio'))
spanCheckbox.forEach( item => item.classList.add('poll-checkbox'))
