/// <reference types="Cypress" />

class adicionarCarrinhoPage {
    get #btnProduto() { return cy.get('[style="padding: 8px;"] > :nth-child(1) > .r-18u37iz > :nth-child(1) > [data-testid="productDetails"]') }
    get #btnAddCart() { return cy.get('[data-testid="addToCart"]') }

    adicionarCarrinho() {
        this.#btnProduto.click()
        this.#btnAddCart.click()
    }
}

module.exports = new adicionarCarrinhoPage()