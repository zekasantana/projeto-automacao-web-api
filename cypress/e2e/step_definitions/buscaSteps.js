import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import ProdutosPage from "../../pages/ProdutosPage";

Given("que acesso a tela de produtos", () => {
  cy.visit("/products");
});

When("pesquiso por um produto", () => {
  ProdutosPage.buscarProduto("Blue Top");
});

Then("o produto deve ser exibido", () => {
  cy.contains("Blue Top").should("be.visible");
});