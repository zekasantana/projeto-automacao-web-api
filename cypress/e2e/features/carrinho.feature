Feature: Carrinho de Compras

  Scenario: Validar produto adicionado ao carrinho
    Given que existe um produto adicionado ao carrinho
    When acesso a tela do carrinho
    Then devo visualizar o produto adicionado