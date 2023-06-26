import locators from '../locators/seleniumEasyLocators'

export default class seleniumEasyPage {

    clickOnOthersmenu() {
        cy.get(locators.menuArrow).contains('Others').click()
    }

    clickOnDragAndDrop() {
        cy.get(locators.dragAndDropmenu).click()
    }

    dragAndDropfirstElement() {
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
        cy.get(locators.radioButtonMenu).click()
    }

    checkFirstRadioButton(){
        cy.get(locators.radioButton).first().type('{enter}').check().should('be.checked')
        cy.get(locators.getCheckedValueButton).contains('Get Checked value').click()
        cy.get(locators.checkedResultText).first().should('contain.text', 'Male')
    }

}