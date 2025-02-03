
const submitButton = document.querySelector('.btn');
const popup = document.querySelector('.popup');
const okButton = popup.querySelector('button');


submitButton.addEventListener('click', () => {
  popup.style.display = 'block';
});


okButton.addEventListener('click', () => {
  popup.style.display = 'none';
});


popup.style.display = 'none';
