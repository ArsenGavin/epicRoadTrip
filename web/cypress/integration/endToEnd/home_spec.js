/* eslint-disable no-undef */
describe("Home page 🏠", () => {
  it("Renders the home page", () => {
    cy.visit("/");
    cy.contains("Prepare my new epic road trip");
    cy.contains("The most visited places");
    cy.contains("The best places near you");
  });
});
