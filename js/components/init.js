// init.js

import { configureButtons } from './button.js';
import { setupFormHandler } from './formHandler.js';
import { initializeProductConfigurator } from './productConfigurator.js';

export function initApp() {
  // Inicjalizowanie komponentów
  console.log("Aplikacja jest gotowa do użycia!");
  configureButtons();             // Inicjalizacja przycisków
  setupFormHandler();             // Inicjalizacja formularzy
  initializeProductConfigurator(); // Inicjalizacja konfiguratora produktu
}
