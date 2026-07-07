class ProdutosPage {

  buscarProduto(produto) {
    cy.visit("/products");
    cy.get("#search_product").type(produto);
    cy.get("#submit_search").click();
  }

  adicionarCarrinho() {
    cy.contains("Add to cart").first().click();
  }

  validarProdutoAdicionado() {
    cy.contains("Added!").should("be.visible");
  }

  clicarVerCarrinhoNoModal() {
    cy.get("#cartModal").should("be.visible");
    cy.contains("View Cart").click();
  }

  buscarProdutoInexistente() {
    cy.visit("/products");
    cy.get("#search_product").type("ProdutoInexistente123");
    cy.get("#submit_search").click();
  }

  validarNenhumProdutoEncontrado() {
    cy.get(".features_items .product-image-wrapper")
      .should("have.lenght",0);
  }

}

export default new ProdutosPage();