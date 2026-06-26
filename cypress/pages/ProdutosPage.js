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
}

export default new ProdutosPage();