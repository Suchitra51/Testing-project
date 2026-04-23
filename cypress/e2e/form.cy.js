describe("Form Test", () => {

  it("should submit form successfully", () => {
    cy.visit("index.html");

    cy.get('input[name="name"]').type("John");
    cy.get('input[name="email"]').type("john@mail.com");

    cy.get("button").click();

    // Strong assertion 
    cy.get('#result').should('have.text', 'Success');

    // Optional (can keep or remove, redundant)
    cy.contains("Success");
  });


  it("should not submit form with empty fields", () => {
    cy.visit("index.html");

    cy.get("button").click();

    // Negative test 
    cy.get('#result').should('not.have.text', 'Success');
  });

});