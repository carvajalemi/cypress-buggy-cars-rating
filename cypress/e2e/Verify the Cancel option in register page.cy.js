describe('Test to verify the Cancel button in Regiser page', () => {
  it('Should validate that the Cancel button in the Register page is working correctly', () => {
    cy.visit('https://buggy.justtestit.org/')

    //Click on Register button to open register page
    cy.contains('Register').click();

    //Verify that the Cancel button exists and clicks on it
    cy.get ('[href="/"]').contains('Cancel').click();

    //Verify a section that belongs to the Main page
    cy.get('h2').contains('Popular Make');
    

  })
})