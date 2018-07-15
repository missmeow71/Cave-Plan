describe("E2E Test V2", () => {
  it("Make sure the page shows up", () => {
    cy.visit("/");
  });
  it("Makes sure Header Appears", () => {
    cy.get("h1.title").should("have.text", 'Cave Plan');
  });
});