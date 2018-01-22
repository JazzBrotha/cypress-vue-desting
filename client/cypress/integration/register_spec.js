describe('Register.vue', () => {
  beforeEach(() => {
    cy.visit('/#/register')
  })
  it('Button element contains register', () => {
    cy.get('#register-btn').contains('Register')
  })
})
