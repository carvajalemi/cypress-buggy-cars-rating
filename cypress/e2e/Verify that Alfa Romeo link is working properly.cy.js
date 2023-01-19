describe('Test verify that Alfa Romeo link is working properly', () => {
  it('Should Alfa rommero url works properly', () => {
    cy.visit('https://buggy.justtestit.org/')

    //"Popular Make" section is displayed in the page
    cy.get('div').contains('Popular Make');
    cy.contains('Alfa Romeo');

    //Validate the image and its link in the page
    cy.get('[src="/img/cars/AR-logo.jpg"]').should("be.visible");
    cy.get('[href="/make/c4u1mqnarscc72is00ng"]').should("be.visible");

    //Click in the link
    cy.get('[href="/make/c4u1mqnarscc72is00ng"]').click();

    //Validate the url
    cy.url().should('include', '/make/c4u1mqnarscc72is00ng');
  })
})