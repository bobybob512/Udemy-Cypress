describe('Cypress files', () => {
  it('Read/Write into Json file', () => {
    cy.writeFile('test-data/data.json', {name: 'Bob', email: 'bob@mail.com'})

    cy.readFile('test-data/data.json').then((Whatever) => {
      expect(Whatever.name).to.equal('Bob')
      expect(Whatever.email).to.equal('bob@mail.com')
    })
  })

  it('Write into plain text file', () =>{
    cy.writeFile('test-data/plain.txt', 'Hello World', 'ascii')
    cy.console.log('Hy');
  })
})