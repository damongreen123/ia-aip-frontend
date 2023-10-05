@testingTest
Feature: Testing Test

Scenario: Testing ExUI login flakiness fix
  Given I am on home page
  When I visit the health page
  Then I see "UP" on the page