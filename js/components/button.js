// button.js

export function configureButtons() {
  const button = document.getElementById('submit-btn');
  if (button) {
    button.addEventListener('click', handleButtonClick);
  }
}

function handleButtonClick(event) {
  event.preventDefault();
  console.log('Przycisk kliknięty!');
  // Możesz tu dodać logikę, np. walidację formularza, wysyłanie danych
}
