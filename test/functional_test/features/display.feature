Feature: Display the interface to add new players

  Scenario: Display text boxes to add Names and Positions
    Given I am on the homepage
    Then I should see a box to enter a name

  Scenario: Adding a new player
    Given I am on the homepage
    When I add a name and position
    Then I should see the name of the player and the position displayed

  Scenario: Adding 2 players
    Given I am on the homepage
    When I add 2 names and 2 positions
    Then I should see a list of names and positions
