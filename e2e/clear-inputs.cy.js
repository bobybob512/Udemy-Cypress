/// <reference types="Cypress" />

describe('Cypress clearing inputs', () => {
  it('Clear and type', () => {
    cy.visit('https://practice-automation.com/form-fields/')
    cy.get('#name').type('Here comes the name')
    cy.wait(2000)
    cy.get('#name').clear().type('New content')
  })
})