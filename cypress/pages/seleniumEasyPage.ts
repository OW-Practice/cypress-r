import locators from '../locators/seleniumEasyLocators'

export default class seleniumEasyPage {

    clickOnOthersmenu() {
        cy.get(locators.menuArrow).contains('Others').click()
    }

    clickOnDragAndDrop() {
        cy.get(locators.dragAndDropmenu).should('be.visible').click()
    }

    dragAndDropFirstElement() {
        const dataTransfer = new DataTransfer;
        cy.get(locators.drag)
            .eq(0)
            .trigger('dragstart', { dataTransfer });
        cy.get(locators.drop)
            .trigger('drop', { dataTransfer })
        cy.get(locators.droppedList).should('contain.text', 'Draggable 1')
    }

    clickOnInputFormsmenu() {
        cy.get(locators.menuArrow).contains('Input Forms').click()
    }

    clickOnRadioButtonsDemo() {
        cy.get(locators.radioButtonMenu).should('be.visible').click()
    }

    checkFirstRadioButton() {
        cy.get(locators.radioButton).first().type('{enter}').check().should('be.checked')
        cy.get(locators.getCheckedValueButton).contains('Get Checked value').click()
        cy.get(locators.checkedResultText).first().should('contain.text', 'Male')
    }

    clickOnSelectDropdownList() {
        cy.get(locators.selectDropdownList).should('be.visible').and('contain.text', 'Select Dropdown List').click()
        cy.get(locators.panelHeading).should('have.length', 3)
    }

    selectListDemo() {
        const day = 'Sunday'
        cy.get(locators.selectListDemo).select(day).should('have.value', day)
        cy.get(locators.selectedday).contains(day).should('be.visible')
    }

    multiSelectListDemo() {
        // cy.get(locators.multiSelectListDemo).select(['California', 'Florida', 'New York'])
        //     .invoke('val').should('deep.equal', ['California', 'Florida', 'New York'])
        //     .should('have.length', 3)
        // cy.wait(10000)
        // cy.get(locators.getAllSelectedButton).click()
        // cy.wait(10000)
        // cy.get(locators.selectedStates).should('contain', 'California').and('contain', 'Florida').and('contain', 'New York')
        const stateNames = ['California', 'Florida', 'New York']
        cy.get(locators.multiSelectListDemo)
            .type('{ctrl}', { release: false })
        for (let i = 0; i < stateNames.length; i++) {
            cy.get(locators.multiSelectListDemo)
                .contains(stateNames[i])
                .click()
        }
        cy.get(locators.multiSelectListDemo).type('{ctrl}', { release: true })
        // cy.get(locators.multiSelectListDemo)
        //     .invoke('val').should('deep.equal', ['California', 'Florida', 'New York'])
        //     .should('have.length', 3)
        cy.get(locators.getAllSelectedButton).click()
        cy.get(locators.selectedStates).should('contain', stateNames)
    }

    clickOnAlertsAndModals() {
        cy.get(locators.menuArrow).contains('Alerts & Modals').click()
    }

    clickOnJavascriptAlerts() {
        cy.get(locators.javascriptAlertsmenu).click()
    }

    handleJavascriptAlertWithOnlyOKButton() {
        cy.on('window:alert', (message) => {
            expect(message).to.contains('I am an alert box!');
        });
        cy.get(locators.alertBoxButton).click().then(() => {
            cy.on('window:confirm', () => true); // Automatically accept the alert by returning true
        });
    }

    handleJavascriptConfirmationBoxClickOK() {
        cy.on('window:confirm', () => true);
        cy.on('window:alert', (message) => {
            expect(message).to.contains('Press a button!');
        });
        cy.get(locators.confirmationBoxButton).click().then(() => {
            cy.get(locators.confirmationBoxText).should('contain.text', 'You pressed OK!')
        });
    }

    handleJavascriptConfirmationBoxClickCancel() {
        cy.on('window:confirm', () => false);
        cy.on('window:alert', (message) => {
            expect(message).to.contains('Press a button!');
        });
        cy.get(locators.confirmationBoxButton).click().then(() => {
            cy.get(locators.confirmationBoxText).should('contain.text', 'You pressed Cancel!')
        });
    }

    // handleJavascriptAlertWithInputBox() {
    //     cy.on('window:prompt', (message, defaultValue) => {
    //         // Handle the prompt box
    //         cy.window().then((win) => {
    //           cy.stub(win, 'prompt').returns('John Doe'); // Simulate user input
    //           cy.on('window:confirm', () => {}); // Stub the subsequent confirm
    //         });
    //       });

    //       // Trigger the action that triggers the alert with an input box
    //       cy.get('[onclick="myPromptFunction()"]').click();
    //       cy.handlePrompt()
    // }

    handleTabs() {
        // url launch
        cy.visit("https://www.google.com/")
        // delete target attribute with invoke for link
        cy.get(locators.gmail)
            .invoke('removeAttr', 'target').click()
        // verify tab url
        cy.url()
            .should('contain', 'gmail')
        // shift to parent window
        cy.go('back')
        cy.url().should('not.contain', 'gmail')
        cy.go('forward')
    }

    clickOnDynamicDataLoadingMenu() {
        cy.get(locators.dynamicDataLoadingMenu).should('be.visible').should('contain.text', 'Dynamic Data Loading')
            .should('contain.html', 'Data').click()
    }

    callbackFunctions() {
        cy.get(locators.getNewUserButton).should('be.visible').should('contain.text', 'Get New User').then(($button) => {
            cy.wrap($button).click()
        })
        cy.get(locators.randomProfile).find('br').should((verify) => {
            expect(verify).to.have.length(4)
        })
        cy.get(locators.randomProfile).invoke('text').should((verify) => {
            expect(verify).to.contain('First')
        })
    }
}