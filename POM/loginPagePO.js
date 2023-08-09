const { assert } = require("chai")
const { BrowserUtils } = require("../Utils/browserUtils")
// require('dotenv').config({path: './.env'})
let browserUtils = new BrowserUtils(global.page)
class LoginPO {
    constructor(page) {
        this.page = page
        this.userName = '#id_username'
        this.password = '#id_password'
        this.login = '//input[@value="Login"]'
        this.logout = '//div[@id="list8"]'
        this.logoutButton = '//div[text()="Logout"]'
    }

    async enterUserName() {
        assert.isTrue(await browserUtils.setInputText(this.userName, process.env.user_Name, minTimeout), `Unable to enter the UserName as ${process.env.userName}`)
        loggers(`The UserName entered as ${process.env.userName}`)
    }

    async enterPassword() {
        assert.isTrue(await browserUtils.setInputAndClickTab(this.password, process.env.Password, minTimeout), `Unable to enter the Password as ${process.env.password}`)
        loggers(`The password entered as ${process.env.password}`)
    }

    async clickLogin() {
        assert.isTrue(await browserUtils.clickElement(this.login, defaultTimeout), `Unable to click the login`)
        loggers(`Successfully clicked the login in YMGrad`)
        await page.waitForTimeout(30000)
    }

    async logOut() {
        assert.isTrue(await browserUtils.mouseHover(this.logout, minTimeout), `Unable to hover onto logout bar`)
        loggers('Successfully mouse moved onto logout bar')
        assert.isTrue(await browserUtils.clickElement(this.logoutButton, minTimeout), `Unable to click on logout`)
        loggers('Successfully clicked on logout button')
    }
}

module.exports = { LoginPO }