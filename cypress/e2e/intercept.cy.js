/// <reference types="Cypress" />

const { homePage } = require("../support/pages/home.page")
const { email, senha } = require('../fixtures/data.json')
const adicionarCarrinhoPage = require("../support/pages/adicionarCarrinho.page")
const removerCarrinhoPage = require("../support/pages/removerCarrinho.page")
const atualizarCarrinhoPage = require("../support/pages/atualizarCarrinho.page")

describe('Validacao de API', () => {
  beforeEach(() => {
    cy.setCookie('ebacStoreVersion', 'v2', { domain: 'lojaebac.ebaconline.art.br' })
    cy.visit('/')
    cy.login(email, senha)
  })

  it('products should be visible', () => {
    cy.intercept('GET', '**/public/getProducts', { fixture: 'products.json' }).as('getProducts')
    homePage.OpenSearchProduct()
    homePage.products().should('have.length.greaterThan', 1)
  })

  it('deve adicionar item ao carrinho', () => {
    cy.intercept('PUT', '**public/updateCart/657b05fe31b986f1c0a7a053').as('adicionarAoCarrinho');
    homePage.OpenSearchProduct()
    adicionarCarrinhoPage.adicionarCarrinho()
    cy.wait('@adicionarAoCarrinho').then((interceptacao) => {
      expect(interceptacao.response.statusCode).to.eq(200);
      expect(interceptacao.response.body.success).to.be.true;
    })
  })

  it('deve deletar item do carrinho', () => {
    cy.intercept('PUT', '**/public/updateCart/657b05fe31b986f1c0a7a053').as('removerDoCarrinho')
    homePage.OpenSearchProduct()
    removerCarrinhoPage.removerCarrinho()
    cy.wait('@removerDoCarrinho').then((interceptacao) => {
      expect(interceptacao.response.statusCode).to.eq(200)
      expect(interceptacao.response.body.success).to.be.true
    })
  })

  it('deve atualizar o carrinho', () => {
    cy.intercept('PUT', '**/public/updateCart/657b05fe31b986f1c0a7a053').as('atualizarCarrinho')
    homePage.OpenSearchProduct()
    atualizarCarrinhoPage.atualizarCarrinho()
    cy.wait('@atualizarCarrinho').then((interceptacao) => {
      expect(interceptacao.response.statusCode).to.eq(200)
      expect(interceptacao.response.body.success).to.be.true
    })
  })
})