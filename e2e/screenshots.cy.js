/// <reference types="Cypress" />

describe('Cypress screenshots', () => {
  it('Fulpage screenshots', () => {
    cy.visit('https://example.com')
    cy.screenshot({overwrite: true})
  })
})