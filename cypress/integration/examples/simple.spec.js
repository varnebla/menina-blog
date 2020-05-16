describe('Browser actions', () => {
  it('should load correct url', () => {
    cy.visit('http://localhost:8080', { timeout: 10000 }) //wait 10 sec before test throws an error
    cy.url().should('include', ':8080')
  })
  it('should display correct number of topics', () => {
    cy.get('[name=art-component]')
      .its('length')
      .should('eq', 3)
  })
  it('should click on go to posts', () => {
    cy.get('a')
      .contains('Ir a los posts de Viajes')
      .click()
    cy.url().should('include', '/blog')
  })
})
