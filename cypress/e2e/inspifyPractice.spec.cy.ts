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
        cy.visit(testData.URL);
       login.loginToSite(testData.Username,testData.Password);
    })
    it('Custom Command', () => {
        cy.login(testData.URL, testData.Username, testData.Password);
    })
})

describe('CreateStorybook', () => {
    beforeEach(() => {
        // Load the fixture before each test
        cy.fixture('testData').then(function (data) {
            testData = data;
        })
    })

    it('CreateStorybook', () => {
        cy.login(testData.URL, testData.Username, testData.Password);
        cy.wait(4000);
        home.clickOnStorybookmenuButton();
        cy.wait(4000);
        home.clickOnCreateStorybookButton();
        cy.wait(4000);
        home.enterSBTitleandClickOnSaveButton();
        cy.wait(4000);
        home.UploadAFile();
        cy.wait(7500);
        home.SelectUploadedFile();
        home.ClickOnActivateButton();
        cy.wait(4000);
        home.ClickOnActivateButton2();
    })
})