/// <reference types="cypress"/>

import inspifyPage from '../pages/InspifyPage'
import seleniumEasyPage from '../pages/seleniumEasyPage'

const ipage = new inspifyPage()
const spage = new seleniumEasyPage()

let testData1
let testData2

describe('Cypress Best Parctices For Selenium Easy Site', () => {

    context('SeleniumEasy', () => {
        before(() => {
            cy.fixture('seleniumEasy.json').then((data) => {
                testData1 = data;
            });
        })
        beforeEach(() => {
            cy.visit(testData1.SeleniumEasyURL)
        })

        it('Drag and Drop actions using data transfer', () => {
            spage.clickOnOthersmenu()
            spage.clickOnDragAndDrop()
            spage.dragAndDropfirstElement()
        })
        it('Radio box operations', () => {
            spage.clickOnInputFormsmenu()
            spage.clickOnRadioButtonsDemo()
            spage.checkFirstRadioButton()
        });

        afterEach(()=>{
            cy.clearAllCookies()
            cy.clearAllLocalStorage()
        })
        after(()=>{
            cy.log("Executed after hook")
        })
    })

    context('Inspify', () => {
        before(() => {
            cy.fixture('testData.json').then((data) => {
                testData2 = data;
            });
        })
        beforeEach(() => {
            // cy.visit(testData2.URL)
            // lpage.loginToSite(testData2.Username, testData2.Password)
            cy.login(testData2.URL,testData2.Username, testData2.Password)
        })

        it('CreateStorybook', () => {
            ipage.clickOnStorybookmenuButton();
            ipage.clickOnCreateStorybookButton();
            ipage.enterSBTitleandClickOnSaveButton();
            ipage.UploadAFile();
            ipage.SelectUploadedFile();
            ipage.ClickOnActivateButton();
            ipage.ClickOnActivateButton2();
        })

        afterEach(()=>{
            cy.clearAllCookies()
            cy.clearAllLocalStorage()
        })
        after(() => {
            cy.logout()
        })
    });
})

