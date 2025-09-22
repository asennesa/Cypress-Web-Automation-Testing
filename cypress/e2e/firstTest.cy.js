/// <reference types="cypress" />
//enables intellisense


//=======================HOW TO FIND ELEMENTS=======================

//get() - to find an element in the DOM globally
//find() - to find children of an element, can chain the metod to dig deeper for child elements
//contains() - to find an element by its text(html)
//you can combine the methods to find elements, sometimes you need to use the parent element to find the child element
//get().parents().find() - to find a child element and go up to the parent element to find its child elements

describe("Login Test", () => {
    //TO DO:
    // use the 3 types of methods to test the login form

    beforeEach(() => {
        cy.visit("https://playground.bondaracademy.com/pages/forms/layouts");
    });
    
    it("should login with valid credentials", () => {