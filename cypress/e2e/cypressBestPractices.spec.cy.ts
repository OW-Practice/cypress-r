/// <reference types="cypress"/>

import inspifyPage from '../pages/InspifyPage'
import seleniumEasyPage from '../pages/seleniumEasyPage'

const ipage = new inspifyPage()
const spage = new seleniumEasyPage()

let seleniumEasyData, inspifyData

describe('Cypress best practices', () => {

    context('SeleniumEasy', () => {
        before(() => {
            cy.fixture('seleniumEasy.json').then((data) => {
                seleniumEasyData = data;
            });
        })
        beforeEach(() => {
            cy.visit(seleniumEasyData.SeleniumEasyURL)
        })

        it('Drag and Drop actions using data transfer', () => {
            spage.clickOnOthersmenu()
            spage.clickOnDragAndDrop()
            spage.dragAndDropFirstElement()
        })

        it('Radio box operations', () => {
            spage.clickOnInputFormsmenu()
            spage.clickOnRadioButtonsDemo()
            spage.checkFirstRadioButton()
        });

        it('Single select dropdown operations', () => {
            spage.clickOnInputFormsmenu()
            spage.clickOnSelectDropdownList()
            spage.selectListDemo()
        });

        it('Multi select dropdown operations', () => {
            spage.clickOnInputFormsmenu()
            spage.clickOnSelectDropdownList()
            spage.multiSelectListDemo()
        });

        it('Handle javascript alert with only one confimation button', () => {
            spage.clickOnAlertsAndModals()
            spage.clickOnJavascriptAlerts()
            spage.handleJavascriptAlertWithOnlyOKButton()
        })

        it('Handle javascript alert - Click OK', () => {
            spage.clickOnAlertsAndModals()
            spage.clickOnJavascriptAlerts()
            spage.handleJavascriptConfirmationBoxClickOK()
        })

        it('Handle javascript alert - Click Cancel', () => {
            spage.clickOnAlertsAndModals()
            spage.clickOnJavascriptAlerts()
            spage.handleJavascriptConfirmationBoxClickCancel()
        })

        it.only('Handle javascript alert with input box',()=>{
            spage.clickOnAlertsAndModals()
            spage.clickOnJavascriptAlerts()
            spage.handleJavascriptAlertWithInputBox()
        })

        afterEach(() => {
            cy.clearAllCookies()
            cy.clearAllLocalStorage()
        })
        after(() => {
            cy.log("Executed after hook")
        })
    })

    context.skip('Inspify', () => {
        before(() => {
            cy.fixture('testData.json').then((data) => {
                inspifyData = data;
            });
        })
        beforeEach(() => {
            // cy.visit(inspifyData.URL)
            // lpage.loginToSite(inspifyData.Username, inspifyData.Password)
            // @ts-ignore
            cy.login(inspifyData.URL, inspifyData.Username, inspifyData.Password)
        })

        it('Create storybook', () => {
            ipage.clickOnStorybookMenuButton();
            ipage.clickOnCreateStorybookButton();
            ipage.enterSBTitleAndClickOnSaveButton();
            ipage.uploadAFile();
            ipage.selectUploadedFile();
            ipage.clickOnActivateButton();
        })

        afterEach(() => {
            cy.clearAllCookies()
            cy.clearAllLocalStorage()
        })
        after(() => {
            // @ts-ignore
            cy.logout()
        })
    });
})

