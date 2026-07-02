import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import ProdutosPage from "../../pages/ProdutosPage";

When("pesquiso por um produto", () => {
  ProdutosPage.buscarProduto("Blue Top");
});

Then("o produto deve ser exibido", () => {
  cy.contains("Blue Top").should("be.visible");
});