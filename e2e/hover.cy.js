/// <reference types="Cypress" />

describe('Cypress hover', () => {
  it('Hover workaround', () => {
    cy.visit('https://practice-automation.com/hover/')
    cy.get('#mouse_over').trigger('mouseover')
    cy.get('#mouse_over').should('contain', 'ou did it!')
  })
})