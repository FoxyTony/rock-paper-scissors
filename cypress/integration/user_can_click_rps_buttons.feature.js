describe('Game works', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000', {
      onBeforeLoad(win) {
        cy.stub(win.Math, 'random').returns(0)
      }
    })
  })

  it('pressing all buttons works', () => {
    cy.get('#paper').click();
    cy.get('#rock').click();
    cy.get('#scissors').click();
  })

  it('player wins with scissors', () => {
    cy.get('#scissors').click()
    cy.get('#winner-state').should('contain', 'you win!')
  })

  it('computer wins', () => {
    cy.get('#rock').click()
    cy.get('#winner-state').should('contain', 'computer wins!')
  })
})