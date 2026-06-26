import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import ProdutosPage from "../../pages/ProdutosPage";

When("adiciono um produto ao carrinho", () => {
  ProdutosPage.buscarProduto("Blue Top");
  ProdutosPage.adicionarCarrinho();
});

Then("o produto deve ser adicionado com sucesso", () => {
  ProdutosPage.validarProdutoAdicionado();
});