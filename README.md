Click Counter
Uma extensão simples para o Google Chrome (Manifest V3) que conta o número de cliques em qualquer página web. Este projeto foi desenvolvido como parte de um exercício prático para aprender sobre as APIs de extensão do Chrome, Service Workers e Content Scripts.

<br>

🚀 Funcionalidade
Ao ser ativada, a extensão injeta um script em todas as páginas web. Este script monitora e conta todos os cliques feitos pelo usuário. Quando o ícone da extensão é clicado, um popup exibe a contagem atual de cliques na guia ativa.

<br>

📦 Estrutura do Projeto
A estrutura de pastas segue as boas práticas de desenvolvimento de extensões para o Chrome, organizando os componentes de forma lógica.

my-chrome-extension/
├─ src/
│  ├─ popup/
│  │  ├─ popup.html     ← UI do popup (o que o usuário vê)
│  │  ├─ popup.js       ← Lógica para interagir com o popup e a página
│  │  └─ popup.css      ← Estilo para o popup
│  ├─ content/
│  │  └─ content.js     ← Script injetado na página para contar cliques
│  └─ background/
│     └─ service-worker.js ← Lógica de eventos em segundo plano
├─ icons/
│  ├─ icon16.png
│  ├─ icon32.png
│  ├─ icon48.png
│  └─ icon128.png
├─ docs/              ← Arquivos para a página do GitHub Pages
│  └─ index.html
├─ manifest.json      ← O "coração" da extensão, com todas as configurações
├─ README.md          ← Este arquivo
└─ LICENSE            ← Licença do projeto
<br>

🛠️ Como Instalar (Modo Desenvolvedor)
Siga estes passos para carregar e testar a extensão no seu navegador Chrome:

Clone este repositório para o seu computador ou baixe o arquivo .zip e descompacte-o.

Abra o Chrome e navegue até chrome://extensions.

No canto superior direito, ative o "Modo do desenvolvedor".

Clique no botão "Carregar sem compactar" (ou "Load unpacked").

Selecione a pasta raiz do projeto (my-chrome-extension).

O ícone da extensão aparecerá na sua barra de ferramentas.

<br>

📄 Permissões
Esta extensão requer as seguintes permissões para funcionar corretamente:

storage: Para armazenar dados da extensão de forma persistente.

activeTab: Para se comunicar com a guia ativa e obter a contagem de cliques.

host_permissions (<all_urls>): Permite a injeção do content script em todas as páginas web.

<br>

⚖️ Licença
Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.
