class LoginPage {

    elementos = {
        email: '#email',
        senha: '#password',
        btnLogin: 'button[type="submit"]'
    }

    acessarLogin() {
        cy.visit('/login')
    }

    realizarLogin(email, senha) {
        cy.get(this.elementos.email).type(email)
        cy.get(this.elementos.senha).type(senha)
        cy.get(this.elementos.btnLogin).click()
    }
}

export default new LoginPage()