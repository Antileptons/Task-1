import {Page,Locator} from "@playwright/test"

export class HomePage {

    private readonly page:Page
    private readonly textInputLink: Locator
    private readonly sampleAppLink: Locator



    constructor (page:Page) {
        this.page = page
        this.textInputLink = this.page.getByText('Text Input')
        this.sampleAppLink = this.page.getByText('Sample App')
    }


    async textInputPage () {
    await this.textInputLink.click()
   

}
    async sampleAppPage () {
    await this.sampleAppLink.click()
    }
    










}