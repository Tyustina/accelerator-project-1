const form = document.querySelector('.form');
const nameInput = form.querySelector('.form__input--name');
const telInput = form.querySelector('.form__input--tel');
const nameRegex = /^[a-zа-яё\s-]+$/i;
const telRegex = /^[+78][0-9]{10}$/;
const nameError = form.querySelector('.form__error--name');
const telError = form.querySelector('.form__error--tel');


form.addEventListener('submit', (e) => {
  e.preventDefault();

  let isValid = true;

  if (!nameRegex.test(nameInput.value)) {
    nameError.textContent = 'Ошибка валидности имени!';
    isValid = false;
  } else {
    nameError.textContent = '';
  }

  if (!telRegex.test(telInput.value)) {
    telError.textContent = 'Ошибка валидности номера';
    isValid = false;
  } else {
    telError.textContent = '';
  }

  if (isValid) {
  } else {
    e.preventDefault();
  }
});
