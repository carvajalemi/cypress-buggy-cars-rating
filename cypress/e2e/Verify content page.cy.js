describe('Test Content of the Buggy Car page', () => {
  it('Should validate the content of the page', () => {
    cy.visit('https://buggy.justtestit.org/')

    //Verify the titles of the page
    cy. contains('Buggy Rating');
    cy.get('h1').contains('Buggy');
    cy.get('h1').contains('Cars');
    cy.get('h1').contains('Rating');
    
    //Verify buttons exist
    cy.get('[type="submit"]').contains('Login');
    cy.get ('[href="/register"]').contains('Register');

    //Verify three sections are displayed on the page
    cy.get('h2').contains('Popular Make');
    cy.get('h2').contains('Popular Model');
    cy.get('h2').contains('Overall Rating');



  })
})