describe('Testing Cypress', () => {
  // 1
  it('Test homepage URL', () => {
    cy.visit('/')
    cy.location().should((loc) => {
      expect(loc.host).to.eq('localhost:3000')
    })
  })
  // 2
  it('finds the content "type"', () => {
    cy.visit('/')
    cy.get('h1').should('contain', 'nuxt-test')
  })
})

describe('Testing Name and Age calculator', () => {
  // 3
  it('Test Age calculator', () => {
    cy.visit('/age')
    cy.get('input[placeholder="Add Age"]')
      .click()
      .type('100')
      .wait(100)
      .get('#age-text')
      .contains('105')
  })
})

describe('Testing Color input', () => {
  // 4
  it('Color input displays', () => {
    cy.visit('/events')
    cy.get('input[placeholder="enter favorite color"]')
      .click()
      .type('purple')
      .type('{enter}')
      .wait(100)
      .get('h1')
      .contains('purple')
  })
})

describe('Testing Cypress', () => {
    // 1
    it('Test homepage URL', () => {
      cy.visit('/')
      cy.location().should((loc) => {
        expect(loc.host).to.eq('localhost:3000')
      })
    })
    // 2
    it('finds the content "type"', () => {
      cy.visit('/')
      cy.get('h1').should('contain', 'nuxt-test')
    })
  })
  
  describe('Testing Name and Age calculator', () => {
    // 3
    it('Test Age calculator', () => {
      cy.visit('/age')
      cy.get('input[placeholder="Add Age"]')
        .click()
        .type('100')
        .wait(100)
        .get('#age-text')
        .contains('105')
    })
  })
  
  describe('Testing Color input', () => {
    // 4
    it('Color input displays', () => {
      cy.visit('/events')
      cy.get('input[placeholder="enter favorite color"]')
        .click()
        .type('purple')
        .type('{enter}')
        .wait(100)
        .get('h1')
        .contains('purple')
    })
  })

  describe('Testing Cypress', () => {
    // 1
    it('Test homepage URL', () => {
      cy.visit('/')
      cy.location().should((loc) => {
        expect(loc.host).to.eq('localhost:3000')
      })
    })
    // 2
    it('finds the content "type"', () => {
      cy.visit('/')
      cy.get('h1').should('contain', 'nuxt-test')
    })
  })
  
  describe('Testing Name and Age calculator', () => {
    // 3
    it('Test Age calculator', () => {
      cy.visit('/age')
      cy.get('input[placeholder="Add Age"]')
        .click()
        .type('100')
        .wait(100)
        .get('#age-text')
        .contains('105')
    })
  })
  
  describe('Testing Color input', () => {
    // 4
    it('Color input displays', () => {
      cy.visit('/events')
      cy.get('input[placeholder="enter favorite color"]')
        .click()
        .type('purple')
        .type('{enter}')
        .wait(100)
        .get('h1')
        .contains('purple')
    })
  })
  