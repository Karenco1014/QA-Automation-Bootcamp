import { Selector, t } from 'testcafe'
import { URLS, INFORMATIONPROJECT } from '../data/constants'
import { STANDARD_USER } from '../data/roles'
import basePage from '../pages/basePage'
import projectPage from '../pages/projectPage'

fixture ('Project page feature')
.page `${URLS.LOGIN_URL}`
.beforeEach(async t =>{
    await t.useRole(STANDARD_USER)
})

test.meta('Smoke','Production')('Create a new project.', async t =>{
    await basePage.ClickonprojectOption()
    await basePage.AddIconProjectOption()
    await projectPage.AddProjectOnFavorites(INFORMATIONPROJECT.DATA.NAME)
    await t.expect (projectPage.titleProject.innerText).eql(INFORMATIONPROJECT.DATA.NAME)
})
