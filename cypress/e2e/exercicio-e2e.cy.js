/// <reference types="cypress" />
const perfil = require('../fixtures/perfil-2.json')

import produtosPage from '../support/page_objects/produtos.page';



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

        let produto = 'Atomic Endurance Running Tee (Crew-Neck)'
        produtosPage.buscarProduto(produto)
        cy.get('.product_title').should('contain', produto)

        produtosPage.visitarProduto('Augusta Pullover Jacket')
        cy.get('.product_title').should('contain', 'Augusta Pullover Jacket')

        produtosPage.visitarProduto('Atlas Fitness Tank')
        cy.get('.product_title').should('contain', 'Atlas Fitness Tank')

        produtosPage.visitarProduto('Bruno Compete Hoodie')
        cy.get('.product_title').should('contain', 'Bruno Compete Hoodie')

    
        produtosPage.buscarProduto('Atlas Fitness Tank')
        produtosPage.addProdutoCarrinho('M', 'Blue', 1)
        cy.get('.woocommerce-message').should('contain', ' “Atlas Fitness Tank” foi adicionado no seu carrinho.')

        produtosPage.buscarProduto('Atomic Endurance Running Tee (Crew-Neck)')
        produtosPage.addProdutoCarrinho('M', 'Blue', 1)
        cy.get('.woocommerce-message').should('contain', '“Atomic Endurance Running Tee (Crew-Neck)” foi adicionado no seu carrinho.')

        produtosPage.buscarProduto('Augusta Pullover Jacket')
        produtosPage.addProdutoCarrinho('M', 'Blue', 1)
        cy.get('.woocommerce-message').should('contain', '“Augusta Pullover Jacket” foi adicionado no seu carrinho.')

        produtosPage.buscarProduto('Bruno Compete Hoodie')
        produtosPage.addProdutoCarrinho('M', 'Blue', 1)
        cy.get('.woocommerce-message').should('contain', '“Bruno Compete Hoodie” foi adicionado no seu carrinho.')
        cy.get('.woocommerce-message > .button').click()
        cy.get('.checkout-button').click()
        
      
    });


})