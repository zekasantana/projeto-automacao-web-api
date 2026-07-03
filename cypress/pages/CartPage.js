class CartPage {
  acessarCarrinho() {
    cy.get("#cartModal").should("be.visible");
    cy.contains("u", "View Cart").click();
  }

  validarProduto(produto) {
    cy.contains(produto).should("be.visible");
  }
}

export default new CartPage();