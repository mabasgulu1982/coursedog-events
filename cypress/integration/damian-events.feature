Feature: Coursedog - damian events validation

    Background: Fixture - data set up
        Given User set up data using json file in a fixture

    Scenario Outline: User should be able to see events under selected date
        Given User is on home page and selects a specific date as "<date>" from the calendar
        Then User confirm events listed on the page that happen on that day
        When User search for a value as "<searchValue>" using Search input
        Then User finds events listed on the page matching the phrase "<searchValue>"
        When User selects org as "<org>" from the Filter by Organization dropdown
        Then User confirm that all events organized by that organization "<org>"

        Examples:
            | date       | searchValue | org      |
            | 2021/11/20 | Tokyo       | Model UN |

    Scenario Outline: User should be able to navigate to events using navigation bar
        Given User is on home page and selects a specific date as "<date>" from the calendar
        And User navigates to Todays Events as "<todayEvents>"
        Then User confirms no events listed on the page that happen on that day
        When User navigates to Featured Events as "<featuredEvents>"
        Then User confirms the warning message no upcoming featured events

        Examples:
            | date       | todayEvents    | featuredEvents  |
            | 2021/09/02 | Today’s Events | Featured Events |

    Scenario Outline: User should be able to validate event details
        Given User is on home page and selects a specific date as "<date>" from the calendar
        When User selects org as "<org>" from the Filter by Organization dropdown
        And User navigates to selected event details page as "<event>"
        Then User validates event details of "<event>"

        Examples:
            | date       | org      | event              |
            | 2021/11/20 | Model UN | QA Task Submission |
