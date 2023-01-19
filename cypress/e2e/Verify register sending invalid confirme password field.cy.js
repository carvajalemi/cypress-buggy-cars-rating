describe('Test verify register sending invalid confirme password field', () => {
  it('passes', () => {
    cy.visit('https://buggy.justtestit.org/')

    //Click Register button to open register page
    cy.contains('Register').click();

    //In Register page fill the fields
    cy.get('[name="username"]').type('TestShei');
    cy.get('[name="firstName"]').type('Shei');
    cy.get('[name="lastName"]').type('Salinas');
    cy.get('#password').type('Testpass.1');

    //The password do not match, a message is displayed
    cy.get('#confirmPassword').type('testpass');
    cy.contains('Passwords do not match');
    
    // The button Register is disabled
    cy.get('[class="btn btn-default"]').should("be.disabled");

    
  })
})