import { Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";
import Ajv from "ajv";
import addFormats from "ajv-formats";
import trelloSchema from "../../schemas/trelloSchema.js";

const ajv = new Ajv();
addFormats(ajv);
const validate = ajv.compile(trelloSchema);

let response;

Given("que possuo a URL da API do Trello", () => {

});

When("realizo uma requisição GET", () => {

cy.request({
method:"GET",
url:"https://api.trello.com/1/actions/592f11060f95a3d3d46a987a"

}).then((res) => {
  response = res;

  const valid = validate(res.body);

  expect(valid, JSON.stringify(validate.errors)).to.be.true;

  cy.log("Nome da Lista: " + res.body.data.list.name);
})

})

Then("o status code deve ser 200",()=>{

expect(response.status).to.eq(200)

})

Then("devo exibir o nome da lista",()=>{

expect(response.body.data.list.name).to.not.be.empty

})

Given("que possuo uma URL inválida da API", () => {
  cy.wrap("https://api.trello.com/1/rota-inexistente").as("urlApi");
});

When("realizo uma requisição GET para uma rota inexistente", function () {
  cy.request({
    method: "GET",
    url: this.urlApi,
    failOnStatusCode: false
  }).as("response"); 
})

Then("o status code deve ser 404", function () {
    expect(this.response.status).to.equal(404);
})