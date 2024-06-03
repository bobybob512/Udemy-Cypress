/// <reference types="Cypress" />

describe(' Execute javascript code inside cypress', () => {
  it('Invoke calculation of numbers', () => {
    const fn = (a, b, c) => {
      return a + b + c
    } 

    cy.wrap({sum: fn}).invoke('sum', 2, 5, 7).should('be.greaterThan', 10).and('be.lessThan', 20)
    cy.wrap({sum: fn}).invoke('sum', 2, 5, 7).should('equal', 14)
  })
})