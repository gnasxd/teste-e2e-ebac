/// <reference types="cypress" />
const perfil = require('../fixtures/perfil-2.json')

import produtosPage from "../support/page_objects/produtos.page"



context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {

    beforeEach(() => {
        cy.visit('/minha-conta')
        produtosPage.visitarUrl
    });


    it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
        cy.get('#username').type('gnas.teste@testecy.com.br')
        cy.get('#password').type('teste@1234')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, gnas.testegnasxdgnasxd (não é gnas.testegnasxdgnasxd? Sair)')

        let produto = 'Abominable Hoodie'
        produtosPage.buscarProduto(produto)
        cy.get('.product_title').should('contain', produto)

        produtosPage.visitarProduto('Arcadio Gym Short')
        cy.get('.product_title').should('contain', 'Arcadio Gym Short')

        produtosPage.visitarProduto('Atlas Fitness Tank')
        cy.get('.product_title').should('contain', 'Atlas Fitness Tank')

        produtosPage.visitarProduto('Aether Gym Pant')
        cy.get('.product_title').should('contain', 'Aether Gym Pant')

        let qtd = 1
        produtosPage.buscarProduto('Abominable Hoodie')
        produtosPage.addProdutoCarrinho('M', 'Red', qtd)

       
        


    });


})