describe('Cypress files', () => {
  it('Read/Write into Json file', () => {
    cy.writeFile('test-data/data.json', {name: 'Bob', email: 'bob@mail.com'})
  })
})