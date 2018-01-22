describe('Register component', () => {
  const clientRoute = `${Cypress.env('client')}/register`
  const serverRoute = `${Cypress.env('server')}/register`
  beforeEach(() => {
    cy.visit(clientRoute)
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
  it('returns status 400 if no email data', () => {
    cy.request({
      method: 'POST',
      url: serverRoute,
      failOnStatusCode: false,
      body: {
        password: 'magicpassword123'
      }
    })
      .then((response) => {
        expect(response.status).to.eq(400)
      })
  })
  it('returns status 400 if no password data', () => {
    cy.request({
      method: 'POST',
      url: serverRoute,
      failOnStatusCode: false,
      body: {
        email: 'user@user.com'
      }
    })
      .then((response) => {
        expect(response.status).to.eq(400)
      })
  })
  // it('validates user password in html', () => {
  //   cy.get('input[name=email]')
  //   .type('user@user.com')
  //   cy.server()
  //   cy.route({
  //     method: 'POST',
  //     url: '/register/',
  //     status: 400,
  //     response: {}
  //   })
  //     .as('registerUser')
  //   cy.get('button[name=register]').click()
  //   cy.wait('@registerUser')
  //   cy.get('#register-error-message').contains('password')
  // })
  // it('responds with 400 error if no email', () => {
  //   cy.server()
  //   cy.route(
  //     method: 'POST',
  //     utls: `${Cypress.env('server')}/register`, {
  //     email: '',
  //     password: 'magicpassword123',
  //     id: '1',
  //   })
  // })
        //   .as('postRegister')
      // cy.get('input[name=password]')
      //   .type()
      // cy.wait('@postRegister')
      // cy.get('#register-error-message')
      //   .should('be.visible')
      //   .contains('email')
})
