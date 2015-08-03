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

Then(/^I should the data being saved and displayed in a list$/) do
  expect(page).to have_content("John Catch")
end
