Feature: Personal details enter address
In order complete my appeal
As a citizen
I want to be able to enter my address

Scenario: Home office reference page
  Given I have an appeal with home office details, name, date of birth and nationality
  And I have logged in
  And I am on the personal details enter address page
  When I click save for later
  Then I should see the task-list page
  And I shouldnt be able to click "Your contact details"

  Given I am on the personal details enter address page
  And I click save and continue
  Then I should see error summary

  Given I am on the personal details enter address page
  When I enter building and street "1 Some way", Town or city "Nowhere", Postcode "CM15 8BN"
  And I click save for later
  Then I should see the task-list page
  And I should be able to click "Your contact details"

  Given I am on the personal details enter address page
  When I enter building and street "1 Some way", Town or city "Nowhere", Postcode "CM15 8BN"
  And I click save and continue
  Then I should see the task-list page
  And I should be able to click "Your contact details"
