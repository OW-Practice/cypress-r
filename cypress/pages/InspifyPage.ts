import locators from '../locators/inspifyLocators'

export default class InspifyPage {
    clickOnStorybookmenuButton() {
        cy.get(locators.Menubutton).should('be.visible').click();
        cy.get(locators.StoryBookMenuButton).should('be.visible').click();
    }
    clickOnCreateStorybookButton() {
        cy.get(locators.CreateStoryBookButton).should('be.visible').click();
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
        // cy.get('.content-container .SBPageThumbnail .loaded').children().as('loadedFile')
        // expect('@loadedFile').have.length(1)
        cy.get('.content-container .SBPageThumbnail .loaded').find('img').invoke('attr','src').should(($div) => {
            expect($div).to.include('image')
          })
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