import { Selector, t } from 'testcafe'

class projectPage {
    constructor(){
        this.projectNameInput = Selector ('#edit_project_modal_field_name')
        this.projectColorDropdown = Selector ('.color_dropdown_select__name').withText('Charcoal')
        this.switchFavoritesOption = Selector ('.reactist_switch')
        this.colorOption = Selector ('.color_dropdown_select__name').withText('Magenta')
        this.addProjectButton = Selector ('.ist_button_red')
        this.titleProject = Selector ('header h1 .simple_content')
    }
    async AddProjectOnFavorites(nameProject){
        await t.typeText(this.projectNameInput, nameProject)
        await t.click(this.projectColorDropdown)
        await t.click(this.colorOption)
        await t.click(this.switchFavoritesOption)
        await t.click(this.addProjectButton)
    }
}

export default new projectPage