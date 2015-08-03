Feature: Display the interface to add new players

  Scenario: Display text boxes to add Names and Positions
    Given I am on the homepage
    Then I should see a box to enter a name

  Scenario: Adding a new player
    Given I am on the homepage
    When I add a name and position
    Then I should the data being saved and displayed in a list
