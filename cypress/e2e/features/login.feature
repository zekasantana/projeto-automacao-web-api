Feature: Login

  Scenario: Login com usuário válido
    Given que acesso a tela de login
    When informo um e-mail e senha válidos
    Then devo visualizar a página principal