import { Selector, t } from 'testcafe'
import todoistPage from '../pages/todoistPage'
import { URLS } from '../data/constants'
import loginPage from '../pages/loginPage'

fixture ('Todoist page feature')
.page `${URLS.TODOIST_URL}`

test('Go to login page.', async t => {
    await todoistPage.tapOnTheLoginButton()
    await t.expect(loginPage.pageLogin.exists).ok()
})