
import { defineSupportCode } from 'cucumber';
//import yahooPage from '../pageobjects/yahoo-search.page';
//import loginPage from '../pageobjects/ta-login.page';
import sign from '../pageobjects/sign_in_page';
import option from '../pageobjects/menu_page';
import departmentPage from '../pageobjects/application_page'

defineSupportCode(function({ Given }) {

 
  // *** belongs to scenario TC_01 feature
  Given(/^I sample$/, function() {
   
  });

  // *** Related to Sign-Group feature
  Given(/^I open url "([^"]*)"$/, function(url){
    sign.open(url);
  });

    //
    Given(/^I login to the PPE application using credentials user "([^"]*)" pass "([^"]*)"$/, function(username,password){
      sign.login(username,password);
    });
    /*Given(/^I select an option "([^"]*)" on Menu page"$/, function(){
      option.optionSelect();
    });*/
    //Related to Scenario 1
    Given(/^I am on the menu page "([^"]*)"$/, function(url){
      //Function from the applications page to written here
      option.open(url);
    });
    /*Given(/^I am on the menu page "([^"]*)"$/, function(url){
      //Function from the applications page to written here
      option.open(url);
    });*/
    Given(/^I select an option "([^"]*)" on Menu page$/, function(getOption){
      option.optionSelect(getOption);
    });
    Given(/^I am on the application page "([^"]*)"$/, function(url){
      departmentPage.open(url);
    });
  
});