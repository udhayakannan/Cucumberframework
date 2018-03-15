
import { defineSupportCode } from 'cucumber';
import udhaya from "../pageobjects/application_Menupage";

defineSupportCode(function({ When }) {
  ///Starting of TC_01 scenario
  When(/^I select department "([^"]*)" on select department template$/, function(dropdownitem){
    //Function defined in the application_page imported from select_department_template to be written here
  udhaya.optionSelect(dropdownitem);

  });
  When(/^I select the forward button$/, function(){
    //Function defined in the application_page to be written here
    udhaya.optionSelect1();
  });
  When(/^I click select button$/, function(){
    //Function defined in the application_page to be written here
    udhaya.optionSelect2();
  });

  When(/^I remove pre-added merchandise group on application page$/, function(){
    //Function defined in the application_page to be written here

  });
  
  When(/^I add new Merchandise group on the Add Merchandise Group template$/, function(){
    //Function defined in the application_page imported from add_merchandise_group to be written here

  });
  
  When(/^I click on save button of assign sign template$/, function(){
    //Function defined in the application_page imported from assign_sign page to be written here

  });
  
  When(/^I select a template "([^"]*)" on the Sign Wizard template$/, function(){
    //Function defined in the application_page imported from sign_wizard page to be written here
    

  });

  When(/^I enter a 8 letter sign group "([^"]*)"$/, function(){
    //Function defined in the application_page imported from sign_wizard page to be written here
    
});




  //Ending of TC_01 scenario

});
