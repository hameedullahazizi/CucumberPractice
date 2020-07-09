Feature: test login functionality 
@Smoke
Scenario Outline:
Given I open the browser
When I go to this "https://login.salesforce.com/" environment
Then I enter "<username>" and "<password>" 
And I click "Login" 

Examples:
|username|password|
|batch03@codegator.us.qa|Pa555word|