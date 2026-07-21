# 📸 Front-End — Reconhecimento Facial

Interface Web Interativa desenvolvida para captura de imagem via webcam, tratamento de iluminação e alinhamento em tempo real, validação de qualidade e identificação de alunos integrada à [API Service Reconhecimento Facial](https://github.com/EversonBacelli/service_reconhecimento_facial). Desenvolvida no contexto da matéria de Processamento de Imagem e Visão Computacional no Curso de Mestrado em Ciência da Computação na Universidade Federal do ABC (UFABC).

---

## 📌 Sumário

- [Visão Geral](#-visão-geral)
- [Arquitetura e Mapeamento de Componentes](#-arquitetura-e-mapeamento-de-componentes)
- [Fluxo de Funcionamento](#-fluxo-de-funcionamento)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Endpoints Consumidos](#-endpoints-consumidos)
- [Como Executar](#-como-executar)
- [Autor](#-autor)

---

## 📖 Visão Geral

Este projeto oferece uma interface amigável que permite capturar o feed da câmera do usuário, ajustar aspectos visuais da imagem (brilho e rotação) via inteligência artificial e autenticar/identificar alunos cadastrados na base de dados.

---

## 🎨 Arquitetura e Mapeamento de Componentes

### 1. Barra Lateral (Status da Qualidade)
- **Indicadores Visuais:** `BRILHO`, `CONTRASTE`, `FOCO` e `FACE`.
- **Comportamento:** Atualiza os LEDs/indicadores dinamicamente após a validação da imagem ou aplicação dos tratamentos visuais.

### 2. Painel Principal
- **Área Superior de Vídeo/Preview:** Exibe o *feed* da webcam em tempo real ou a foto estática congelada para processamento.
- **Barra de Ações Rápidas:**
  - ☀️ **`MELHORAR BRILHO`:** Ajusta a iluminação de fotos escuras ou superexpostas.
  - 🔄 **`MELHORAR ROTAÇÃO`:** Aplica alinhamento facial automático com base nos pontos de referência dos olhos.
- **Seção DADOS PESSOAIS:**
  - **Campos:** `MATRÍCULA`, `NOME`, `CURSO`, `TURMA`, `TURNO` e porcentagem de `MATCH`.
  - **Comportamento:** Preenchida automaticamente quando a pessoa capturada é identificada no sistema.

### 3. Ações Principais
- 📷 **`CAPTURAR`:** Congela o *frame* atual da webcam e o converte em uma string `Base64`.
- ✅ **`VALIDAR`:** Envia a foto em `Base64` para checagem de qualidade e busca por correspondência na base de dados.

---

📋 Detalhamento das Etapas
1. Captura e Avaliação da Imagem:
- O usuário realiza a captura da imagem e o sistema realiza a avaliação da imagem via API, apresentando um status em termos de Brilho, Contraste, Foco e Presença de Face. Informações essas inclusas diretamente na barra lateral o container principal.

<img src="https://githubusercontent.com" width="18" height="18" />
Fluxo de Excessão: Caso a imagem não atenda aos critérios mínimos, o usuário é notificado imediatamente para realizar uma nova captura com o botão reiniciar.

2. Correção Manual:
A partir da imagem capturada e da avaliação, o usuário pode requisitar correções de brilho e/ou rotação que será realiza via API.
Ao requisitar uma correção, a nova imagem com as alterações serão apresentada junto com a versão anterior e o usuário clicando poderá selecionar aquela que continuará no sistema para validação

3. Consulta e Validação na Base
A imagem processada é enviada para comparação com aquelas presentes  na base de dados.

Sucesso: Os dados cadastrais/correspondentes são exibidos na tela.
Falha: Apresenta uma mensagem clara de erro com o botão "Tentar Novamente", redirecionando o usuário de volta para a câmara.



🔗 Endpoints Consumidos
A aplicação comunica-se com a API Backend Flask através dos seguintes serviços:
** SERVER - localhost:127.0.0.1 **
Rota: /qualityImage
- Método POST
- Descrição: Recebe uma imagem no formato base64, o converte em tons de cinza e realizada uma avaliação quanto de brilho, constraste, foco e presença de fase

Rota:  /atualizarBrilho
- Método: POST
- Descrição: Processa e melhora a iluminação da foto enviada.

Rota: /corrigirRotacao
- Método: POST
- Descrição: Alinha o rosto detectado com base na posição dos olhos.

Rota: /comparar
- Método: POST
Descrição: Compara o vetor facial (embedding) e retorna os dados do aluno cadastrado ou mensagem de erro.



🛠️ Tecnologias Utilizadas
Front-End: HTML5, CSS3, JavaScript (ES6+)
Manipulação de Mídia: MediaDevices API (getUserMedia)
Comunicação HTTP: Fetch API 
Formato de Transmissão: JSON & Base64

👤 Autor
Desenvolvido por EversonBacelli 📧 Contato: everson.wilian29@gmail.com
🐙 GitHub: @EversonBacelli
