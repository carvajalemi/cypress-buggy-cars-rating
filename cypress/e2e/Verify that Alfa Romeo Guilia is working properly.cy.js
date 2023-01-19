describe('Test to verify that Alfa Romeo Guilia is working properly', () => {
  it('Should verify that Alfa Romeo Guilia is working properly', () => {
    cy.visit('https://buggy.justtestit.org/')

  //Verify Popular Make section is displayed on the page
  cy.get('h2').contains('Popular Make');

  //Verify Alfa Romeo Guilia Quadrifoglio is displayed on the section
  cy.get('h3').contains('Alfa Romeo Guilia Quadrifoglio');

  //Verify the href exist and click over it
  cy.get ('[href="/model/c4u1mqnarscc72is00ng|c4u1mqnarscc72is00sg"]').click();
  
  cy.wait(5000);
  //Verify Specification is displayed in the page
  cy.get('h4').contains('Specification');
 
  })
})