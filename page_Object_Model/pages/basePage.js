import { Selector, t } from 'testcafe'

class basePage {
    constructor(){
        this.todayOption = Selector ('.item_content').withText('Today')
        this.inboxOption = Selector ('.item_content').withText('Inbox')
        this.clickonprojectOption = Selector ('.expansion_panel__toggle').withText('Projects')
        this.addIconProjectOption = Selector ('.adder_icon')
    }

    async ClickontodayOption(){
        await t.click(this.todayOption)
    }

    async ClickoninboxOption(){
        await t.click(this.inboxOption)
    }

    async ClickonprojectOption(){
        await t.click(this.clickonprojectOption)
    }

    async AddIconProjectOption(){
        await t.click(this.addIconProjectOption)
    }
}


export default new basePage