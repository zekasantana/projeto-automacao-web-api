import {
  Given,
  When,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";

let credenciais;
let respostaLogin;

Given("que possuo credenciais válidas", () => {
  cy.fixture("usuarios").then((dados) => {
    credenciais = dados[0];
  });
});

When("realizo o login pela API", () => {
  cy.loginViaApi(credenciais.usuario, credenciais.senha).then((response) => {
    respostaLogin = response;
  });
});

Then("a API deve confirmar que o usuário existe", () => {
  expect(respostaLogin.responseCode).to.eq(200);
  expect(respostaLogin.message).to.eq("User exists!");
});