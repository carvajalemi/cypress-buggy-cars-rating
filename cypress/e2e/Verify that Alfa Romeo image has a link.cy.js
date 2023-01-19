describe('Test verify that Alfa Romeo image has a link', () => {
  it('passes', () => {
    cy.visit('https://buggy.justtestit.org/')

    //"Popular Make" section is displayed in the page
    cy.get('div').contains('Popular Make');
    cy.contains('Alfa Romeo');

    //Validate the image and its link in the page
    cy.get('[src="/img/cars/AR-logo.jpg"]').should("be.visible");
    cy.get('[href="/make/c4u1mqnarscc72is00ng"]').should("be.visible");

  })
})