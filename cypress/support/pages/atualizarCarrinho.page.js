/// <reference types="Cypress" />

class atualizarCarrinhoPage {
    get #btnProduto() { return cy.get('[style="padding: 8px;"] > :nth-child(1) > .r-18u37iz > :nth-child(1) > [data-testid="productDetails"]') }
    get #btnAddCart() { return cy.get('[data-testid="addToCart"]') }
    get #btnAddItem() { return cy.get('[data-testid="addItem"]') }

    atualizarCarrinho() {
        this.#btnProduto.click()
        this.#btnAddCart.click()
        this.#btnAddItem.click()
    }
}

module.exports = new atualizarCarrinhoPage()