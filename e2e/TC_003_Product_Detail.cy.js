/// <reference types="Cypress" />

describe('TC_003_Product_Detail', () => {
  it('Should verify the product detail is displayed', () => {
    cy.visit('https://demoblaze.com/')

    cy.get('.hrefch').contains('Nexus 6').click()
    cy.get('.product-deatil').should('be.visible')
    cy.get('h2.name').contains('Nexus 6').should('be.visible')
    
    cy.get('h3.price-container').contains('$650')
    cy.get('.btn-success').should('contain','Add to cart').should('be.visible')
  })
})