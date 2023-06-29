/// <reference types="cypress"/>
import loginPage from '../pages/LoginPage'
import inspifyPage from '../pages/InspifyPage'
//import testData from '../fixtures/testData.json'

const lpage = new loginPage();
const ipage = new inspifyPage();
let testData;


describe('Login Functionality', () => {
    beforeEach(() => {
        // Load the fixture before each test
        cy.fixture('testData').then(function (data) {
            testData = data;
        })
    })

    it('Launch URL', () => {
        cy.visit(Cypress.env('url'));
        lpage.loginToSite(testData.Username, testData.Password);
    })
})

describe('CreateStorybook', () => {
    beforeEach(() => {
        cy.fixture('testData').then(function (data) {
            testData = data;
        })
    })

    it('CreateStorybook', () => {
        // @ts-ignore
        cy.login(testData.URL, testData.Username, testData.Password);
        ipage.clickOnStorybookMenuButton();
        ipage.clickOnCreateStorybookButton();
        ipage.enterSBTitleAndClickOnSaveButton();
        ipage.uploadAFile();
        ipage.selectUploadedFile();
        ipage.clickOnActivateButton();
        ipage.clickOnActivateButton();
    })
})