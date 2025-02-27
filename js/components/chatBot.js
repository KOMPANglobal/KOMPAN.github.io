// chatBot.js

export function initializeChatBot() {
  const chatButton = document.getElementById('chat-btn');
  chatButton.addEventListener('click', toggleChat);
}

function toggleChat() {
  const chatWindow = document.getElementById('chat-window');
  chatWindow.style.display = (chatWindow.style.display === 'none' || !chatWindow.style.display) ? 'block' : 'none';
}
