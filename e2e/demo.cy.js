/// <reference types="Cypress" />

import ExamplePage from '../pages/ExamplePage'

describe('Cypress E2E Testing Demo', () => {
  beforeEach(() =>{
    //cy.visit('https://example.com')
    const examplePage = new ExamplePage()
    examplePage.openExamplePage()
  })

  afterEach(() =>{
    cy.log('This  will log after each of my test')
  })

  it('Assert Url', () => {
    //cy.url().should('contain', 'example.com')
    const examplePage = new ExamplePage()
    examplePage.assertURL()
  })

  //BUG Ticket Number 223
  it('Assert title', () =>{
    //cy.title().should('contain', 'Example Domain')
    const examplePage = new ExamplePage()
    examplePage.assertTitle()
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