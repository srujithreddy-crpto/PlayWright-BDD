const { When, Then } = require("@cucumber/cucumber");
const {ProfilePO} = require('../POM/profilePO')

let profilePO

When('User clicks Edit and select {string}', async function(gender){
    profilePO = new ProfilePO(page)
    await profilePO.clickCloseInProfilePopUp()
    await profilePO.clickEditInProfile()
    await profilePO.selectGender(gender)
})

Then('User clicks Date of Birth and select dob', async function(){
    profilePO = new ProfilePO(page)
    await profilePO.selectDateOfBirth("October", "1992")
})

Then('User clicks {string} and upload the file', async function(resumeUpload){
    profilePO = new ProfilePO(page)
    await profilePO.clickCloseInProfilePopUp()
    await profilePO.clickEditInProfile()
    await profilePO.clickUploadResume(resumeUpload)
    await profilePO.uploadFile()
})