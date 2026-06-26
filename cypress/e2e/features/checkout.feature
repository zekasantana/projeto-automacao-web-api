Feature: Checkout

  Scenario: Validar acesso ao checkout
    Given que existe um produto adicionado ao carrinho
    When acesso a tela do checkout
    Then devo visualizar a página de checkout