import { Role } from 'testcafe'
import loginPage from '../pages/loginPage'
import { URLS, CREDENTIALS } from './constants'

export const STANDARD_USER = Role(URLS.LOGIN_URL,async t =>{
    await loginPage.submitLoginForm(CREDENTIALS.STANDARD_USER_LOGIN.USERNAME, CREDENTIALS.STANDARD_USER_LOGIN.PASSWORD)
}, {preserveUrl:true})