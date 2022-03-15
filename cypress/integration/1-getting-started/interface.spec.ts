/* eslint-disable jest/valid-expect */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/// <reference types="cypress" />

describe("example to-do app", () => {
  it("Should visit page", () => {
    cy.visit("http://localhost:3000/");
  });
  it("Should type user", () => {
    cy.get('[data-cy="user"]').type("user");
  });
  it("Should type password", () => {
    cy.get('[data-cy="password"]').type("123");
  });
  it("Should click in login button", () => {
    cy.get('[data-cy="button-login"]').click();
  });
  it("Should redirect to tasks list page", () => {
    cy.url().should("include", "/list-tasks");
  });
  it("Should change theme", () => {
    let storageTheme = JSON.parse(localStorage.getItem("theme"));
    cy.get(".react-switch-bg").click();
    expect(storageTheme).have.length;
  });
  it("Should change language", () => {
    cy.get('[data-cy="modal-language"]').invoke("show");
    cy.get('[data-cy="enUS"]').click();
    cy.get(".novo").should("contain", "New");
  });
});
