/// <reference types="Cypress" />

const faker = require('faker')

class cadastroPage {
    get #signUp() { return cy.get('[data-testid="signUp"]') }
    get #firstName() { return cy.get('[data-testid="firstName"]') }
    get #lastName() { return cy.get('[data-testid="lastName"]') }
    get #numero() { return cy.get('[data-testid="phone"]') }
    get #email() { return cy.get(':nth-child(7) > .css-175oi2r > [data-testid="email"]') }
    get #password() { return cy.get(':nth-child(8) > .css-175oi2r > [data-testid="password"]') }
    get #samePassword() { return cy.get('[data-testid="repassword"]') }
    get #btnCreate() { return cy.get('[data-testid="create"]') }

    cadastro() {
        const firstname = faker.name.firstName();
        const lastname = faker.name.lastName();
        const numero = faker.phone.phoneNumberFormat();
        const email = faker.internet.email();
        const password = faker.internet.password();
        
        this.#signUp.click()
        this.#firstName.type(firstname)
        this.#lastName.type(lastname)
        this.#numero.type(numero)
        this.#email.type(email)
        this.#password.type(password)
        this.#samePassword.type(password)
        this.#btnCreate.click()

        return { firstname, lastname }
    }
}

module.exports = new cadastroPage();