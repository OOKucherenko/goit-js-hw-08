const throttle = require('lodash.throttle');
const refs = {
  input: document.querySelector('input'),
  textarea: document.querySelector('textarea'),
  formSubmit: document.querySelector('form'),
  LOCALSTORAGE_KEY: 'feedback-form-state',
};

refs.input.value =
  JSON.parse(localStorage.getItem(refs.LOCALSTORAGE_KEY))?.inputValue || '';

refs.textarea.value =
  JSON.parse(localStorage.getItem(refs.LOCALSTORAGE_KEY))?.textareaValue || '';

let form = {
  inputValue:
    JSON.parse(localStorage.getItem(refs.LOCALSTORAGE_KEY))?.inputValue || '',
  textareaValue:
    JSON.parse(localStorage.getItem(refs.LOCALSTORAGE_KEY))?.textareaValue ||
    '',
};

const handleInput = e => {
  form.inputValue = e.target.value;
  localStorage.setItem(refs.LOCALSTORAGE_KEY, JSON.stringify(form));
};

refs.input.addEventListener('input', throttle(handleInput, 500));

const handleTextarea = e => {
  form.textareaValue = e.target.value;
  localStorage.setItem(refs.LOCALSTORAGE_KEY, JSON.stringify(form));
};

refs.textarea.addEventListener('input', throttle(handleTextarea, 500));

refs.formSubmit.addEventListener('submit', e => {
  e.preventDefault();
  e.currentTarget.reset();
  form = {};
  localStorage.removeItem(refs.LOCALSTORAGE_KEY);
  console.log(form);
});
