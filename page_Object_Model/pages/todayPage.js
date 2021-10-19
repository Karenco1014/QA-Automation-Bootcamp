import { waitForDebugger } from 'inspector'
import { Selector, t } from 'testcafe'


class todayPage {
    constructor() {
        this.createTaskButton = Selector('.plus_add_button')
        this.titleTaskInput = Selector('.public-DraftStyleDefault-block.public-DraftStyleDefault-ltr')
        this.descriptionTaskInput = Selector('main .task_editor__description_field.no-focus-marker')
        this.addTaskButton = Selector('main button').withText('Add task')
        this.createdTask = Selector('.markdown_content.task_content')
        this.allTask = Selector('.task_list_item')
        this.countTasks = 10
        this.contentListTasksOptions = Selector('.item_menu_list')
        this.contentdeletedTasksButton = Selector('.confirm_dialog__actions')
    }

    async addTaskOntoday(titleInput, descriptionInput){
        await t.click(this.createTaskButton)
        await t.typeText(this.titleTaskInput,titleInput)
        await t.typeText(this.descriptionTaskInput,descriptionInput)
        await t.click(this.addTaskButton)
    }

    async addTaskOnTomorrowLabel(titleInput, descriptionInput){
        await t.click(this.createTaskButton)
        await t.typeText(this.titleTaskInput,titleInput)
        await t.typeText(this.descriptionTaskInput,descriptionInput)
        await t.click(this.addTaskButton)
    }
    
     async addMultipleTask(titleInput, descriptionInput){
         await t.click(this.createTaskButton) 
         for (let i = 0; i <=this.countTasks-1; i++) {
             await t.typeText(this.titleTaskInput,`${titleInput} ${i}`)
             await t.typeText(this.descriptionTaskInput,`${descriptionInput} ${i}`)
             await t.click(this.addTaskButton)
        }
    }

    async deletedMultipleTask(){
        this.countalltasks = await this.allTask.count
        for (let i = 0; i < this.countalltasks; i++) {
                await t.scrollIntoView(Selector('#content'), { offsetX: 1, offsetY: 1 })
                await t.hover(this.allTask.nth(0)).click(this.allTask.find('.more_actions_button').nth(0))
                await t.click(Selector('.item_menu_list .danger_menu'))
                await t.click(this.contentdeletedTasksButton.find('.ist_button_red').nth(0))


        }
        await t.wait(2000)
    }


}

export default new todayPage