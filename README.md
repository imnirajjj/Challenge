Automation Exercise - Cypress Test Suite
Project Overview

This project is an end-to-end test automation suite for the Automation Exercise
 website. It focuses on user signup, account creation, and dashboard verification, following the Page Object Model (POM) design pattern with Cypress and Faker.js for dynamic test data.

Features Tested

User Signup Flow

Fill all signup fields with valid data.

Generate dynamic names, emails, and passwords using Faker.js.

Verify account creation success message.

Continue to dashboard and confirm login.

Dashboard Verification

Ensure that the signed-up user's name appears correctly on the dashboard after login.

Data Persistence

Updated test data is written back to testData.json fixture for reusability.

Technologies & Tools

Test Framework: Cypress v15+

Language: JavaScript

Test Data Generation: Faker.js

Design Pattern: Page Object Model (POM)

Assertions & Reporting: Cypress default assertions and Cypress log

File Handling: Cypress fixtures (testData.json)

Locator Strategy: XPath (via cypress-xpath plugin)

Project Structure
cypress/
├── e2e/
│   └── signupFlow.cy.js          # Signup test flow
├── fixtures/
│   ├── testData.json             # Test data for signup
├── pages/
│   └── signupPage.js             # Page Object Model for signup
├── support/
│   ├── commands.js
│   ├── e2e.js
│   └── index.js
cypress.config.js                 # Cypress configuration
package.json                      # Project dependencies

Installation

Clone the repository:

git clone https://github.com/imnirajjj/Intuji.git


Navigate to the project folder:

cd Intuji


Install dependencies:

npm install


Ensure you have Cypress installed:

npx cypress verify

Running the Tests

Open Cypress Test Runner:

npx cypress open


Run all tests in headless mode:

npx cypress run


Specify a particular test file:

npx cypress run --spec "cypress/e2e/signupFlow.cy.js"

Usage

The tests generate a random user for every execution.

Test data is saved in testData.json for reference.

The POM (signupPage.js) handles all page interactions and verifications.

The test asserts that the signup process is successful and verifies the signed-up user's name on the dashboard.

Key Methods in POM
Method	Description
visit()	Opens the Automation Exercise homepage
clickSignup()	Clicks the signup/login button
fillName(name)	Fills in the signup name
fillEmail(email)	Fills in the signup email
submit()	Clicks the signup button
clickRadio()	Selects gender radio button
fillPassword(password)	Fills the password
fillDays(days) / fillMonth(month) / fillYear(year)	Selects date of birth
fillFirstName(firstName) / fillLastName(lastName)	Fills personal details
fillAddress(address) / fillCountry(country) / fillState(state) / fillCity(city) / fillZipCode(zip) / fillMobileNumber(number)	Fills address details
createAccount()	Clicks the create account button
verification()	Verifies "Account Created!" message
continueDashboard()	Continues to the dashboard page
accountLogin()	Verifies successful login
verifyDashboardName(name)	Asserts that the user's name appears on the dashboard
Notes

XPath locators are used for all elements for easier maintenance.

Faker.js ensures unique user data every test run.

This project follows the Page Object Model, improving readability and maintainability.