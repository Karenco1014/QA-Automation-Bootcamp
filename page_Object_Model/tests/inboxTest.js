import { Selector, t } from 'testcafe'
import { INFORMATIONTASK, URLS } from '../data/constants'
import { STANDARD_USER} from '../data/roles'
import basePage from '../pages/basePage'
import inboxPage from '../pages/inboxPage'

fixture ('Inbox page feature')
.page `${URLS.LOGIN_URL}`
.beforeEach(async t =>{
    await t.useRole(STANDARD_USER)
    await basePage.ClickoninboxOption()
})

test.meta('Smoke','Production')('Create a single task selecting tomorrow', async t =>{
    await inboxPage.addTaskOnTomorrowLabel(INFORMATIONTASK.DATA.TITLE,INFORMATIONTASK.DATA.DESCRIPTION)
    await t.expect(inboxPage.tomorrowTasklabel.nth(-1).exists).ok()

})