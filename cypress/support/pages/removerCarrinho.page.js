/// <reference types="Cypress" />

class removerCarrinhoPage {
    get #btnProduto() { return cy.get('[style="padding: 8px;"] > :nth-child(1) > .r-18u37iz > :nth-child(1) > [data-testid="productDetails"]') }
    get #btnAddCart() { return cy.get('[data-testid="addToCart"]') }
    get #btnRemove() { return cy.get('[data-testid="remove"]') }

    removerCarrinho() {
        this.#btnProduto.click()
        this.#btnAddCart.click()
        this.#btnRemove.click()
    }
}

module.exports = new removerCarrinhoPage