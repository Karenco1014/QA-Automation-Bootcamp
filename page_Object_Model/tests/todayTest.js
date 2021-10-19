import { Selector, t } from 'testcafe'
import todayPage from '../pages/todayPage'
import { INFORMATIONTASK, URLS } from '../data/constants'
import { STANDARD_USER } from '../data/roles'
import basePage from '../pages/basePage'
import loginPage from '../pages/loginPage'

fixture ('Today page feature')
.page `${URLS.LOGIN_URL}`
.beforeEach(async t =>{
    await t.useRole(STANDARD_USER)
    await basePage.ClickontodayOption()
})
.afterEach(async t =>{
    await todayPage.deletedMultipleTask()
    await t.expect(await Selector('.task_list_item').exists).notOk()   
})

test.meta('Smoke','Production')('Create a new task with Today', async t => {
    await todayPage.addTaskOntoday(INFORMATIONTASK.DATA.TITLE, INFORMATIONTASK.DATA.DESCRIPTION)
    await t.expect(todayPage.allTask.find('.markdown_content.task_content').nth(0).innerText).eql(INFORMATIONTASK.DATA.TITLE)
})

test('Create 10 new tasks.', async t => {
    await t.wait(3000)
    const numerTasks = await Selector('.task_list_item').count
    await todayPage.addMultipleTask(INFORMATIONTASK.DATA.TITLE, INFORMATIONTASK.DATA.DESCRIPTION)
    await t.expect(await Selector('.task_list_item').count - numerTasks).eql(todayPage.countTasks)
})


