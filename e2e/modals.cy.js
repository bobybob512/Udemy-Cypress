/// <reference types="Cypress" />

describe('Cypress modals', () => {
  it('Open and assert modal', () => {
    cy.visit('https://practice-automation.com/modals/')
    cy.get('#simpleModal').should('be.visible').click()
    cy.get('p').should('be.visible').should('contain', 'Hi, I’m a simple modal.')
    cy.get('button.pum-close.popmake-close[aria-label="Close"]').last().click();

  })
})