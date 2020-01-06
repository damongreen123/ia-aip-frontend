Feature: Type iof appeal
  In order complete my appeal
  As a citizen
  I want to be able to enter my type of appeal

  Scenario: Home office reference page
    Given I have an appeal with home office details, personal details and contact details
    And I have logged in
    And I am on the type of appeal page
    When I click Save for later
    Then I should see the task-list page
    And I shouldnt be able to click "Check and send your appeal"

    Given I am on the type of appeal page
    And I click Save and continue
    Then I should see error summary

    Given I am on the type of appeal page
    When I select appeal type Protection
    And I click Save for later
    Then I should see the task-list page
    And I should be able to click "Check and send your appeal"

    Given I am on the type of appeal page
    When I select appeal type Protection
    And I click Save and continue
    Then I should see the task-list page
    And I should be able to click "Check and send your appeal"