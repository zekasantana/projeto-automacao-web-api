Feature: Login

  Scenario: Login com usuário válido
    Given que acesso a tela de login
    When informo um e-mail e senha válidos
    Then devo visualizar a página principal

  Scenario: Login com credenciais inválidas
  Given que acesso a tela de login
  When informo um e-mail e senha inválidos
  Then devo visualizar a mensagem de erro de login