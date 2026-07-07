const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");

Given("que acesso a tela de login", () => {
  cy.visit("/login");
});

When("informo um e-mail e senha válidos", () => {
  cy.fixture("usuarios").then((usuarios) => {
    cy.get('[data-qa="login-email"]').type(usuarios[0].usuario);
    cy.get('[data-qa="login-password"]').type(usuarios[0].senha);
    cy.get('[data-qa="login-button"]').click();
  });
});

Then("devo visualizar a página principal", () => {
  cy.url().should("include", "/");
  cy.get('a[href="/logout"]').should("be.visible");
});

When("informo um e-mail e senha inválidos", () => {

cy.get('[data-qa="login-email"]').type("teste@invalido.com");
    cy.get('[data-qa="login-password"]').type("654321");
    cy.get('[data-qa="login-button"]').click();
  });


Then("devo visualizar a mensagem de erro de login", () => {
  cy.contains("Your email or password is incorrect!").should("be.visible");
});