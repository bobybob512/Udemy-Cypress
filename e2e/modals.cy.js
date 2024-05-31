/// <reference types="Cypress" />

describe('Cypress modals', () => {
  it('Open and assert modal', () => {
    cy.visit('https://practice-automation.com/modals/')
    cy.get('#simpleModal').should('be.visible').click()
    cy.get('p').should('be.visible').should('contain', 'Hi, I’m a simple modal.')
    cy.wait(2000)
    cy.get('#popmake-1318 button').click()

  })
})