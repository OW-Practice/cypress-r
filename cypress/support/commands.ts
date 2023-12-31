import locators from '../locators/inspifyLocators'
// // @ts-ignore
// import registerCypressGrep from '@cypress/grep'
// registerCypressGrep()

//const registerCypressGrep = require('@cypress/grep');
//registerCypressGrep()
// @ts-ignore
Cypress.Commands.add("login", (URL, username, password) => {
    // @ts-ignore
    cy.visit(URL)
    cy.url().should('include', '/nikhilp-prod1.inspify.com')
    cy.get(locators.Username).should('be.visible')
        .type(username).should('have.value', username)
    cy.get(locators.Password).should('be.visible')
        .type(password).should('have.value', password)
    cy.get(locators.SignIn).click();
})

// @ts-ignore
Cypress.Commands.add("logout", () => {
    cy.get(locators.Menubutton).click()
    cy.get(locators.LogoutButton).click()
    cy.get(locators.LoginForm).should('be.visible')
        .find('h1').should('contain.text', 'WELCOME')
})