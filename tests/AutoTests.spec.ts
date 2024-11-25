import {test,expect} from '@playwright/test'
import { HomePage } from '../Page - Objects/HomePage'
import { TextInputPage } from '../Page - Objects/TextInputPage'
import { SampleAppPage } from '../Page - Objects/SampleAppPage'



test.beforeEach (async({page})=>{

    await page.goto('http://uitestingplayground.com/')

})


test ('Verify Text Input Functionality',async ({page})=>{

    const homePage = new HomePage(page)
    await homePage.textInputPage()
    const textInputPage = new TextInputPage(page)
    await textInputPage.inputRandomData()
    const textFill = await textInputPage.textBoxContent()
    await textInputPage.clickButton()
    const buttonFill = await textInputPage.buttonContent()
    expect(buttonFill).toEqual(textFill)
})


test ('Verify Login Functionality', async ({page})=>{

    const homePage = new HomePage(page)
    await homePage.sampleAppPage()
    const sampleAppPage = new SampleAppPage(page)
    await sampleAppPage.randomUsernameLogIn()
    const logInButtonValue = await sampleAppPage.logInButtonValue()
    expect (logInButtonValue).toEqual("Log Out")
})