/// <reference types="Cypress" />

describe('Cypress E2E Testing Demo', () => {
  beforeEach(() =>{
    cy.visit('https://example.com')
  })

  afterEach(() =>{
    cy.log('This  will log after each of my test')
  })

  it('Assert Url', () => {
    cy.url().should('contain', 'example.com')
  })

  it('Assert title', () =>{
    cy.title().should('contain', 'Example Domain')
  })

  it('Assert Elements', () =>{
    cy.get('h1').should('be.visible')
    cy.get('p').should('be.visible')
  })

  it('Reloads and Logs', () =>{
    cy.log('Before Reload')
    cy.reload()
    cy.log('After Reload')
  })
})