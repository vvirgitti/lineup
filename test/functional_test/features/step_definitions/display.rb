Given(/^I am on the homepage$/) do
  visit('/')
end

Then(/^I should see a box to enter a name$/) do
  expect(page).to have_css('input[type="text"]')
end

When(/^I add a name and position$/) do
  fill_in('playerName', :with => 'John')
  fill_in('position', :with => 'Catch')
  click_button('Add Player')
end

Then(/^I should see the name of the player and the position displayed$/) do
  expect(page).to have_content("John Catch")
end

When(/^I add (\d+) names and (\d+) positions$/) do |arg1, arg2|
  fill_in('playerName', :with => 'John')
  fill_in('position', :with => 'Catch')
  click_button('Add Player')
  click_link('Add more players')
  fill_in('playerName', :with => 'Tim')
  fill_in('position', :with => 'Pitch')
  click_button('Add Player')
end


Then(/^I should see a list of names and positions$/) do
  expect(page).to have_content("John Tim Catch Pitch")
end
