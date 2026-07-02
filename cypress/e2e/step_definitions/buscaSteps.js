import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import ProdutosPage from "../../pages/ProdutosPage";

When("pesquiso pelo produto {string}", (produto) => {
  ProdutosPage.buscarProduto(produto);
});

Then("devo visualizar o produto {string}", (produto) => {
  cy.contains(produto).should("be.visible");
});