describe('Test verify that Alfa Romeo Guilia image has a link', () => {
  it('passes', () => {
    cy.visit('https://buggy.justtestit.org/')

    //"Popular Make" section is displayed in the page
    cy.get('div').contains('Popular Model');
    cy.contains('Alfa Romeo Guilia Quadrifoglio');

    //Validate the image and its link in the page
    cy.get('[src="/img/cars/giulia.png"]').should("be.visible");
    cy.get('[href="/model/c4u1mqnarscc72is00ng|c4u1mqnarscc72is00sg"]').should("be.visible");

  })
})