const { assert } = require("chai")
const { BrowserUtils } = require("../Utils/browserUtils")
let browserUtils = new BrowserUtils(global.page)
class PageBase {
    constructor(page) {
        this.page = page
    }

    async compareTextContent(label, locator, expectedValue) {
        let actualValue = await browserUtils.getElementTextContent(locator, defaultTimeout)
        actualValue = actualValue != null ? String(actualValue).trim() : actualValue
        expectedValue = expectedValue != null ? String(expectedValue).trim() : expectedValue
        assert.equal(actualValue, expectedValue, `The ${actualValue} does not matches with ${expectedValue}`)
        loggers(`The ${label} of ${actualValue} matches with ${expectedValue}`)
    }

    async compareInputText(label, locator, expectedValue) {
        let actualValue = await browserUtils.getInputText(locator, defaultTimeout)
        actualValue = actualValue != null ? String(actualValue).trim() : actualValue
        expectedValue = expectedValue != null ? String(expectedValue).trim() : expectedValue
        assert.equal(actualValue, expectedValue, `The ${actualValue} does not matches with ${expectedValue}`)
        loggers(`The ${label} of ${actualValue} matches with ${expectedValue}`)
    }

    async compareAttributeValue(label, locator, value, expectedValue) {
        let actualValue = await browserUtils.getAttributeValue(locator, value, defaultTimeout)
        actualValue = actualValue != null ? String(actualValue).trim() : actualValue
        expectedValue = expectedValue != null ? String(expectedValue).trim() : expectedValue
        assert.equal(actualValue, expectedValue, `The ${actualValue} does not matches with ${expectedValue}`)
        loggers(`The ${label} of ${actualValue} matches with ${expectedValue}`)
    }

    async compareContent(actualValue, expectedValue) {
        actualValue = actualValue != null ? String(actualValue).trim() : actualValue
        expectedValue = expectedValue != null ? String(expectedValue).trim() : expectedValue
        assert.equal(actualValue, expectedValue, `The ${actualValue} does not matches with ${expectedValue}`)
        loggers(`The ${label} of ${actualValue} matches with ${expectedValue}`)
    }

    async comparePartialContent(actualValue, expectedValue) {
        actualValue = actualValue != null ? String(actualValue).trim() : actualValue
        expectedValue = expectedValue != null ? String(expectedValue).trim() : expectedValue
        assert.include(actualValue, expectedValue, `The ${actualValue} does not includes ${expectedValue}`)
        loggers(`The ${label} of ${actualValue} matches with ${expectedValue}`)
    }
}

module.exports = { PageBase }