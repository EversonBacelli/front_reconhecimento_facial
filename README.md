# 📸 Front-End — Reconhecimento Facial

Interface web interativa desenvolvida para captura de imagem via webcam, tratamento de iluminação e alinhamento em tempo real, validação de qualidade e identificação de alunos integrada à [API Service Reconhecimento Facial](https://github.com/EversonBacelli/service_reconhecimento_facial).

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
1. Captura e Validação de Dimensões
O usuário realiza a captura da imagem.

O sistema valida instantaneamente as dimensões e métricas de qualidade.

Caso a imagem não atenda aos critérios mínimos, o usuário é notificado imediatamente para realizar uma nova captura.

2. Processamento Automático (Background)
Sem Intervenção Manual: Elimina a tela de comparação lado a lado e os botões manuais de ajuste de brilho/rotação.

Auto-Aprimoramento: O algoritmo ajusta a orientação (rotação) e melhora o brilho/contraste automaticamente na versão capturada de forma transparente antes do envio.

3. Consulta e Validação na Base
A imagem processada é enviada para validação contra a base de dados.

Sucesso: Os dados cadastrais/correspondentes são exibidos na tela.

Falha: Apresenta uma mensagem clara de erro com o botão "Tentar Novamente", redirecionando o usuário de volta para a câmara.



🔗 Endpoints Consumidos
A aplicação comunica-se com a API Backend Flask através dos seguintes serviços:
Rota
Método
Descrição
/qualityImage
POST
Analisa foco, brilho e enquadramento da imagem.
/atualizarBrilho
POST
Processa e melhora a iluminação da foto enviada.
/corrigirRotacao
POST
Alinha o rosto detectado com base na posição dos olhos.
/comparar
POST
Compara o vetor facial (embedding) e retorna os dados do aluno cadastrado.



🛠️ Tecnologias Utilizadas
Front-End: HTML5, CSS3, JavaScript (ES6+)
Manipulação de Mídia: MediaDevices API (getUserMedia)
Comunicação HTTP: Fetch API 
Formato de Transmissão: JSON & Base64

👤 Autor
Desenvolvido por EversonBacelli 📧 Contato: everson.wilian29@gmail.com
🐙 GitHub: @EversonBacelli
