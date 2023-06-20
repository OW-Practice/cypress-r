import locators from '../locators/inspifyLocators'

export default class LoginPage {
    loginToSite(username, password) {
        cy.get(locators.Username).type(username)
        cy.get(locators.Password).type(password)
        cy.get(locators.SignIn).click();
    }
}