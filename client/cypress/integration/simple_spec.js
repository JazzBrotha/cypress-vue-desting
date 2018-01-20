describe('My First Test', function() {
  beforeEach(function () {
    cy.visit('http://localhost:8080')
  })
  it('Does not do much!', function() {
    expect(true).to.equal(true)
  })
})
