// Importowanie bibliotek i frameworków
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Importowanie komponentów
import Header from './components/Header';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import MainContent from './components/MainContent';
import Form from './components/Form';
import Gallery from './components/Gallery';
import Chatbot from './components/Chatbot';
import NotFound from './components/NotFound';

// Importowanie funkcji pomocniczych
import { handleButtonClick, initializeChatbot, initializeGallery, initializeForm } from './helpers';

// Funkcja inicjalizująca aplikację
function initApp() {
  ReactDOM.render(
    <React.StrictMode>
      <Router>
        <Header />
        <Navigation />
        <Switch>
          <Route exact path="/" component={MainContent} />
          <Route path="/form" component={Form} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/chatbot" component={Chatbot} />
          {/* Dodaj więcej tras według potrzeb */}
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </Router>
    </React.StrictMode>,
    document.getElementById('root')
  );

  // Obsługa zdarzeń i interakcji
  handleButtonClick('.my-button', () => {
    alert('Przycisk został kliknięty!');
  });

  // Inicjalizacja logiki aplikacji
  initializeChatbot(Chatbot);
  initializeGallery(Gallery);
  initializeForm(Form);
}

// Wywołanie funkcji inicjalizującej
initApp();