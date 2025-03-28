const form = document.querySelector('.form');
const nameInput = form.querySelector('.form__input--name');
const telInput = form.querySelector('.form__input--tel');
const nameError = form.querySelector('.form__error--name');
const telError = form.querySelector('.form__error--tel');

nameInput.addEventListener('invalid', (e) =>{
  e.preventDefault();
  nameInput.classList.add('form__input--error');
  nameError.textContent = 'Имя может содержать только буквы и пробелы';
});

telInput.addEventListener('invalid', (e) =>{
  e.preventDefault();
  telInput.classList.add('form__input--error');
  telError.textContent = 'Введите полный номер телефона';
});
