import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import ProdutosPage from "../../pages/ProdutosPage";
import CartPage from "../../pages/CartPage";

Given("que existe um produto adicionado ao carrinho", () => {
  cy.login();
  ProdutosPage.buscarProduto("Blue Top");
  ProdutosPage.adicionarCarrinho();
});

When("acesso a tela do carrinho", () => {
  CartPage.acessarCarrinho();
});

Then("devo visualizar o produto adicionado", () => {
  CartPage.validarProduto("Blue Top");
});