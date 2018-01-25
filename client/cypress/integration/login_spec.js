describe('Login component', () => {
  const clientRoute = `${Cypress.env('client')}/login`
  const serverRoute = `${Cypress.env('server')}/login`
  beforeEach(() => {
    cy.visit(clientRoute)
  })
  it('it returns correct error message if no input values are given', () => {
    cy.server({
      method: 'POST',
      status: 400,
      body: {},
      response: {
        error: 'No password provided'
      }
    })
    cy.route('/login/')
    //   .as('postLogin')
    // cy.wait('@postLogin')
    // cy.get('@postLogin')
      .its('response')
      .should('have.property', 'error', 'No password provided')
  })
  it('it returns correct error message if no email is provided', () => {
    cy.server({
      method: 'POST',
      status: 400,
      body: {
        password: 'superpassword'
      },
      response: {
        error: 'No email provided'
      }
    })
    cy.route('/login/')
      .its('response')
      .should('have.property', 'error', 'No email provided')
  })
  it('it returns correct error message if no password is provided', () => {
    cy.server({
      method: 'POST',
      status: 400,
      body: {
        email: 'testuser@test.se'
      },
      response: {
        error: 'No password provided'
      }
    })
    cy.route('/login/')
      .its('response')
      .should('have.property', 'error', 'No password provided')
  })
  // it('responds with status 403 if no user was found', () => {
  //   cy.request({
  //     method: 'POST',
  //     url: serverRoute,
  //     failOnStatusCode: false,
  //     body: {
  //       email: 'testuser@test.se',
  //       password: 'superpassword'
  //     }
  //   })

  //   .then((response) => {
  //     expect(response.status).to.eq(403)
  //   })
  // })
})