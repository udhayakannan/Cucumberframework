import Page from "./page";

class MenuPage extends Page{
    //The function for clicking on the Menu option goes here
    get getPEMenuClick(){return browser.element('.//*[@id="optionTree"]/a[5]');}
    

    open(url){
        super.open(url)
        browser.pause(10000);
    }
    optionSelect(getOption){
        this.getPEMenuClick.click();
        

    }
}
export default new MenuPage()