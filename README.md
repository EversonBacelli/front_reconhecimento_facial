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

## 🔄 Fluxo de Funcionamento

```text
[ Feed da Câmera ]
        │
        ▼
   [ CAPTURAR ] ──► Congela a imagem e gera o Base64
        │
        ├──► [ MELHORAR BRILHO ]  ──► Chama /atualizarBrilho  ──► Atualiza Preview & LED Brilho
        ├──► [ MELHORAR ROTAÇÃO ] ──► Chama /corrigirRotacao  ──► Atualiza Preview & LED Face
        │
        ▼
   [ VALIDAR ]  ──► 1. /qualityImage ──► Atualiza LEDs laterais (Brilho, Contraste, Foco, Face)
                ──► 2. /comparar     ──► Preenche os DADOS PESSOAIS + Porcentagem de MATCH



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
