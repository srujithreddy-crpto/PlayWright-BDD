const { When } = require("@cucumber/cucumber");
const { LoginPO } = require("../POM/loginPagePO");

let loginPO;

When('User logins into application', async function(){
    loginPO = new LoginPO(page)
    await loginPO.enterUserName()
    await loginPO.enterPassword()
    await loginPO.clickLogin()
})