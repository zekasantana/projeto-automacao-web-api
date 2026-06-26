import {
Given,
When,
Then
} from "@badeball/cypress-cucumber-preprocessor";

let response;

Given("que possuo a URL da API do Trello", () => {

});

When("realizo uma requisição GET", () => {

cy.request({
method:"GET",
url:"https://api.trello.com/1/actions/592f11060f95a3d3d46a987a"

}).then((res)=>{

response = res

cy.log("Nome da Lista: " + res.body.data.list.name)

})

})

Then("o status code deve ser 200",()=>{

expect(response.status).to.eq(200)

})

Then("devo exibir o nome da lista",()=>{

expect(response.body.data.list.name).to.not.be.empty

})