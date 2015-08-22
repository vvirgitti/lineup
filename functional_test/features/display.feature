Feature: Adding players to the roster

  Scenario: Display text boxes to add Names and Positions
    Given I am on the homepage
    Then I should see a box to enter a name

  Scenario Outline: Adding several players
    Given I am on the homepage
    When I add "<Name>" and "<Position>"
    Then I should see "<Name>" and "<Position>"
    Examples:
    | Name  | Position |
    | Oscar | Catch    |
    | Nathan| Pitcher  |
