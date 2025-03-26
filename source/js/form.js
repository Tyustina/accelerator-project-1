const form = document.querySelector('.form');
const inputName = form.querySelector(`input[name='name']`);
const inputTel = form.querySelector(`input[name='tel']`);
const inputNamePattern = /^[a-zA-Zа-яА-Я\s]+/;
const inputTelPattern = /^[0-9]$/;

inputName.addEventListener('invalid', () => {
  // e.preventDefault();

  const nameValue = inputName.value;
  const isValidName = inputNamePattern.test(nameValue);

  if(!isValidName) {
    console.log('Invalid name');
  }else {
    console.log('Valid name');
  }
});

inputTel.addEventListener('invalid', () => {
  // e.preventDefault();

  const telValue = inputTel.value;
  const isValid = inputTelPattern.test(telValue);

  if(!isValid) {
    console.log('Invalid name');
  }else {
    console.log('Valid name');
  }
});
