describe('Nav link tests', () => {
  const clientRoute = `${Cypress.env('client')}/`
  beforeEach(() => {
    cy.visit(clientRoute)
  })
  it('Register element should exist', () => {
    cy.get('#register-link')
  })
  it('Login element should exist', () => {
    cy.get('#login-link')
  })
  it('Browse element should exist', () => {
    cy.get('#browse-link')
  })
  it('Correct register link', () => {
    cy.get('#register-link').click()
    cy.url()
      .should('include', '/register')
  })
  it('Correct login link', () => {
    cy.get('#login-link').click()
    cy.url()
      .should('include', '/login')
  })
  it('Correct browse link', () => {
    cy.get('#browse-link').click()
    cy.url()
      .should('include', '/songs')
  })
})
