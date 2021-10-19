import { Selector, t } from 'testcafe'

class todoistPage {
    constructor(){
        this.buttonGoLogin = Selector ('li>a._2q_cf').withAttribute('href', '/users/showlogin')
   
    }
    
    async tapOnTheLoginButton(){
        await t.click(this.buttonGoLogin)

    }
}

export default new todoistPage