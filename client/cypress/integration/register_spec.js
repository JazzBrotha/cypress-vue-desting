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
  it('returns correct error message if no email is provided', () => {
    cy.server({
      method: 'POST',
      status: 400,
      body: {
        password: 'magicpassword123'
      },
      response: {
        error: 'No email provided'
      }
    })
    cy.route('/register/')
      .its('response')
      .should('have.property', 'error', 'No email provided')
  })
  it('returns correct error message if no password is provided', () => {
    cy.server({
      method: 'POST',
      status: 400,
      body: {
        email: 'user@user.com'
      },
      response: {
        error: 'No password provided'
      }
    })
    cy.route('/register/')
      .its('response')
      .should('have.property', 'error', 'No password provided')
  })
  // it('requests register route on server when register button is clicked', () => {
  //   cy.server()
  //   cy.route('POST', '/register')
  //     .as('postRegister')
  //   cy.get('button[name=register]').click()
  //   cy.wait('@postRegister')
  //   cy.get('@postRegister').then(xhr => {
  //     expect(xhr.url).to.include('register')
  //   })
  // })
    // it('responds with status 400 if no email data is passed to server', () => {
  //   cy.request({
  //     method: 'POST',
  //     url: serverRoute,
  //     failOnStatusCode: false,
  //     body: {
  //       password: 'magicpassword123'
  //     }
  //   })
  //     .then((response) => {
  //       expect(response.status).to.eq(400)
  //     })
  // })
  // it('responds with status 400 if no password data is passed to server ', () => {
  //   cy.request({
  //     method: 'POST',
  //     url: serverRoute,
  //     failOnStatusCode: false,
  //     body: {
  //       email: 'user@user.com'
  //     }
  //   })
  //     .then((response) => {
  //       expect(response.status).to.eq(400)
  //     })
  // })
})
