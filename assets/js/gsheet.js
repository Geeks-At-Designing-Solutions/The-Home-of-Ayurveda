
const scriptURL = 'https://script.google.com/macros/s/AKfycbyNMWCqylD3dgsWubI2AoU1Uv1GUnr64N3bz7uY55GzdMhr8tdQ8QdK1nyVQgwL0JU/exec'
const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => {  window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})
