// import throttle from "lodash.throttle";

const refs = {
  formEl: document.querySelector('form.feedback-form'),
}

refs.formEl.addEventListener('input', onFormElement);

function onFormElement(ev) {
  const userForm = {};
  const formData = new FormData(refs.formEl);
  formData.forEach((value, key) => {
    userForm[key] = value;
    saveLocalStorage('feedback-form-state', userForm);
  })
}

function saveLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function getLocalStorage(key) {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch (err) {
    console.log('error', err);
  }
}

function onLoad() {
  const data = getLocalStorage('feedback-form-state') || {};
  for (const key of Object.keys(data)) {
    refs.formEl.elements[key].value = data[key];
  }
  return data;
}
onLoad();

refs.formEl.addEventListener('submit', (ev) => {
  ev.preventDefault();
  console.log(onLoad())
  localStorage.removeItem('feedback-form-state');
  ev.target.reset();
})