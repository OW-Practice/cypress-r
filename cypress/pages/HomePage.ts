import locators from '../locators/inspifyLocators'

export default class HomePage {
    clickOnStorybookmenuButton() {
        cy.get(locators.Menubutton).should('be.visible').click();
        cy.get(locators.StoryBookMenuButton).click();
    }
    clickOnCreateStorybookButton() {
        cy.get(locators.CreateStoryBookButton).click();
    }
    enterSBTitleandClickOnSaveButton() {
        cy.get(locators.StoryBookTitle).type("Hello").should('have.value', "Hello")
        cy.get(locators.SaveButton).click();
    }
    UploadAFile() {
        cy.get(locators.FileUpload).selectFile("cypress/fixtures/image.jpg", { force: true });
        cy.intercept('PUT', '**/content/uploaded/**').as('uploadedFile');
        cy.get(locators.UploadButton).click();
        cy.wait('@uploadedFile')
    }
    SelectUploadedFile() {
        cy.get(locators.SelectScene).trigger('mouseover');
        cy.contains('Select').click();
    }
    ClickOnActivateButton() {
        cy.get(locators.ActivateButton).click();
    }
    // Overriding the defaultcommand timeout
    ClickOnActivateButton2() {
        cy.get(locators.ActivateButton2, { timeout: 5000 }).click();
    }
}