/// <reference types="cypress"/>
import loginpage from '../pages/LoginPage'
import homepage from '../pages/HomePage'
//import testData from '../fixtures/testData.json'

const login = new loginpage();
const home = new homepage();
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
        login.loginToSite(testData.Username, testData.Password);
        cy.wait(5000)
    })
    it('Custom Command', () => {
        cy.login(testData.URL, testData.Username, testData.Password);
    })
})

describe('CreateStorybook', () => {
    beforeEach(() => {
        cy.fixture('testData').then(function (data) {
            testData = data;
        })
    })

    it('CreateStorybook', () => {
        cy.login(testData.URL, testData.Username, testData.Password);
        home.clickOnStorybookmenuButton();
        home.clickOnCreateStorybookButton();
        home.enterSBTitleandClickOnSaveButton();
        home.UploadAFile();
        home.SelectUploadedFile();
        home.ClickOnActivateButton();
        home.ClickOnActivateButton2();
    })
})