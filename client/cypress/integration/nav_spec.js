describe('Nav link tests', () => {
  const clientRoute = `${Cypress.env('client')}/`
  beforeEach(() => {
    cy.visit(clientRoute)
  })
  it('Redirects to correct page when clicking register link', () => {
    cy.get('#register-link').click()
    cy.url()
      .should('include', '/register')
  })
  it('Redirects to correct page when clicking login link', () => {
    cy.get('#login-link').click()
    cy.url()
      .should('include', '/login')
  })
  it('Redirects to correct page when clicking browse link', () => {
    cy.get('#browse-link').click()
    cy.url()
      .should('include', '/songs')
  })
})
