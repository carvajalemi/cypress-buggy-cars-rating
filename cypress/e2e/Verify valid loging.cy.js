describe('Test valid loging', () => {
  it('Should login', () => {
    cy.visit('https://buggy.justtestit.org/')

    //Fill the login and passowrd fields
    cy.get('[name="login"]').type('Sheilasc');
    cy.get('[name="password"]').type('Testing.1');

    //Click Login button
    cy.get('[type="submit"]').click();

    //The page after login
    cy.contains('Buggy Rating').should("be.visible"); 
    

  })
})