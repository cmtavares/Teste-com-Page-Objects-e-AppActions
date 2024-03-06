/// <reference types="Cypress" />

export const profilePage = {
    customerName: () => { return cy.get('[data-testid="CustomerName"]') }
}