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
    cy.get(".config").trigger("mouseover");
    cy.get('[data-cy="light"]').click({ force: true });
    expect(storageTheme).have.length;
  });
  it("Should change language", () => {
    cy.get('[data-cy="enUS"]').click({ force: true });
    cy.get(".new").should("contain", "New");
  });
  it("Should show messages", () => {
    cy.get(".sc-iqseJM > :nth-child(2) > :nth-child(1)").click(); //task button
    cy.get(".eZMYEz > :nth-child(1)").click({ force: true }); //submenu button
  });
  it("Should filter messages", () => {
    cy.get('[data-cy="input-search-messages"]').type("Joao Bosco");
    cy.get(".sc-hKwDye").should("contain", "Joao Bosco");
  });
});
