🚀 Projeto de Automação Web e API

📋 Sobre o projeto

Este projeto foi desenvolvido com o objetivo de demonstrar boas práticas na automação de testes Web e API utilizando JavaScript, Cypress e Cucumber (BDD).

A arquitetura foi construída seguindo padrões utilizados em projetos corporativos, proporcionando maior organização, reutilização de código e facilidade de manutenção.

Além da automação funcional, o projeto conta com integração contínua (CI/CD) utilizando GitHub Actions e geração de relatórios de execução através do Allure Report.

⸻

🛠 Tecnologias Utilizadas

* JavaScript
* Cypress
* Cucumber (BDD)
* Page Object Model (POM)
* Git
* GitHub
* GitHub Actions (CI/CD)
* Allure Report
* Node.js
* npm

⸻

📂 Arquitetura do Projeto

O projeto foi organizado utilizando o padrão Page Object Model (POM), separando responsabilidades entre páginas, cenários, definições de passos e arquivos de configuração.

Principais diretórios:

* cypress/e2e → Arquivos .feature escritos em Gherkin.
* cypress/e2e/step_definitions → Implementação dos passos dos cenários.
* cypress/pages → Classes Page Object responsáveis pelas ações nas páginas.
* cypress/fixtures → Massa de dados utilizada nos testes.
* cypress/support → Comandos customizados e configurações globais.
* .github/workflows → Pipeline de Integração Contínua.
* allure-results → Resultados utilizados para geração do relatório Allure.

⸻

✅ Cenários Automatizados

Testes Web

* Login de usuário.
* Pesquisa de produtos.
* Adição de produtos ao carrinho.
* Validação do carrinho.
* Fluxo de checkout.

Testes de API

* Validação de requisição GET na API do Trello.
* Validação do código de resposta HTTP.
* Validação do conteúdo retornado pela API.

⸻

⚙️ Boas Práticas Aplicadas

Durante o desenvolvimento do projeto foram aplicadas diversas práticas utilizadas em ambientes corporativos:

* Arquitetura Page Object Model (POM).
* Escrita de cenários utilizando BDD/Gherkin.
* Reutilização de código.
* Separação das responsabilidades.
* Organização por Features.
* Utilização de Step Definitions.
* Estrutura preparada para expansão do framework.
* Versionamento utilizando Git.
* Integração Contínua com GitHub Actions.
* Geração de relatórios Allure.

⸻

💻 Pré-requisitos

Antes de executar o projeto é necessário possuir instalado:

* Node.js
* npm
* Git

⸻

📦 Instalação

Clone o repositório:

git clone <URL_DO_REPOSITORIO>

Acesse a pasta do projeto:

cd projeto-automacao-web-api

Instale as dependências:

npm install

⸻

▶️ Executando os testes

Executar todos os testes:

npx cypress run

Abrir o Cypress em modo gráfico:

npx cypress open

Executar um cenário específico:

npx cypress run --spec "cypress/e2e/login.feature"

⸻

📊 Relatórios Allure

Após executar os testes, gere o relatório utilizando os comandos abaixo:

npx allure generate allure-results --clean

Em seguida, abra o relatório:

npx allure open

O relatório apresenta informações detalhadas sobre a execução dos testes, incluindo cenários executados, tempo de execução, status e histórico das execuções.

⸻

🔄 Integração Contínua (CI/CD)

O projeto possui uma pipeline configurada com GitHub Actions.

A cada alteração enviada para o repositório, a pipeline executa automaticamente os testes, garantindo que novas mudanças não comprometam o funcionamento do framework.

⸻

🚀 Roadmap

Próximas evoluções planejadas:

* Docker para execução dos testes.
* Contract Testing utilizando JSON Schema (AJV).
* Integração entre testes Web e API.
* Login via API utilizando cy.session().
* Testes Data Driven.
* Melhorias na documentação.
* Novas Releases do projeto.

⸻

👨‍💻 Autor

Ezequias Santana de Melo

Projeto desenvolvido como parte da evolução do portfólio profissional em QA Automation, aplicando práticas utilizadas em projetos reais para demonstrar conhecimentos em automação de testes, arquitetura de frameworks e integração contínua.