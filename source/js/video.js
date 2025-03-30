const videoContainer = document.querySelector('.video');
const videoButton = videoContainer.querySelector('.video__button');
const videoLink = videoContainer.querySelector('.video__link');
const videoPlaceholder = videoContainer.querySelector('.video__placeholder');

const videoURL = 'https://www.youtube.com/embed/9TZXsZItgdw?si=j-uixdShC64SU4wE&autoplay=1';

function playVideo () {
  // videoLink.src = videoURL;
  videoLink.innerHTML = `
  <iframe width="100%" height="100%"
    src="https://www.youtube.com/embed/9TZXsZItgdw?si=j-uixdShC64SU4wE&autoplay=1"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer;
    autoplay;
    clipboard-write;
    encrypted-media;
    gyroscope;
    picture-in-picture;
    web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen>
  </iframe>
`;

  videoPlaceholder.style.display = 'none';
  videoButton.style.display = 'none';
  videoContainer.classList.add('video--no-after');
}

videoButton.addEventListener('click', playVideo);
