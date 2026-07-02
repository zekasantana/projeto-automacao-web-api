const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");

Given("que acesso a tela de login", () => {
  cy.visit("/login");
});

When("informo email e senha validos", () => {
  cy.get('[data-qa="login-email"]').type("teste2021@teste.com.br");
  cy.get('[data-qa="login-password"]').type("teste");
});

When("clico no botao login", () => {
  cy.get('[data-qa="login-button"]').click();
});

Then("devo visualizar a pagina inicial", () => {
  cy.url().should("include", "/");
});

Given("que estou logado", () => {
  cy.visit("/login");
  cy.get('[data-qa="login-email"]').type("teste2021@teste.com.br");
  cy.get('[data-qa="login-password"]').type("teste");
  cy.get('[data-qa="login-button"]').click();
});

Given("que possuo a URL da API do Trello", () => {
  cy.wrap("https://api.trello.com/1/boards").as("urlApi");
});

When("realizo uma requisicao GET", () => {
  cy.get("@urlApi").then((url) => {
    cy.request({
      method: "GET",
      url,
      failOnStatusCode: false,
    }).as("response");
  });
});

Then("devo validar o status code deve ser 200", () => {
  cy.get("@response").its("status").should("eq", 200);
});

Given("que existe um produto adicionado ao carrinho", () => {
  cy.visit("/products");
  cy.get(".product-image-wrapper").first().trigger("mouseover");
  cy.contains("Add to cart").first().click({ force: true });
  cy.contains("View Cart").click();
});