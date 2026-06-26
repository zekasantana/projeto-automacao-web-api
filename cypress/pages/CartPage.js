class CartPage {
  acessarCarrinho() {
    cy.get('a[href="/view_cart"]').first().click();
  }

  validarProduto(produto) {
    cy.contains(produto).should("be.visible");
  }
}

export default new CartPage();