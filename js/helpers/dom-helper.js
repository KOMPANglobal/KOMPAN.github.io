// Funkcja do znajdowania elementu po ID
function getElementById(id) {
  return document.getElementById(id);
}

// Funkcja do tworzenia nowego elementu
function createElement(tag) {
  return document.createElement(tag);
}

// Funkcja do dodawania klasy do elementu
function addClass(element, className) {
  element.classList.add(className);
}

// Funkcja do usuwania klasy z elementu
function removeClass(element, className) {
  element.classList.remove(className);
}

// Funkcja do ustawiania tekstu w elemencie
function setText(element, text) {
  element.textContent = text;
}

// Funkcja do ustawiania atrybutu w elemencie
function setAttribute(element, attr, value) {
  element.setAttribute(attr, value);
}

// Funkcja do ukrywania elementu
function hideElement(element) {
  element.style.display = 'none';
}

// Funkcja do pokazywania elementu
function showElement(element) {
  element.style.display = 'block';
}
