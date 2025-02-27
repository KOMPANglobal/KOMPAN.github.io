// apiService.js

export async function fetchData(endpoint) {
  try {
    const response = await fetch(`${CONFIG.apiUrl}/${endpoint}`);
    const data = await response.json();
    console.log('Dane z API:', data);
    return data;
  } catch (error) {
    console.error('Błąd przy ładowaniu danych z API:', error);
  }
}
