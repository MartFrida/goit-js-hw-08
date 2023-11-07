import throttle from "lodash.throttle";

const feedbackForm = document.querySelector('form.feedback-form');
const fdbForm = {};

// Під час завантаження сторінки перевіряй стан сховища, і якщо там є збережені дані, заповнюй ними поля форми. В іншому випадку поля повинні бути порожніми.

const fillFeedbackForm = () => {
  const dataForm = JSON.parse(localStorage.getItem('feedback-form-state'));
  console.log(dataForm);

  if (dataForm === null) return;

  for (const key in dataForm) {
    if (dataForm.hasOwnProperty(key)) {
      feedbackForm.elements[key].value = dataForm[key];
    }
  }

}
fillFeedbackForm();

// Відстежуй на формі подію input, і щоразу записуй у локальне сховище об'єкт з полями email і message, у яких зберігай поточні значення полів форми. Нехай ключем для сховища буде рядок "feedback-form-state".

feedbackForm.addEventListener('input', throttle((ev) => {
  fdbForm[ev.target.name] = ev.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(fdbForm));
}, 500)

)

// Під час сабміту форми очищуй сховище і поля форми, а також виводь у консоль об'єкт з полями email, message та їхніми поточними значеннями.

feedbackForm.addEventListener('submit', (ev) => {
  ev.preventDefault();
  // console.log(localStorage['feedback-form-state']);
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')))

  feedbackForm.reset();
  // localStorage.clear();
  localStorage.removeItem('feedback-form-state');

})