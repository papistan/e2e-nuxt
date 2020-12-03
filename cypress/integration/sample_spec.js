describe('Testing Cypress', () => {
    it('finds the content "type"', () => {
      cy.visit('/')
  
      cy.contains('nuxt-test')
    })
  })

  describe('Testing Name and Age calculator', () => {
    it('finds the content "type"', () => {
      cy.visit('/age')
  
      cy.contains('nuxt-test')
    })
  })


  describe('Testing Color input', () => {
    it('finds the content "type"', () => {
      cy.visit('/events')
  
      cy.contains('nuxt-test')
    })
  })