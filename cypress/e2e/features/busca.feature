Feature: Busca de Produto

Scenario: Buscar produto existente

Given que estou logado
When pesquiso por um produto
Then o produto deve ser exibido