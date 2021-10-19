import { Selector, t } from 'testcafe'

class homePage {
    constructor(){
        this.todayTitle = Selector('h1').withText('Today')
    }
}

export default new homePage