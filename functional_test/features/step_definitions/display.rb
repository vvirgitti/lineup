Given(/^I am on the homepage$/) do
  visit('/')
end

Then(/^I should see a box to enter a name$/) do
  expect(page).to have_css('input[type="text"]')
end

When(/^I add "([^"]*)" and "([^"]*)"$/) do |name, position|
  fill_in('playerName', :with => name)
  fill_in('position', :with => position)
  click_button('Add Player')
  sleep 3
end

Then(/^I should see "([^"]*)" and "([^"]*)"$/) do |name, position|
    expect(page).to have_content(name)
    expect(page).to have_content(position)
end
