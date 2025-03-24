const videoContainer = document.querySelector('.video');
const videoButton = videoContainer.querySelector('.video__button');
const videoLink = videoContainer.querySelector('.video__link');
const videoPlaceholder = videoContainer.querySelector('.video__placeholder');

const videoURL = 'https://www.youtube.com/embed/9TZXsZItgdw?si=-0rn2RyAriNlx1fp?autoplay=1';// Замените на URL вашего видео

videoButton.addEventListener('click', () => {
  // Создаем iframe с нужными атрибутами
  videoLink.src = videoURL;
  videoLink.setAttribute('allow', 'autoplay'); // Needed for some browsers to autoplay.
  // Скрываем placeholder и кнопку
  videoPlaceholder.style.display = 'none';
  videoButton.style.display = 'none';
});
