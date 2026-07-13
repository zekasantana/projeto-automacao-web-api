Feature: Autenticação pela API

  Scenario: Validar login pela API com credenciais válidas
    Given que possuo credenciais válidas
    When realizo o login pela API
    Then a API deve confirmar que o usuário existe