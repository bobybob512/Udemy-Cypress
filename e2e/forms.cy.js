/// <reference types="Cypress" />

describe('forms, buttond and checkboxes', () => {
  it('Submit and assert form', () => {
    //Load the Form
    cy.visit('https://practice-automation.com/form-fields/')
    //cy.get('#post-1103').should('be.visible')
    cy.viewport(800, 600)
    cy.getById('post-1103')

    //fill the form
    cy.get('#name').type('Bogdan')
    cy.contains('Water').click()
    cy.contains('Red').click()
    cy.get('#email').type('email@mail.com')
    cy.get('#message').type('This is a message')
    cy.contains('Submit').click()
    //cy.wait(2000)

    //Assert Form Details
      cy.on('window:alert', (alertText) => {
        expect(alertText).to.equal('Message received!');
        //cy.wait(2000)
        cy.get('#alertButton').click(); 
    });
  })
})