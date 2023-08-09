const { BeforeAll, Before, After, AfterAll, AfterStep, Status, setDefaultTimeout } = require("@cucumber/cucumber");
const { chromium } = require('playwright')
require('dotenv').config({ path: './.env' })
const { LoginPO } = require('../POM/loginPagePO')

let options = {
    headless: false,
    slowMotion: 100,
    args: ['--start-maximize'],
    viewport: {
        width: 1208,
        height: 800
    },
    use: {
        actionTimeout: 600 * 10000,
        navigationTimeout: 600 * 10000
    },
    timeout: 600 * 10000
}

setDefaultTimeout(600 * 10000)

BeforeAll(async function () {
    global.minTimeout = 3 * 1000,
        global.defaultTimeout = 5 * 1000,
        global.isSnapshotCaptured = false
})

Before(async function () {
    global.browser = await chromium.launch(options)
    global.context = await global.browser.newContext()
    global.page = await global.context.newPage()
    console.log("Before")
    loggers = (log) => {
        console.log(log)
        this.attach(log)
    }
    loggers(process.env.URL)
    await global.page.goto(process.env.URL)
    await global.page.waitForTimeout(10 * defaultTimeout)
    global.LoginPO = new LoginPO(global.page)
})

After(async function () {
    if (global.page != null) {
        await global.page.close()
    }
    if (global.context != null) {
        await global.context.close()
    }
})

AfterAll(async function () {
    global.isSnapshotCaptured = false
    if (global.browser != null) {
        await global.browser.close()
    }
})

AfterStep(async function (scenario) {
    if (scenario.result.status == Status.FAILED) {
        let buffer = await global.page.screenshot({ path: `report/${scenario.pickle.name}.png`, fullPage: true })
        this.attach(buffer, 'image/png')
        isSnapshotCaptured = true
    }
})