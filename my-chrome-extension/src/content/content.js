// O contador de cliques que será injetado na página
let clickCount = 0;

// Ouve os cliques em qualquer lugar do documento
document.addEventListener('click', () => {
  clickCount++;
});

// Ouve mensagens da extensão
chrome.runtime.onMessage.addListener(
  (request, sender, sendResponse) => {
    // Se a mensagem for 'GET_COUNT', retorna a contagem atual
    if (request.action === "GET_COUNT") {
      sendResponse({ count: clickCount });
    }
  }
);