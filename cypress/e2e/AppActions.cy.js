/// <reference types="Cypress" />

const {email, senha} = require("../fixtures/data.json")

describe('Checkout de produto', () => {
    it('Deve fazer o checkout corretamente', () => {
        cy.checkout(email, senha)
    })
})