describe('Nav link tests', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('Correct register link', () => {
    cy.contains('Sign Up').click()
    cy.url()
      .should('include', '/register')
  })
})
