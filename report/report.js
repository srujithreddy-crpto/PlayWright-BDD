let reporter = require('cucumber-html-reporter')
let date = new Date()
let currentDate = date.getDate() + '-' + date.getMonth() + '-' +date.getFullYear() + '-' + date.getHours() + '-' + date.getMinutes() + '-' +date.getSeconds()
var options = {
    brandTitle: "Test report",
    theme: "bootstrap",
    jsonFile: "./report/cucumber_report.json",
    output: `./report/cucumber-report-${currentDate}.html`,
    reportSuiteAsScenarios: true,
    scenarioTimeStamp: true,
    launchReport: true,
    screenShotDirectory: "./Screenshots/.",
    storeScreenshots: true,
    columnLayout: 1,
    metadata:{
        "App Version": "9.0.3",
        "Test Environment": "QA",
        "Browser": "Chrome 115.0.5790.110",
        "Platform": "Windows",
        "Parallel": "Scenarios",
        "Executed": "Local"
    }
}

reporter.generate(options)