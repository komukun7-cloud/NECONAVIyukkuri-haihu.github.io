const text = document.querySelector('#text');
const sounds = document.querySelector('#text_s');

text.addEventListener('click', () => {
  sounds.currentTime = 0;
  sounds.play();
});

