Feature: Check for a warning message while creating a sign without sign text in strategy screen
    As a user I want to check whether the warning message is displayed
    when I create a sign without sign text in strategy screen

    Background:
        Given I open url "<<URLLink>>"
        Given I login to the PPE application using credentials user "tkmajj7" pass "Price700"
        Given I am on the menu page "<<URLLink>>"
        Given I select an option "Price Entry - QA3 (Chrome Only)" on Menu page
        Given I am on the application page "<<URLLink>>"
        
    Scenario: SIG_849_TC01_ValidateWarningMsgForSignTextOnStrategyPage
        When I select department "027 - PRIVATE JEWELRY" on select department template
        When I select the forward button
        When I click select button
        
    