@start-representing-yourself @lr-to-aip-noc @nightly-test
Feature: Legal Rep to Appellant in person Notice of change

Scenario: NoC Happy path LR to AiP
   Given I visit the start-representing-yourself page
   When I click start now

#   valid AAT/preview-AAT reference and access code until 04 Nov 2023
   And I enter the case reference number `1696495033924514`
   And I enter the access code `9J49YMKJEF5M`

   Then I should see the name `José González` and the case number `1696-4950-3392-4514`
   When I complete the case details page
   Then I am on the self register page
