import locators from '../locators/inspifyLocators'

export default class LoginPage {
    verifyURL() {
        cy.url().should('include', '/nikhilp-prod1.inspify.com')
    }
    loginToSite(username, password) {
        cy.get(locators.Username).should('be.visible')
            .type(username).should('have.value', username)
        cy.get(locators.Password).should('be.visible')
            .type(password).should('have.value', password)
        cy.get(locators.SignIn).click();

    }
}