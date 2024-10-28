const myForm = document.querySelector('form');

//const height = parseInt(document.querySelector('#height').value)
//this usecase will give empty value

myForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);

  const weight = parseInt(document.querySelector('#weight').value);

  const results = document.querySelector('#results');

  if (height === '' || height<30 || isNaN(height)){
  results.innerHTML = `Please give a valid Height ${height}`;
}

if (weight === '' || weight<5 || isNaN(weight)){
  results.innerHTML = `Please give a valid Weight ${weight}`;
}

else{
  const bmi = (weight / ((height*height)/10000).toFixed(2))
  results.innerHTML = `<span>${bmi}</span>`
}

});
