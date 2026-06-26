import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import CartPage from "../../pages/CartPage";

When("acesso a tela do checkout", () => {
  CartPage.acessarCarrinho();
  cy.contains("Proceed To Checkout").click();
});

Then("devo visualizar a página de checkout", () => {
  cy.contains("Address Details").should("be.visible");
});