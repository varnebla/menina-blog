describe('Browser actions', () => {
  it('should load correct url', () => {
    cy.visit('http://localhost:8080', { timeout: 10000 }) //wait 10 sec before test throws an error
    cy.url().should('include', ':8080')
  })
  it('should have La menina perdida in title', () => {
    cy.title().should('contain', 'La menina perdida')
  })
})
describe('Presentation component elements', () => {
  it('should have title, subtitle and links', () => {
    cy.get('[data-cy=app_title]').contains('la menina perdida')
    cy.get('[data-cy=app_subtitle]').should('be', 'visible')
    cy.get('[data-cy=links] > a')
      .its('length')
      .should('eq', 4)
  })
})

describe('Art components', () => {
  it('should display correct number of topics', () => {
    cy.get('[data-cy=art-component]')
      .its('length')
      .should('eq', 3)
  })
  it('should click on go to posts', () => {
    cy.get('[data-cy=art-component] a')
      .contains('Ir a los posts de Viajes')
      .click()
    cy.url().should('include', '/blog')
  })
})
