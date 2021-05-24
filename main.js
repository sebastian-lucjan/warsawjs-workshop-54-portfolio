const extraButtonEl = document.querySelectorAll('.button-addtext');
const extraText = document.querySelectorAll('.extra-text');

extraButtonEl.forEach((button, index) => {
  button.addEventListener('click', () => {
    if (extraText[index].className === 'extra-text show') {
      extraText[index].className = 'extra-text hidden';
      console.log(extraText[index].className);
    } else {
      extraText[index].className = 'extra-text show';
    }
  });
});

const firstNavEl = document.getElementById('firstNav');
const firstContainerEl = document.getElementById('firstContainer');

const secondNavEl = document.getElementById('secondNav');
const secondContainerEl = document.getElementById('secondContainer');

firstNavEl.addEventListener('click', () => {
  firstContainerEl.className = 'show';
  secondContainerEl.className = 'hidden';
});

secondNavEl.addEventListener('click', () => {
  firstContainerEl.className = 'hidden';
  secondContainerEl.className = 'show';
});
