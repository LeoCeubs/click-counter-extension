Click Counter
Uma extensão simples para o Google Chrome (Manifest V3) que conta o número de cliques em qualquer página web. Este projeto foi desenvolvido como parte de um exercício prático para aprender sobre as APIs de extensão do Chrome, Service Workers e Content Scripts.

<br>

🚀 Funcionalidade
Ao ser ativada, a extensão injeta um script em todas as páginas web. Este script monitora e conta todos os cliques feitos pelo usuário. Quando o ícone da extensão é clicado, um popup exibe a contagem atual de cliques na guia ativa.

<br>

📦 Estrutura do Projeto
A estrutura de pastas segue as boas práticas de desenvolvimento de extensões para o Chrome, organizando os componentes de forma lógica.


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


<img width="1024" height="1024" alt="d92ec247-b3ab-4e86-a704-6bc1978b059e" src="https://github.com/user-attachments/assets/0bd977d4-112e-4e59-8a13-0cf919f9bf58" />

<br>

⚖️ Licença
Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.
