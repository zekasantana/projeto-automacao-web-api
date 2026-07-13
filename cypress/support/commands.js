Cypress.Commands.add("login", () => {
  cy.visit("/login");

  cy.get('[data-qa="login-email"]').type("teste2021@teste.com.br")
  cy.get('[data-qa="login-password"]').type("teste")
  cy.get('[data-qa="login-button"]').click()

  cy.contains("Logged in as").should("be.visible")
})

Cypress.Commands.add("loginViaApi", (email, password) => {
  return cy.request({
    method: "POST",
    url: "/api/verifyLogin",
    form: true,
    body: {
      email,
      password,
    },
    failOnStatusCode: false,
  }).then((response) => {
    const body =
      typeof response.body === "string"
        ? JSON.parse(response.body)
        : response.body;

    expect(response.status).to.eq(200);
    expect(body.responseCode).to.eq(200);
    expect(body.message).to.eq("User exists!");

    return body;
  });
});