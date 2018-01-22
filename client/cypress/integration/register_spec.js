describe('Register component', () => {
  beforeEach(() => {
    cy.visit('/#/register')
  })
  it('contains register button', () => {
    cy.get('button[name=register]')
  })
  it('contains email input', () => {
    cy.get('input[name=email]')
  })
  it('contains password input', () => {
    cy.get('input[name=password]')
  })
  it('sets correct value after user types email', () => {
    cy.get('input[name=email]')
      .type('user@user.com')
      .should('have.value', 'user@user.com')
  })
  it('sets correct value after user types password', () => {
    cy.get('input[name=password]')
      .type('magicpassword123')
      .should('have.value', 'magicpassword123')
  })
  it('validates user email in html', () => {
    cy.get('input[name=password]')
      .type('magicpassword123')
    cy.get('button[name=register]').click()
    cy.get('#register-error-message').contains('email')
  })
  it('validates user password in html', () => {
    cy.get('input[name=email]')
      .type('user@user.com')
    cy.get('button[name=register]').click()
    cy.get('#register-error-message').contains('password')
  })
  it('posts user info to server when clicking register button', () => {
    cy.get('button[name=register]').click()
  })
})
