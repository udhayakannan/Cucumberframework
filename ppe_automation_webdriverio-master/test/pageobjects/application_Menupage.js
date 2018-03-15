import Page from "./page";


class application_Menupage extends Page{
//Functions for Application Page to be written here
//driver.findElement(By.xpath("//ul[@id='boundlist-1053-listEl']/li[27]")).click();

get getAppmenuClick(){return browser.element('//ul[@id="boundlist-1053-listEl"]/li[17]');
}
get getAppmenuClick1(){return browser.element('//span[@id="button-1063-btnIconEl"]');
}   
get getAppmenuClick2(){return browser.element('//span[@id="button-1067-btnInnerEl"]');
}  
get getAppmenuClick4(){return browser.element('//span[@id="logoutBtn-btnInnerEl"]');}

optionSelect(getOption){
        browser.pause(10000);
        this.getAppmenuClick.click();
        }

        optionSelect1(){
            browser.pause(1000);
            this.getAppmenuClick1.click();
            }

            optionSelect2(){
                browser.pause(10000);
                this.getAppmenuClick2.click();
                browser.pause(20000);
                this.getAppmenuClick4.click();
                browser.pause(1000);
                }
}
export default new application_Menupage()