const updateBtn = document.getElementById('update-btn');
const countDisplay = document.getElementById('count-display');

updateBtn.addEventListener('click', async () => {
  // Obtém a guia ativa
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  if (tab) {
    // Envia uma mensagem para o content script da guia ativa
    chrome.tabs.sendMessage(tab.id, { action: "GET_COUNT" }, (response) => {
      if (response && response.count !== undefined) {
        countDisplay.textContent = response.count;
      } else {
        countDisplay.textContent = 'Erro ao obter contagem.';
      }
    });
  }
});