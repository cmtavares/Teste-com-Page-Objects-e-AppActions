/// <reference types="Cypress" />

const faker = require('faker')

class checkoutPage {
    get #btnShop() { return cy.get('[data-testid="__CAROUSEL_ITEM_0_READY__"] > .r-1kihuf0 > .r-1jnx3et > .r-13w96dm > [data-testid="banner"]') }
    get #RunningJacket() { return cy.get('[style="padding: 8px;"] > :nth-child(1) > .r-18u37iz > :nth-child(1) > [data-testid="productDetails"]') }
    get #btnAdd() { return cy.get('[data-testid="addToCart"]') }
    get #btnChange() { return cy.get('[style="justify-content: space-between; flex-grow: 1;"] > :nth-child(1) > .r-1wtj0ep > .r-1i6wzkk') }
    get #btnAddress() { return cy.get('[style="justify-content: center; margin-bottom: 10px; flex-direction: row; align-items: center; transition-duration: 0s;"] > .r-lrvibr') }
    get #name() { return cy.get('.r-1d7mnkm > :nth-child(1) > .css-175oi2r > .css-11aywtz') }
    get #phone() { return cy.get(':nth-child(2) > .css-175oi2r > .css-11aywtz') }
    get #address() { return cy.get(':nth-child(3) > .css-175oi2r > .css-11aywtz') }
    get #city() { return cy.get(':nth-child(4) > .css-175oi2r > .css-11aywtz') }
    get #state() { return cy.get(':nth-child(5) > .css-175oi2r > .css-11aywtz') }
    get #zipcode() { return cy.get(':nth-child(6) > .css-175oi2r > .css-11aywtz') }
    get #btnSave() { return cy.get('[data-testid="save"]') }
    get #btnNewAdd() { return cy.get('.r-150rngu > :nth-child(1) > :nth-child(2) > [style="flex-direction: row;"] > .r-1awozwy') }
    get #btnpay() { return cy.get('[data-testid="selectAddressOrContinueToPayment"]') }
    get #btnCheckout() { return cy.get('[data-testid="completeCheckout"]') }
    get #btnBackHome() { return cy.get('[data-testid="goBackHome"]') }

    checkout() {
        const name = faker.name.findName()
        const address = faker.address.streetAddress()
        const city = faker.address.city()
        const state = faker.address.state()
        const zipcode = faker.address.zipCode()

        this.#btnShop.click()
        this.#RunningJacket.click()
        this.#btnAdd.click()
        this.#btnChange.click()
        this.#btnAddress.click()
        this.#name.type(name)
        this.#phone.type("21999999999")
        this.#address.type(address)
        this.#city.type(city)
        this.#state.type(state)
        this.#zipcode.type(zipcode)
        this.#btnSave.click()
        this.#btnNewAdd.click()
        this.#btnpay.click()
        this.#btnCheckout.click()
        this.#btnBackHome.click()
    }
}

module.exports = new checkoutPage();