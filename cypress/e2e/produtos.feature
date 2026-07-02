Feature: Produtos

  Scenario: Adicionar produto ao carrinho
    Given que estou logado
    When adiciono um produto ao carrinho
    Then o produto deve ser adicionado com sucesso