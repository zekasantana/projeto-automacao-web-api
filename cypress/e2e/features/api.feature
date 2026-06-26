Feature: API Trello

Scenario: Validar retorno da API Trello

Given que possuo a URL da API do Trello
When realizo uma requisição GET
Then o status code deve ser 200
And devo exibir o nome da lista