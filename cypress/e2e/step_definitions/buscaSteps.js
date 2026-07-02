import { When } from "@badeball/cypress-cucumber-preprocessor";
import ProdutosPage from "../../pages/ProdutosPage";

const produtosPage = ProdutosPage;

When("pesquiso por um produto", () => {
  produtosPage.buscarProduto("Blue Top");
});