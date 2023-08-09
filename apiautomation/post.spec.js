const {test} = require('@playwright/test')

test('get request', async function({request}){
    let response = await request.get('https://fakerestapi.azurewebsites.net/api/')
    await response.;
})