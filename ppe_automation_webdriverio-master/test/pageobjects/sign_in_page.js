import Page from "./page";

class SignInPage extends Page{


    /*
    Define Elements
    */
    get userNameInput(){ return browser.element('.//*[@id="form-username"]');}
    get passordInput(){return browser.element('.//*[@id="form-password"]');}
    get loginButton(){return browser.element('.//*[@id="btnSubmit"]');}
    get footerImage(){ return browser.element('.//*[@id="footerCopyrightText"]'); }
    /**
    * define or overwrite page methods
    */
    open(url){
        browser.pause(2000);

        browser.url(url)
        browser.windowHandleMaximize();
        if(!this.userNameInput.isVisible()){
            this.userNameInput.waitForVisible(10000);
          }
        browser.pause(1000);
    }
        waitForloginPageToLoad () {
            if(!this.footerImage.isVisible()){
              this.footerImage.waitForVisible(500);
            }
    }

    login(username, passsword){
        browser.pause(1000);

        this.userNameInput.setValue(username);
        browser.pause(1000);

        this.passordInput.setValue(passsword);
        browser.pause(1000);

        this.loginButton.click();
        browser.pause(10000);
           }

}

export default new SignInPage()



