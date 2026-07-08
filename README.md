# 🚀 Projeto de Automação Web e API

![Cypress](https://img.shields.io/badge/Cypress-15-green)
![Cucumber](https://img.shields.io/badge/Cucumber-BDD-brightgreen)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-Passing-success)
![Allure](https://img.shields.io/badge/Report-Allure-orange)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)


Projeto de automação de testes desenvolvido com foco em boas práticas de QA Automation, utilizando **Cypress**, **Cucumber (BDD)**, **Page Object Model (POM)**, **Contract Testing (AJV)**, **Docker**, **GitHub Actions (CI/CD)** e **Allure Report**.

O objetivo deste projeto é demonstrar uma arquitetura escalável e profissional para automação de testes Web e API, seguindo padrões utilizados no mercado.

---

# 📌 Tecnologias Utilizadas

- JavaScript
- Cypress
- Cucumber (BDD)
- Page Object Model (POM)
- AJV (JSON Schema Validation)
- Docker
- GitHub Actions (CI/CD)
- Allure Report
- Git
- GitHub

---

# 📂 Estrutura do Projeto

```text
cypress/
├── e2e/
│   ├── api.feature
│   ├── busca.feature
│   ├── carrinho.feature
│   ├── checkout.feature
│   ├── login.feature
│   ├── produtos.feature
│   └── step_definitions/
├── fixtures/
├── pages/
├── schemas/
└── support/
```

---

# ✅ Cenários Automatizados

## 🌐 Testes Web

### Login
- ✅ Login com credenciais válidas
- ✅ Login com credenciais inválidas
- ✅ Validação dos campos obrigatórios

### Produtos
- ✅ Busca de produto existente
- ✅ Busca de produto inexistente

### Carrinho
- ✅ Adicionar produto ao carrinho
- ✅ Validação do produto no carrinho

### Checkout
- ✅ Acessar página de checkout

---

## 🔗 Testes de API

### API Trello

- ✅ Status Code 200
- ✅ Status Code 404
- ✅ Validação do contrato (JSON Schema)
- ✅ Validação do conteúdo da resposta

---

# ▶️ Como Executar o Projeto

## Instalar dependências

```bash
npm install
```

## Executar todos os testes

```bash
npx cypress run
```

## Abrir o Cypress

```bash
npx cypress open
```

---

# 📊 Relatório Allure

Gerar relatório:

```bash
npm run report
```

Abrir relatório:

```bash
npm run allure:open
```

---

# 🐳 Execução com Docker

```bash
docker compose up --build
```

---

# ⚙️ Integração Contínua

O projeto possui pipeline automatizada utilizando **GitHub Actions**, responsável por:

- Instalar dependências
- Executar os testes automatizados
- Validar a suíte de testes
- Garantir a qualidade antes de novos commits

---

# ✔ Funcionalidades Implementadas

- ✔ Automação Web
- ✔ Automação de API
- ✔ BDD com Cucumber
- ✔ Page Object Model
- ✔ Contract Testing (AJV)
- ✔ Docker
- ✔ GitHub Actions
- ✔ Allure Report
- ✔ Cenários Positivos
- ✔ Cenários Negativos

---

# 📈 Roadmap

## ✅ Releases concluídas

- ✔ v1.0.0 – Estrutura do Framework
- ✔ v1.1.0 – GitHub Actions (CI/CD)
- ✔ v1.2.0 – Allure Report
- ✔ v1.3.0 – Docker
- ✔ v1.4.0 – Contract Testing
- ✔ v1.5.0 – Cenários Negativos

## 🚀 Próximas evoluções

- Login via API
- cy.session()
- cy.intercept() e Mocking
- Execução Paralela
- Testes Cross Browser
- Performance Testing
- Accessibility Testing
- Histórico de Relatórios Allure

---

# 👨‍💻 Autor

**Ezequias Santana de Melo**

QA Automation Engineer

GitHub:
https://github.com/zekasantana

LinkedIn:
*(https://www.linkedin.com/in/ezequias-santana-de-melo-231a32145/)*

Projeto desenvolvido como parte da evolução do portfólio profissional em QA Automation, aplicando práticas utilizadas em projetos reais para demonstrar conhecimentos em automação de testes, arquitetura de frameworks e integração contínua.