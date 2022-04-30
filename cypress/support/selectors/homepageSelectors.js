class HomePage {

    open(date) {
        cy.visit(Cypress.env('url') + date);
    }

    get getMainContent() {
        return cy.get("article#main-content")
    }

    get getEventDateTitle() {
        return cy.get("article#main-content h1>span")
    }

    get getEventCardContent() {
        return cy.get("div[role='listitem']")
    }

    get searchInput() {
        return cy.get("input[role='search']")
    }

    get filterByOrgDropdown() {
        return cy.get("#orgSelect")
    }

    get listOfOrganizedByValues() {
        return cy.get("div[data-test='organisation'] a")
    }

    get navigationBar() {
        return cy.get("div[class='md:flex-grow font-semibold']")
    }
}

export default new HomePage();