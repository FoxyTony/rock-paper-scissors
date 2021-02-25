describe('User can press button', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('pressing all buttons works', () => {
    cy.get('#paper').click();
    cy.get('#rock').click();
    cy.get('#scissors').click();

  })

  it('player wins with paper over rock', () => {
    cy.get('#paper').click()
    cy.get('#winner').should('contain', 'you win!')
  })
})