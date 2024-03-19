/// <reference types="Cypress" />

export const homePage = {
    openMenu(menu){
        return cy.get(`[href="/Tab/${menu}"]`).click()
    },
    OpenSearchProduct(product){
        cy.get('[data-testid="search-products"]').click()
    },
    products(){
        return cy.get('[data-testid="productDetails"]')
    }
}