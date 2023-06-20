import locators from '../locators/inspifyLocators'

export default class HomePage {
    clickOnStorybookmenuButton() {
        cy.get(locators.Menubutton).click();
        cy.get(locators.StoryBookMenuButton).click();
    }
    clickOnCreateStorybookButton() {
        cy.get(locators.CreateStoryBookButton).click();
    }
    enterSBTitleandClickOnSaveButton() {
        cy.get(locators.StoryBookTitle).type("Hello");
        cy.get(locators.SaveButton).click();
    }
    UploadAFile() {
        cy.get(locators.FileUpload).selectFile("cypress/fixtures/image.jpg", { force: true });
        cy.wait(1000);
        cy.get(locators.UploadButton).click();
        cy.wait(5000);
    }
    SelectUploadedFile() {
        cy.get('.SBPageThumbnail .light-border').trigger('mouseover');
        cy.contains('Select').click();
        cy.wait(2000);
    }
    ClickOnActivateButton() {
        cy.get(locators.ActivateButton).click();
    }
    ClickOnActivateButton2() {
        cy.get(locators.ActivateButton2).click();
    }

}