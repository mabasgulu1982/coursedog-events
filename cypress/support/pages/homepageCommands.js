import HomePage from '../../support/selectors/homepageSelectors.js';

Cypress.Commands.add('typeToSearch', (value) => {
    HomePage.searchInput.type(value)
})

Cypress.Commands.add('filterByOrganization', (org) => {
    HomePage.filterByOrgDropdown.select(org)
})

Cypress.Commands.add('navigateToLinkUsingNavigationBar', (events) => {
    HomePage.navigationBar.contains(events).click()
})

Cypress.Commands.add('navigateToEventDetails', (event) => {
    HomePage.getMainContent.contains(event).click()
})