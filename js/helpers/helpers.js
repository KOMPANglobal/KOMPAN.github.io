// Funkcja do obsługi kliknięcia przycisku
export function handleButtonClick(selector, callback) {
  document.querySelector(selector).addEventListener('click', callback);
}

// Funkcja do inicjalizacji chatbota
export function initializeChatbot(ChatbotComponent) {
  // Logika inicjalizacji chatbota
  console.log('Chatbot initialized:', ChatbotComponent);
}

// Funkcja do inicjalizacji galerii
export function initializeGallery(GalleryComponent) {
  // Logika inicjalizacji galerii
  console.log('Gallery initialized:', GalleryComponent);
}

// Funkcja do inicjalizacji formularza
export function initializeForm(FormComponent) {
  // Logika inicjalizacji formularza
  console.log('Form initialized:', FormComponent);
}