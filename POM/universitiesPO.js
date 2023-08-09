const { assert } = require("chai")
const { BrowserUtils } = require("../Utils/browserUtils")
const { PageBase } = require("../pageBase/pageBase")
let browserUtils = new BrowserUtils(global.page)

class UniversityPO extends PageBase {
    constructor(page) {
        super()
        this.page = page
        this.universities = function (university) {
            return `(//div[contains(text(),"${university}")])[1]`
        }
        this.topUniversities = '//div[contains(@class,"top-universities-by-country")]'
        this.topUniversitiesCountry = function (country) {
            return `//div[@id="top-universities-by-country"]//div[contains(text(),"${country}")]`
        }
        this.acceptanceRate = function (index) {
            return `(//input[@name="acceptance_rate"][@type="radio"])[${index}]`
        }
        this.acceptanceRateCount = '//input[@name="acceptance_rate"][@type="radio"]'
        this.countries = function (country) {
            return `input#states_${country}_university_search`
        }
        this.decisionOptions = function (decision) {
            return `(//div[text()="${decision}"])[1]`
        }
        this.sourceSlider = '(//span[@aria-labelledby="range-slider"])[1]'
        this.destinationSlider = '(//span[@aria-labelledby="range-slider"])[2]'
        this.filtersContent = '(//div[contains(text(),"Filter")])[1]'
        this.slider = '(//span[@class="MuiSlider-track"])[1]'
        this.sourceLocator = '(//span[@class="MuiSlider-thumb MuiSlider-thumbColorPrimary"])[1]'
        this.targetLocator = '(//span[@class="MuiSlider-thumb MuiSlider-thumbColorPrimary"])[2]'
    }

    async mouseHoverOnUniversity(university) {
        assert.isTrue(await browserUtils.mouseHover(this.universities(university)), `Unable to hover on ${university} in University page`)
        loggers(`Mouse hover on ${university} in University page`)
    }

    async mouseHoverOnTopUniversities(country) {
        assert.isTrue(await browserUtils.mouseHover(this.topUniversities), 'Unable to hover onto Top Universities')
        loggers('Mouse hover onto Top Universities in University page')
        assert.isTrue(await browserUtils.clickElement(this.topUniversitiesCountry(country)), `Unable to click on ${country} in Top Universities page`)
        loggers(`Clicked on ${country} in Top Universities page`)
    }

    async clickAcceptanceRate() {
        let acceptanceRate = await browserUtils.getCount(this.acceptanceRateCount, defaultTimeout)
        for (let index = 1; index <= acceptanceRate - 8; index++) {
            assert.isTrue(await browserUtils.clickElement(this.acceptanceRate(index), minTimeout), `Unable to click AcceptanceRate in Universities Page`)
            loggers(`Successfully clicked the ${index} of Acceptance Rate in Universities`)
        }
    }

    async clickDecisions(decision) {
        assert.isTrue(await browserUtils.clickElement(this.decisionOptions(decision)), `Unable to click on ${decision} in Home page`)
        loggers(`Successfully clicked the ${decision} in Home page`)
        await this.compareTextContent('The Actual filters', this.filtersContent, "Filters")
    }

    async handleSlider() {
        assert.isTrue(await browserUtils.handleSlider(this.slider, this.sourceLocator, this.targetLocator, 65 * 0.01, minTimeout), `Unable to move the slider`)
        loggers('Successfully moved the slider')
        await page.waitForTimeout(defaultTimeout * 3)
    }
}

module.exports = { UniversityPO }