/// <reference types="Cypress" />

describe('Fixtures', () => {
  it('Fixtures as data provider', () => {
    cy.visit('https://practice-automation.com/modals/')
    cy.get('#formModal').click()

    cy.fixture('example.json').as('userData')
    cy.get('@userData').then((whateverUser) =>{
      cy.get('#g1051-name').type(whateverUser.name)
      cy.get('#g1051-email').type(whateverUser.email)
      cy.get('#contact-form-comment-g1051-message').type(whateverUser.body)
      cy.contains('Submit').click()
    })
  })
})