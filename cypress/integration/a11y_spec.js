describe('Accessibility checks on load', () => {
  it('Homepage', () => {
    cy.visit('/')
    cy.injectAxe()
    cy.wait(500)
    cy.checkA11y()
  })

  it('Pricing', () => {
    cy.visit('/age')
    cy.injectAxe()
    cy.wait(500)
    cy.checkA11y()
  })

  it('Product', () => {
    cy.visit('/events')
    cy.injectAxe()
    cy.wait(500)
    cy.checkA11y()
  })
})