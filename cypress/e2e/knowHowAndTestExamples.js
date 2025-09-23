/// <reference types="cypress" />
//enables intellisense


//=======================HOW TO FIND ELEMENTS=======================

//get() - to find an element in the DOM globally
//find() - to find children of an element, can chain the metod to dig deeper for child elements
//contains() - to find an element by its text(html)
//you can combine the methods to find elements, sometimes you need to use the parent element to find the child element
//get().parents().find() - to find a child element and go up to the parent element to find its child elements
//get().parentsUntil() - Traverses Up the DOM Tree: It starts from the currently selected element and moves up the DOM tree, one parent at a time.

// ID: Selects a single, unique element. Use a pound sign (#). e.g., cy.get('#my-id').
// Class: Selects one or more elements. Use a dot (.). e.g., cy.get('.my-class').
// Tag: Selects all elements of a type. No symbol. e.g., cy.get('div').
// Attribute: Selects by any attribute. Use brackets []. e.g., cy.get('[type="text"]').
// Descendant: Selects elements inside others. Use a space. e.g., cy.get('form input').
// Pseudo-Class: Selects elements by state or position. Use a colon (:). e.g., cy.get('li:first-child').

//=======================ALIASING ELEMENTS=======================
//Basically creating varia bles with .as() at the end of the chain to store the chain value and use it later.
//example shows how to alias a button and then click it and assert on its text.
// cy.get('#submit-button').as('submitBtn'); // Alias the button USING .as()
// cy.get('@submitBtn').click(); // Use the alias to click the button
// cy.get('@submitBtn').should('have.text', 'Submitted'); // Use the alias to assert on the button's text


describe("Login Test", () => {
    //TO DO:
    // use the 3 types of methods to test the login form

    beforeEach(() => {
        cy.visit("https://playground.bondaracademy.com/pages/forms/layouts");
    });
    
    it("should login with valid credentials", () => {