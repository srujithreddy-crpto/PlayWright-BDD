const { assert } = require("chai")
const { BrowserUtils } = require("../Utils/browserUtils")
const { PageBase } = require("../pageBase/pageBase")
const dayjs = require("dayjs")
let browserUtils = new BrowserUtils(global.page)

class ProfilePO extends PageBase {
    constructor(page) {
        super()
        this.page = page
        this.closeButtonInUploadPopUp = '//div[contains(@class,"close_uplaod_modal")]'
        this.editButton = '//a[contains(text(),"Edit")]'
        this.basicInfo = '(//div[@class="rwt__tabpanel "]//h2)[1]'
        this.gender = '//span[@id="gender"]'
        this.genderTextBox = '//div[@class="form-group"]//input[@aria-autocomplete="list"]'
        this.genderContent = function (gender) {
            return `//span[text()="${gender}"]`
        }
        this.genderSaveChanges = '//button[text()="Save Changes"]'
        this.dateOfBirth = '(//label[text()="Date of Birth"]//following::span[contains(@class,"EditProfile")])[1]'
        this.dateOfBirthTextContent = '(//div[contains(@class,"EditProfileGenderModal")]//span)[1]'
        this.dateAndYear = 'input[placeholder="dd/mm/yyyy"]'
        this.month = 'select.react-datepicker__month-select'
        this.year = '//select[contains(@class,"datepicker__year")]'
        this.uploadResume = function (resume) {
            return `//span[contains(text(),"${resume}")]`
        }
        this.uploadResumeFile = 'input#resume'
    }

    async clickCloseInProfilePopUp() {
        assert.isTrue(await browserUtils.clickElement(this.closeButtonInUploadPopUp), `Unable to click close button in Upload popup`)
        loggers('Successfully clicked the closed button of Upload Profile popup')
    }

    async clickEditInProfile() {
        assert.isTrue(await browserUtils.clickElement(this.editButton), "Unable to click Edit in Profile page")
        loggers("Successfully clicked the edit button in Profile page")
        await this.compareTextContent("The Basic Info", this.basicInfo, "Basic info")
    }

    async selectGender(gender) {
        assert.isTrue(await browserUtils.clickElement(this.gender, minTimeout), `Unable to click gender in Profile`)
        loggers("Successfully clicked the gender")
        await this.compareTextContent("The Gender content", this.genderContent(gender), "Gender")
        assert.isTrue(await browserUtils.setInputText(this.genderTextBox, "Male"), "Unable to select Male in Gender")
        loggers("Gender is selected as Male")
        assert.isTrue(await browserUtils.clickElement(this.genderSaveChanges), 'Unable to click save changes in Gender popup')
        loggers("Successfully clicked the save changes in gender popup")
    }

    async selectDateOfBirth(month, year) {
        assert.isTrue(await browserUtils.clickElement(this.dateOfBirth), `Unable to click Date of Birth in Edit Info`)
        loggers('Successfully clicked on date of birth in Edit Info')
        await this.compareTextContent('Date of Birth Text Content', this.dateOfBirthTextContent, "Date of Birth")
        assert.isTrue(await browserUtils.clickElement(this.dateAndYear), 'Unable to click the date and Year')
        loggers('Successfully clicked the Date and Year in date of birth popup')
        assert.isTrue(await browserUtils.selectOptionsBasedOnLabel(this.month, month, defaultTimeout), `Unable to select ${month} in Date of Birth`)
        loggers(`Month is selected as ${month} in date of birth`)
        assert.isTrue(await browserUtils.selectOptionsBasedOnLabel(this.year, year, defaultTimeout), `Unable to select ${year} in Date of Birth`)
        loggers(`Year is selected as ${year} in date of birth`)
        let date = dayjs('1992-10-27').format('DD/MM/YYYY')
        assert.isTrue(await browserUtils.setInputText(this.dateAndYear, date, defaultTimeout), `Unable to set input as ${date} in Date of Birth popup`)
        loggers(`Date is entered as ${date} in Date of Birth`)
        assert.isTrue(await browserUtils.clickElement(this.genderSaveChanges, minTimeout), `Unable to click Save Changes in Date of Birth popup`)
        loggers(`Successfully clicked on Save Changes in Date of Birth`)
    }

    async clickUploadResume(resume) {
        assert.isTrue(await browserUtils.clickElement(this.uploadResume(resume), minTimeout), `Unable to click on resume`)
        loggers('Successfully clicked the resume')
    }

    async uploadFile() {
        let file_path = '../Downloads/AletiSrujithReddyResume.pdf'
        assert.isTrue(await browserUtils.uploadFile(this.uploadResumeFile, file_path), `Unable to upload the file in Upload Resume`)
        loggers(`Successfully uploaded the file ${file_path} in  Upload Resume`)
    }
}

module.exports = { ProfilePO }