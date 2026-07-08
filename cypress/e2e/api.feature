Feature: API Trello

Scenario: Validar retorno da API Trello

Given que possuo a URL da API do Trello
When realizo uma requisição GET
Then o status code deve ser 200
And devo exibir o nome da lista

Scenario: Validar retorno 404 da API

Given que possuo uma URL inválida da API
When realizo uma requisição GET para uma rota inexistente
Then o status code deve ser 404