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