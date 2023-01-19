describe('Test to verify the login page sending empty values', () => {
  it('Should try to do login with empty values', () => {
    cy.visit('https://buggy.justtestit.org/')

    //Click on the Login button after open the page
    cy.get('[type="submit"]').click();
    cy.wait(5000);
    
    //Verify buttons exist
     cy.get('[type="submit"]').contains('Login');
     cy.get ('[href="/register"]').contains('Register');
    
  })
})