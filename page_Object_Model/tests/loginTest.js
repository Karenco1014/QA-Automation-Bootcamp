import { Selector, t } from 'testcafe'
import { STANDARD_USER } from '../data/roles'
import { URLS, MESSAGES, CREDENTIALS } from '../data/constants'
import homePage from '../pages/homePage'
import todoistPage from '../pages/todoistPage'
import loginPage from '../pages/loginPage'

fixture ('Login page feature')
.page `${URLS.LOGIN_URL}`

test('Successful login.', async t =>{
    await t.useRole(STANDARD_USER)
    await t.expect (homePage.todayTitle.exists).ok()
})

test.meta('Smoke','Production')('Log in without providing any credentials.', async t =>{
    await loginPage.submitLoginFormEmpty()
    await t.expect(loginPage.errorMessagesContent.innerText).contains(MESSAGES.ERROR.LOGIN_FORM.EMPTYCREDENTIALS)
})

test.meta('Smoke','testing')('Login with a invalid user.', async t =>{
    await loginPage.submitLoginForm(CREDENTIALS.STANDARD_INVALID_USERNAME_LOGIN.USERNAME, CREDENTIALS.STANDARD_INVALID_USERNAME_LOGIN.PASSWORD)
    await t.expect(loginPage.errorMessagesContent.innerText).contains(MESSAGES.ERROR.LOGIN_FORM.INVALIDCREDENTIALS)
})

test('Login with a invalid password.', async t =>{
    await loginPage.submitLoginForm(CREDENTIALS.STANDARD_INVALID_PASSWORD_LOGIN.USERNAME, CREDENTIALS.STANDARD_INVALID_PASSWORD_LOGIN.PASSWORD)
    await t.expect(loginPage.errorMessagesContent.innerText).contains(MESSAGES.ERROR.LOGIN_FORM.INVALIDCREDENTIALS)
})
