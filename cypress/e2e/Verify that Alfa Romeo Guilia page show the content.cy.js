describe('Test verify that Alfa Romeo Guilia page content', () => {
  it('Should show Alfa Rommero Guilia page content', () => {
    cy.visit('https://buggy.justtestit.org/')

    //"Popular Model" section is displayed in the page
    cy.get('div').contains('Popular Model');
    cy.contains('Alfa Romeo Guilia Quadrifoglio');

    //Click in the link
    cy.get('[href="/model/c4u1mqnarscc72is00ng|c4u1mqnarscc72is00sg"]').click();

    //Validate the url
    cy.url().should('include', '/model/c4u1mqnarscc72is00ng%7Cc4u1mqnarscc72is00sg');

    //Validate content page
    cy.get('h1').contains('Buggy');
    cy.get('h4').contains('Alfa Romeo');
    cy.get('h3').contains('Guilia Quadrifoglio');
    cy.get('[class="table"]').should("be.visible");

  })
})