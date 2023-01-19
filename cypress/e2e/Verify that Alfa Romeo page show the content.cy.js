describe('Test verify that Alfa Romeo page content', () => {
  it('Should show Alfa rommero page content', () => {
    cy.visit('https://buggy.justtestit.org/')

    //"Popular Make" section is displayed in the page
    cy.get('div').contains('Popular Make');
    cy.contains('Alfa Romeo');

    //Click in the link
    cy.get('[href="/make/c4u1mqnarscc72is00ng"]').click();

    //Validate the url
    cy.url().should('include', '/make/c4u1mqnarscc72is00ng');

    //Validate content page
    cy.get('h1').contains('Buggy');
    cy.get('h3').contains('Alfa Romeo');
    cy.get('[class="cars table table-hover"]').should("be.visible");
  })
})