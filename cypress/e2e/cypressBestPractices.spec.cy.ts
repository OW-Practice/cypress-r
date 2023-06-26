/// <reference types="cypress"/>

import inspifyPage from '../pages/InspifyPage'
import seleniumEasyPage from '../pages/seleniumEasyPage'
import inspifyLoginPage from '../pages/LoginPage'

const ipage = new inspifyPage()
const spage = new seleniumEasyPage()
const lpage = new inspifyLoginPage()

let testData1
let testData2

describe('Cypress Best Parctices For Selenium Easy Site', () => {

    context('SeleniumEasy', () => {
        beforeEach(() => {
            cy.fixture('seleniumEasy.json').then((data) => {
                testData1 = data;
            });
        })

        it('Drag and Drop actions using data transfer', () => {
            cy.visit(testData1.SeleniumEasyURL)
            spage.clickOnOthersmenu()
            spage.clickOnDragAndDrop()
            spage.dragAndDropfirstElement()
        })
        it('Radio box operations', () => {
            spage.clickOnInputFormsmenu()
            spage.clickOnRadioButtonsDemo()
            spage.checkFirstRadioButton()

        });
    })

    context('Inspify', () => {
        beforeEach(() => {
            cy.fixture('testData.json').then((data) => {
                testData2 = data;
            });
        })

        it('CreateStorybook', () => {
            cy.visit(testData2.URL)
            cy.clearAllCookies()
            cy.clearAllLocalStorage()
            lpage.loginToSite(testData2.Username, testData2.Password)
            ipage.clickOnStorybookmenuButton();
            ipage.clickOnCreateStorybookButton();
            ipage.enterSBTitleandClickOnSaveButton();
            ipage.UploadAFile();
            ipage.SelectUploadedFile();
            ipage.ClickOnActivateButton();
            ipage.ClickOnActivateButton2();
        })
    });

})

