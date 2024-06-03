class ExamplePage {
    openExamplePage()  {
        cy.visit('https://example.com')
    }

    assertURL() {
        cy.url().should('contain', 'example.com')
    }
}

export default ExamplePage