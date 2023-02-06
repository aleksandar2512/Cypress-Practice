/// <reference types="Cypress" />

describe("gallery test", () => {
    it("login test", () => {
        cy.visit("/login");
        cy.get(".nav-link").eq(1).click();
        //cy.get("a[href='/login']");
        cy.get("#email").type("madeinzvornik@gmail.com");
        cy.get("#password").type("Malimrav123");
        cy.get(".btn.btn-custom").click();
        //cy.wait(2000);
        cy.get(".nav-link").should("have.length", 4);
        cy.url().should("not.contain", "/login");
        cy.get(".nav-link").eq(3).click();
        
    })
it.only("register test", () => {
    cy.visit("/");
    cy.get(".nav-link").eq(2).click();
    cy.url().should("contain", "/register");
    cy.contains("Register").should("exist");
    cy.get("#first-name").type("Aleksandar");
    cy.get("#last-name").type("Pantic");
    cy.get("#email").type("madeinzvoni@gmail.com");
    cy.get("#password").type("malimrav111");
    cy.get("#password-confirmation").type("malimrav111");
    cy.get(":checkbox").check();
    cy.get(".btn.btn-custom").click();

})

})
