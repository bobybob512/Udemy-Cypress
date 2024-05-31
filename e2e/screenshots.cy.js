/// <reference types="Cypress" />

describe('Cypress screenshots', () => {
  it('Fulpage screenshots', () => {
    cy.visit('https://example.com')
    cy.screenshot({overwrite: true})
  })

  it('Single element screenshot', () =>{
    cy.visit('https://example.com')
    cy.get('h1').screenshot({overwrite: true})
  })
})