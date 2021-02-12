describe('User can press button', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('press button', () => {
    cy.get('#paper').click();

  })
})