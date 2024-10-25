const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach((button) => {
  console.log(button);
  button.addEventListener('click', (clickkar) => {
    console.log(clickkar);
    console.log(clickkar.target);
    const meraColor = clickkar.target.id;
    switch (meraColor) {
      case 'grey':
        body.style.backgroundColor = meraColor;
        break;
      case 'white':
        body.style.backgroundColor = meraColor;

        break;
      case 'yellow':
        body.style.backgroundColor = meraColor;
        break;

      case 'blue':
        body.style.backgroundColor = meraColor;
        break;
    }
  });
});
