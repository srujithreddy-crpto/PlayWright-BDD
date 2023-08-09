Feature: YMGrad
    Background:
        When User logins into application
    @AllTests @Smoke @YMGrad @Profile
    Scenario: TC_001 User selects gender and date of birth
        When User clicks Edit and select "Gender"
        And User clicks Date of Birth and select dob
    
    @AllTests @Smoke @YMGrad @Profile
    Scenario: TC_002 User clicks resume and upload the file
        When User clicks "Upload Resume" and upload the file