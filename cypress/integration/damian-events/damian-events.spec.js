import { Given, And, Then, When, Before } from "cypress-cucumber-preprocessor/steps";
import HomePage from '../../support/selectors/homepageSelectors.js';
import '../../support/pages/homepageCommands.js';

let data;

Given('User set up data using json file in a fixture', () => {
    cy.fixture('damian-events.json').then((fixtureData) => {
        return data = fixtureData
    })
})

Given('User is on home page and selects a specific date as {string} from the calendar', (date) => {
    HomePage.open(date)
})

Then('User confirm events listed on the page that happen on that day', () => {
    HomePage.getEventDateTitle.contains('Saturday, November 20, 2021').should('be.visible')
    HomePage.getEventCardContent.contains('Sat Nov 20 2021').should('be.visible')
})

When('User search for a value as {string} using Search input', (value) => {
    cy.typeToSearch(value)
})

Then('User finds events listed on the page matching the phrase {string}', (searchPhrase) => {
    HomePage.getEventCardContent.contains(searchPhrase).should('be.visible')
})

When('User selects org as {string} from the Filter by Organization dropdown', (org) => {
    cy.filterByOrganization(org)
})

Then('User confirm that all events organized by that organization {string}', (org) => {
    HomePage.listOfOrganizedByValues.should('have.length', 4)
        .each(($el) => {
            expect($el.text().trim()).to.equal(org)
        })
})

And('User navigates to Todays Events as {string}', (events) => {
    cy.navigateToLinkUsingNavigationBar(events)
})

Then('User confirms no events listed on the page that happen on that day', () => {
    HomePage.getMainContent.contains(data.noEventsToday).should('be.visible')
})

When('User navigates to Featured Events as {string}', (events) => {
    cy.navigateToLinkUsingNavigationBar(events)
})

Then('User confirms the warning message no upcoming featured events', () => {
    HomePage.getMainContent.contains(data.noUpcomingEvents).should('be.visible')
})

And('User navigates to selected event details page as {string}', (event) => {
    cy.navigateToEventDetails(event)
})

Then('User validates event details of {string}', (event) => {
    HomePage.getMainContent.contains(event).should('be.visible')
    HomePage.getMainContent.contains(data.addToCalendar).should('be.visible')
    HomePage.getMainContent.contains(data.addToGoogleCalendar).should('be.visible')
    HomePage.getMainContent.contains(data.eventType).should('be.visible')
    HomePage.getMainContent.contains(data.contacts).should('be.visible')
    HomePage.getMainContent.contains(data.org).should('be.visible')
    HomePage.getMainContent.contains(data.eventDescription).should('be.visible')
})