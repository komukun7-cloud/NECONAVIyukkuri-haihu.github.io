const imager = document.querySelector('#marisa');
const soundr = document.querySelector('#marisa_s');

imager.addEventListener('click', () => {
  soundr.currentTime = 0;
  soundr.play();
});

