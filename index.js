const email = document.querySelector('.input');
const error = document.querySelector('#error');

function handleChange(e) {
  const myRegex = /^([A-z0-9\-])+@(gmail|outlook|hotmail)\.com$/;
  const isValid = myRegex.test(e.target.value);
  const inputIsEmpty = email.value.length == 0;

  if (!inputIsEmpty && !isValid) {
    error.style.display = 'block';
    email.style.borderColor = 'var(--light-red)';
  } else if (inputIsEmpty || isValid) {
    error.style.display = 'none';
    email.style.borderColor = 'var(--pale-blue)';
  }
}

email.addEventListener('change', handleChange);
