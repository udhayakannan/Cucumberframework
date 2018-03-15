import Page from "../page";

class SelectDepartment extends Page{
    //function for select department template to be written here
    get filterDepatmentInput(){return browser.element('//*[@id="textfield-1058-inputEl"]');}
    get departmentNameSpecific(){return browser.element('//*[@id="boundlist-1053-listEl"]/li');}
    get selectButton(){return browser.element('//*[@id="button-1067-btnInnerEl"]');}
    selectDepartment(department_value){
        this.filterDepatmentInput.setValue(department_value);
        this.departmentNameSpecific.doDoubleClick();
        this.selectButton.click();
        
    }
}
export default new SelectDepartment()