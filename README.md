<h1 align="center">
  Manage Participations
</h1>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/JonasCastro/fullstack-challenge-cotabox?color=%2304D361">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/JonasCastro/fullstack-challenge-cotabox">

 
  <a href="https://github.com/JonasCastro/fullstack-challenge-cotabox/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/JonasCastro/fullstack-challenge-cotabox">
  </a>
    
   <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">

  <a href="https://www.linkedin.com/in/jonas-castro-b4044111a/">
    <img alt="Feito por Jonas" src="https://img.shields.io/badge/feito%20por-Jonas-%237519C1">
  </a>
  
 
 
</p>

<h4 align="center"> 
	🚧  Manage Participations 📊 Concluído ✅ 🚧
</h4>

<p align="center">
 <a href="#-sobre-o-projeto">Sobre</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
 <a href="#wrench-funcionalidades">Funcionalidades</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
 <a href="#-layout">Layout</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
 <a href="#-como-executar-o-projeto">Como executar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
 <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
 <a href="#autor">Autor</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
 <a href="#memo-licença">Licença</a>
</p>

## 💻 Sobre o projeto

:bar_chart: Manage Participations - tem como objetivo registrar participantes e seu percentual de participação representando essa distribuição em um gráfico de pizza.

---


## :wrench: Funcionalidades

- [x] É possível registrar participantes na plataforma web enviando:
  - [x] primeiro nome do participante
  - [x] sobrenome do participante
  - [x] percentual de participação

---

## 🎨 Layout

<p align="center" style="display: flex; align-items: flex-start; justify-content: center;">
  <img alt="Demo" title="#Demo" src="./assets/demo.gif" width="400px">
</p>

---

## 🚀 Como executar o projeto

Este projeto é divido em duas partes:
1. Backend (pasta server) 
2. Frontend (pasta web)

💡O Frontend precisa que o Backend esteja sendo executado para funcionar.

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/), [MongoDB](https://www.mongodb.com/).

### Primeiro Passo

```bash

# Clone este repositório
$ git clone https://github.com/JonasCastro/fullstack-challenge-cotabox.git

# Acesse a pasta do projeto no terminal/cmd
$ cd fullstack-challenge-cotabox

```

#### 🎲 Rodando o Backend (servidor)

```bash

# Vá para a pasta backend
$ cd backend

# Instale as dependências
$ yarn

# Execute a aplicação em modo de desenvolvimento
$ yarn dev:server

# O servidor inciará na porta:3333

# Para executar os teste
$ yarn test

```
<p align="center">
  <a href="https://github.com/JonasCastro/fullstack-challenge-cotabox/assets/insomnia_API.json" target="_blank"><img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia"></a>
</p>


#### 🧭 Rodando a aplicação web (Frontend)

```bash

# Vá para a pasta da aplicação Front End
$ cd front

# Instale as dependências
$ yarn

# Execute a aplicação em modo de desenvolvimento
$ yarn start

# A aplicação será aberta na porta:3000 - acesse http://localhost:3000

```
#### 💉 Testes da aplicação

```bash
# Para executar os teste
$ yarn test

```
Testes Backend

- **`should be able to list the users`**: A aplicação deve permitir que seja retornado um array com todos os participantes que foram criados até o momento.

- **`should be able to create a new user`**: A aplicação deve permitir que um participante seja criado.

- **`should be able to delete the user`**:  A aplicação deve permitir que um participante seja deletado.

- **`should not be able to delete a user that does not exist`**: A aplicação não deve poder excluir um participante que não existe. Caso não exista, retornar um erro com status `400`.

---

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

#### **Website**  ([React](https://reactjs.org/)  +  [TypeScript](https://www.typescriptlang.org/))

-   **[React Router Dom](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom)**
-   **[React Icons](https://react-icons.github.io/react-icons/)**
-   **[Axios](https://github.com/axios/axios)**
-   **[Styled Components](https://styled-components.com/)**
-   **[Unform](https://unform.dev/)**
-   **[Yup](https://github.com/jquense/yup)**
-   **[Polished](https://polished.js.org/)**

> Veja o arquivo  [package.json](https://github.com/JonasCastro/fullstack-challenge-cotabox/blob/master/front/package.json)

#### [](https://github.com/JonasCastro/fullstack-challenge-cotabox#server-nodejs--typescript)**Server**  ([NodeJS](https://nodejs.org/en/)  +  [TypeScript](https://www.typescriptlang.org/))

-   **[Express](https://expressjs.com/)**
-   **[CORS](https://expressjs.com/en/resources/middleware/cors.html)**
-   **[MongooseJS](https://mongoosejs.com/)**
-   **[MongoDB](https://www.mongodb.com/)**
-   **[ts-node](https://github.com/TypeStrong/ts-node)**
-   **[Celebrate](https://github.com/arb/celebrate)**
-   **[ExpressAsyncErrors](https://www.npmjs.com/package/express-async-errors)**
-   **[Tsyringe](https://github.com/microsoft/tsyringe)**
-   **[JestJS](https://jestjs.io/)**


> Veja o arquivo  [package.json](https://github.com/jonasCastro/fullstack-challenge-cotabox/blob/master/backend/package.json)

#### [](https://github.com/tgmarinho/Ecoleta#utilit%C3%A1rios)**Utilitários**


💡 Sugestão editor para trabalhar com o código: 
  - [VSCode](https://code.visualstudio.com/)
    - [EditorConfig](https://editorconfig.org/)
    - [ESLint](https://eslint.org/)

-   Gráficos:  **[ChartJS](https://www.chartjs.org/)**
-   Editor:  **[Visual Studio Code](https://code.visualstudio.com/)**  → Extensions:  **[ESlintJS](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)**, **[EditorConfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)**
-   Markdown:  **[StackEdit](https://stackedit.io/)**,  **[Markdown Emoji](https://gist.github.com/rxaviers/7360908)**
-   Teste de API:  **[Insomnia](https://insomnia.rest/)**
-   Ícones:  **[Feather Icons](https://feathericons.com/)**
-   Fontes:  **[Roboto](https://fonts.google.com/specimen/Roboto)**


---


## Autor

Jonas Castro

[![Linkedin Badge](https://img.shields.io/badge/-Jonas-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/jonas-castro-b4044111a/)](https://www.linkedin.com/in/jonas-castro-b4044111a/) 

[![Gmail Badge](https://img.shields.io/badge/-jonascastro128@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:jonascastro128@gmail.com)](mailto:jonascastro128@gmail.com)

---

## :memo: Licença

Este projeto esta sobe a licença [MIT](./LICENSE).

---
Feito com :blue_heart: por Jonas Castro :wave: [Entre em contato!](https://www.linkedin.com/in/jonas-castro-b4044111a/)
