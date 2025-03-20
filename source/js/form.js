// const form = document.querySelector('.form');

// form.addEventListener('submit', function (event) {
//   if (!this.checkValidity()) {
//     event.preventDefault(); // Остановить отправку формы
//     handleValidation(event);
//   }
// });

// function handleValidation(event) {
//   const formTexts = form.querySelectorAll('.form__text'); // Получаем все label.form__text

//   formTexts.forEach((formText) => { // Для каждого label...
//     const input = formText.querySelector('.form__input'); // ...находим input
//     const error = formText.querySelector('.form__error'); // ...находим span.form__error

//     let errorMessage = ''; // Сообщение об ошибке по умолчанию
//     if (input.type === 'text') {
//       errorMessage = 'Поле должно содержать только буквы и пробелы.';
//     } else if (input.type === 'tel') {
//       errorMessage = 'Номер телефона должен содержать от 10 до 11 цифр.';
//     }

//     validateField(input, error, errorMessage); // Запускаем валидацию
//   });
// }

// function validateField(inputElement, errorElement, errorMessage) {
//   if (inputElement.validity.valueMissing) {
//     errorElement.textContent = 'Пожалуйста, заполните это поле.';
//   } else if (!inputElement.checkValidity()) {
//     errorElement.textContent = errorMessage;
//   } else {
//     errorElement.textContent = '';
//   }

//   if (inputElement.validity.valid) {
//     inputElement.classList.remove('invalid'); // Убираем класс invalid, если валидно
//   } else {
//     inputElement.classList.add('invalid'); // Добавляем класс invalid, если не валидно
//   }
// }

