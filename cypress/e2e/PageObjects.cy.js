/// <reference types="Cypress" />

const { homePage } = require("../support/pages/home.page")
const cadastroPage = require("../support/pages/cadastro.page")
const { profilePage } = require("../support/pages/profile.page")

describe('Teste de criação de contas', () => {
  beforeEach(() => {
    cy.setCookie('ebacStoreVersion', 'v2', {domain: 'lojaebac.ebaconline.art.br'})
    cy.visit('/')
  })

  it('Deve criar uma conta com sucesso', () => {
    homePage.openMenu('Account')
    const { firstname, lastname } = cadastroPage.cadastro()
    homePage.openMenu('Account')
    profilePage.customerName().should('contain', `${lastname} ${firstname}`)
  })
})