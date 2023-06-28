// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import locators from '../locators/inspifyLocators'
// // @ts-ignore
// import registerCypressGrep from '@cypress/grep'
// registerCypressGrep()

//const registerCypressGrep = require('@cypress/grep');
//registerCypressGrep()
Cypress.Commands.add("login", (URL, username, password) => {
    cy.visit(URL)
    cy.url().should('include', '/nikhilp-prod1.inspify.com')
    cy.get(locators.Username).should('be.visible')
        .type(username).should('have.value', username)
    cy.get(locators.Password).should('be.visible')
        .type(password).should('have.value', password)
    cy.get(locators.SignIn).click();
})

Cypress.Commands.add("logout", () => {
    cy.get(locators.Menubutton).click()
    cy.get(locators.LogoutButton).click()
    cy.get(locators.LoginForm).should('be.visible')
        .find('h1').should('contain.text', 'WELCOME')
})