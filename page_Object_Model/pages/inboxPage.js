import { count } from 'console'
import { Selector, t } from 'testcafe'


class inboxPage {
    constructor() {
        this.createTaskButton = Selector('.plus_add_button')
        this.titleTaskInput = Selector('main .public-DraftStyleDefault-block.public-DraftStyleDefault-ltr')
        this.descriptionTaskInput = Selector('.task_editor__description_field.no-focus-marker')
        this.addTaskButton = Selector('main button').withText('Add task')
        this.scheduleButton = Selector('.item_due_selector_text').withText('Schedule')
        this.tomorrowButton = Selector('.scheduler-suggestions-item-label').withText('Tomorrow')
        this.addTaskButton = Selector('main button').withText('Add task')
        this.tomorrowTasklabel = Selector('main .date.date_tom').withText("Tomorrow")
    }

    async addTaskOnTomorrowLabel(titleInput, descriptionInput){
        await t.click(this.createTaskButton)
        await t.typeText(this.titleTaskInput,titleInput)
        await t.typeText(this.descriptionTaskInput,descriptionInput)
        await t.click(this.scheduleButton)
        await t.click(this.tomorrowButton)
        await t.click(this.addTaskButton)

    }
    
}

export default new inboxPage