@start-representing-yourself @lr-to-aip-noc @nightly-test
Feature: Legal Rep to Appellant in person Notice of change

Scenario: NoC Happy path LR to AiP
   Given I visit the start-representing-yourself page
   When I click start now

#   valid AAT/preview-AAT reference and access code until 04 Nov 2025
   And I enter the case reference number `1678843203065810`
   And I enter the access code `2LMCH8YDLPY4`

   Then I should see the name `José González` and the case number `1678-8432-0306-5810`
   And I see the confirm case details page
#   When I complete the case details page
#   Then I am on the self register page
