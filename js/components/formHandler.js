// formHandler.js

export function setupFormHandler() {
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', handleFormSubmit);
  }
}

function handleFormSubmit(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  console.log('Formularz wysłany:', formData);
  // Logika wysyłania danych formularza do API lub dalsza walidacja
}
