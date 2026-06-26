import { Given } from "@badeball/cypress-cucumber-preprocessor";

Given("que estou logado", () => {
  cy.login();
});