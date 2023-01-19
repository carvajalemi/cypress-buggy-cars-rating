describe('Test Logn workflow', () => {
  it('Should show a message when the user is not at database', () => {
    cy.visit('https://buggy.justtestit.org/')

    cy.get('[name="login"]').type('fakeUserPablo');
    cy.get('[name="password"]').type('fakePass');
    cy.get('[type="submit"]').click();

    cy.contains('Invalid username/password');

  })
})