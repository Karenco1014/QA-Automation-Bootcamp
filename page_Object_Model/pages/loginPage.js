import { Selector, t } from 'testcafe'

class loginPage {
    constructor(){
        this.pageLogin = Selector('h1').withExactText('Log in')
        this.usernameInput = Selector('#email')
        this.passwordInput = Selector('#password')
        this.buttonLogin = Selector('button')
        this.errorMessagesContent = Selector('.error_msg')
    }

    async submitLoginForm(username, password){
        await t.typeText(this.usernameInput,username)
        await t.typeText(this.passwordInput,password)
        await t.click(this.buttonLogin)
    }

    async submitLoginFormEmpty(username, password){
        if(!username && !password){
            await t.click(this.buttonLogin)
        }    
    }
}
export default new loginPage