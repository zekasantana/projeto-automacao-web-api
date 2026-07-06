# 🚀 Projeto de Automação Web e API

![Cypress](https://img.shields.io/badge/Cypress-15-green)
![Cucumber](https://img.shields.io/badge/Cucumber-BDD-brightgreen)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-Passing-success)
![Allure](https://img.shields.io/badge/Report-Allure-orange)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)


Framework de automação de testes desenvolvido com foco em boas práticas de mercado, utilizando Cypress, Cucumber (BDD), Page Object Model, testes de API, GitHub Actions, Allure Report e Docker.

O objetivo deste projeto é demonstrar conhecimentos em automação de testes Web e API, integração contínua (CI/CD), organização de código e arquitetura de testes utilizada em projetos corporativos.

⸻

Tecnologias

* JavaScript
* Node.js
* Cypress
* Cucumber (BDD)
* Page Object Model (POM)
* Git
* GitHub
* GitHub Actions (CI/CD)
* Allure Report
* Docker
* Docker Compose

⸻

Estrutura do Projeto

projeto-automacao-web-api
│
├── cypress
│   ├── e2e
│   ├── fixtures
│   ├── pages
│   ├── reports
│   └── support
│
├── .github
│   └── workflows
│
├── Dockerfile
├── docker-compose.yml
├── .dockerignore
├── cypress.config.js
├── package.json
└── README.md

⸻

Funcionalidades Automatizadas

Testes Web

* Login
* Pesquisa de produtos
* Carrinho de compras
* Checkout

Testes de API

* Validação de endpoint
* Validação de Status Code
* Validação do Body
* Validação de Headers
* Validação do Tempo de Resposta

⸻

Arquitetura

O projeto segue o padrão Page Object Model (POM) para aumentar a reutilização de código e facilitar a manutenção dos testes.

Também utiliza BDD (Behavior Driven Development) através do Cucumber para tornar os cenários mais legíveis e próximos da linguagem de negócio.

⸻

Relatórios

O projeto utiliza Allure Report para geração de relatórios detalhados da execução dos testes.

Gerar relatório:

npm run allure:generate

Abrir relatório:

npm run allure:open

⸻

Integração Contínua (CI/CD)

O projeto possui pipeline automatizada utilizando GitHub Actions, permitindo que os testes sejam executados automaticamente a cada alteração enviada ao repositório.

⸻

Executando Localmente

Clonar o projeto

git clone https://github.com/zekasantana/projeto-automacao-web-api.git

Acessar a pasta

cd projeto-automacao-web-api

Instalar as dependências

npm install

Abrir o Cypress

npx cypress open

Executar todos os testes

npm test

ou

npx cypress run

⸻

Executando com Docker

Construir a imagem:

docker compose build

Executar os testes:

docker compose up

Reconstruir a imagem e executar novamente:

docker compose up --build

Encerrar os containers:

docker compose down

⸻

Releases

O desenvolvimento deste framework foi organizado em versões evolutivas:

* v1.0.0 – Estrutura inicial do framework
* v1.1.0 – Integração contínua com GitHub Actions
* v1.2.0 – Integração com Allure Report
* v1.3.0 – Suporte à execução com Docker
* v1.4.0 – Contract Testing (em desenvolvimento)

⸻

## Contract Testing

O projeto utiliza Contract Testing para validar a estrutura das respostas da API, garantindo que alterações inesperadas sejam identificadas durante a execução dos testes.

### Tecnologias

- AJV
- JSON Schema

### Benefícios

- Validação automática da estrutura da resposta
- Maior confiabilidade dos testes de API
- Detecção antecipada de mudanças de contrato
- Reutilização de schemas

Próximas Evoluções

* Execução paralela
* Dashboard de execução
* Testes de Performance
* Integração entre testes Web e API

⸻

Autor

Ezequias Santana de Melo

QA Automation Engineer

GitHub: https://github.com/zekasantana

Projeto desenvolvido como parte da evolução do portfólio profissional em QA Automation, aplicando práticas utilizadas em projetos reais para demonstrar conhecimentos em automação de testes, arquitetura de frameworks e integração contínua.