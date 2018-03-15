import Page from "./page";
import departmentSelect from "../pageobjects/subpages/select_depatment_template";
import addMerchandise from "../pageobjects/subpages/add_mechandise_group";
import assignSign from "../pageobjects/subpages/assign_sign";
import signWizard from "../pageobjects/subpages/sign_wizard";

class ApplicationPage extends Page{
//Functions for Application Page to be written here
open(url){
    super.open(url)
    browser.pause(10000);
}

/**********
******** */

//Functions for imported subpages to be written here


}
export default new ApplicationPage()