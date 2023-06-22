/// <reference types="cypress"/>
/// <reference types="@cypress/grep" />

describe('SeleniumEasy', () => {

    // it('Implement Drag and Drop using mouse events - It's not working out now', () => {
    //     cy.visit('https://demo.seleniumeasy.com/drag-and-drop-demo.html')
    //     cy.get('[draggable="true"]:nth-of-type(1)').as('draggable');
    //     cy.get('#mydropzone').as('droppable');
    //     cy.get('@draggable').trigger('mousedown');
    //     cy.get('@droppable').trigger('mousemove').trigger('mouseup');
    // })
    before(() => {
        // ensure clean test slate for these tests
        cy.then(Cypress.session.clearCurrentSessionData)

    })
    // @ts-ignore

    it("test1", {tags: "@r1"}, () => {
        console.log("im logged")
    })

    it("test2", {tags: "@r2"}, () => {
        console.log("im logged 2")
    })

    it('Drag and Drop actions using data tranfer', { tags: '@h1' }, () => {
        cy.visit('https://demo.seleniumeasy.com/drag-and-drop-demo.html')
        const dataTransfer = new DataTransfer;
        cy.get('[draggable="true"]')
            .eq(0)
            .trigger('dragstart', { dataTransfer });
        cy.get('#mydropzone')
            .trigger('drop', { dataTransfer })
            .wait(5000)
        // .trigger('dragend');
    })

    // @ts-ignore
    it('Check box and Radio boxes operations - 1', { tags: "@h2" }, () => {
        cy.visit('https://demo.seleniumeasy.com/basic-radiobutton-demo.html')
        cy.get('[value="Male"]').first().type('{enter}').check().should('be.checked')
        cy.get('#buttoncheck').contains('Get Checked value').click()
        cy.get('.radiobutton').first().should('contain.text', 'Male')
    })

    it('Check box and Radio boxes operations - 2', () => {
        cy.visit('https://demo.seleniumeasy.com/basic-radiobutton-demo.html')
        cy.get('[value="Male"]').first().type('{enter}').check().should('be.checked')
        cy.get('#buttoncheck').contains('Get Checked value').click()
        cy.get('.radiobutton').first().should('contain.text', 'Male')
    })

    it('Check box and Radio boxes operations - 3', () => {
        cy.visit('https://demo.seleniumeasy.com/basic-radiobutton-demo.html')
        cy.get('[value="Male"]').first().type('{enter}').check().should('be.checked')
        cy.get('#buttoncheck').contains('Get Checked value').click()
        cy.get('.radiobutton').first().should('contain.text', 'Male')
    })
})