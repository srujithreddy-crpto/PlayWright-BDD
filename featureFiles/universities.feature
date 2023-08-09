Feature: YMGrad
    Background:
        When User logins into application
    @AllTests @Smoke @YMGrad @University1
    Scenario: TC_001 User navigates to University
        When User moves the mouse onto "Universities" and select the country as "Netherlands"
        And User clicks the radio buttons of Acceptance Rate

    @AllTests @Smoke @YMGrad @University
    Scenario: TC_002 User navigates to decision
        When User clicks on "Decisions"
        And User moves the slider in decision page
