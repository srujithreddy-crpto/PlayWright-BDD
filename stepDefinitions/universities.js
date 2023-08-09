const { When, Then } = require("@cucumber/cucumber")
const { UniversityPO } = require("../POM/universitiesPO")
const { ProfilePO } = require("../POM/profilePO")

let universityPO
let profilePO

When('User moves the mouse onto {string} and select the country as {string}', async function(university, country){
    universityPO = new UniversityPO(page)
    profilePO = new ProfilePO(page)
    await profilePO.clickCloseInProfilePopUp()
    await universityPO.mouseHoverOnUniversity(university)
    await universityPO.mouseHoverOnTopUniversities(country)
})

Then('User clicks the radio buttons of Acceptance Rate', async function(){
    universityPO = new UniversityPO(page)

    await universityPO.clickAcceptanceRate()
})

Then('User clicks on {string}', async function(decisionOption){
    universityPO = new UniversityPO(page)
    profilePO = new ProfilePO(page)
    await profilePO.clickCloseInProfilePopUp()
    await universityPO.clickDecisions(decisionOption)
})

When('User moves the slider in decision page', async function(){
    universityPO = new UniversityPO(page)
    await universityPO.handleSlider()
})