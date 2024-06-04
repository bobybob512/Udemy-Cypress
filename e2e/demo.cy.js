/// <reference types="Cypress" />

import ExamplePage from '../pages/ExamplePage'

describe('Cypress E2E Testing Demo', () => {
  beforeEach(() =>{
    const examplePage = new ExamplePage()
    examplePage.openExamplePage()
  })

  afterEach(() =>{
    cy.log('This  will log after each of my test')
  })

  it('Assert Url and Title', () => {
    const examplePage = new ExamplePage()
    examplePage.assertURL()
    examplePage.assertTitle()
  })

  //the retries will be executed only if the test fails
  it.only('Assert Elements', {retries: 3}, () =>{
    cy.get('h1').should('not.be.visible')
    //cy.get('h1').should('be.visible')
    cy.get('p').should('be.visible')
  })

  it('Reloads and Logs', () =>{
    cy.log('Before Reload')
    cy.reload()
    cy.log('After Reload')
  })
})