let fixture = {};

beforeEach(() => {
  cy.viewport(1024, 768);
  cy.visit("/");
  cy.fixture("registeredUser.json").then(user => {
      fixture.registeredUser = user
  })
});

describe("Test login", () => {
  it("Should go to the login page", () => {
    cy.get("[data-cy=login]").click();
    cy.url().should("include", "/login");
  });

  it("should render SignIn component", () => {
    cy.visit("/login");
    cy.get("[data-cy=loginForm]").should("be.visible")
      
  });

  it("should login the user", () => {
      cy.visit("/login")
      cy.get("[data-cy=username]").type
      (fixture.registeredUser.username)
      cy.get("[data-cy=password]").type
      (fixture.registeredUser.password)
      cy.get("[data-cy=loginSubmit]").click()
      
  })
});
