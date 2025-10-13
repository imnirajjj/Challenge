Automation Exercise - Cypress Test Suite
Project Overview

This project is an end-to-end test automation suite for the Automation Exercise. It focuses on user signup, account creation, and dashboard verification, following the Page Object Model (POM) design pattern with Cypress and Faker.js for dynamic test data.

Features Tested

1.User Signup Flow
-Fill all signup fields with valid data.
-Generate dynamic names, emails, and passwords using Faker.js.
-Verify account creation success message.
-Continue to dashboard and confirm login.
-Dashboard Verification
-Ensure that the signed-up user's name appears correctly on the dashboard after login.
-Updated test data is written back to testData.json fixture for reusability.

2. Product Browsing
-Navigate to the Products page.
-Expand the Women category panel.
-Click on the Dress category.
-Product Filtering
-Verify that the filtered products list contains the expected keyword (from fixture data).
-Click on the first product’s View Product link.
-Verify the product name matches the expected keyword.
-Verify the product price is displayed.
-Verify the product availability is displayed.

3.Cart Navigation
-Navigate to the Products page.
-Navigate to the Cart page.
-Add Products to Cart
-Add multiple products to the cart (three products in this case).
-Verify the “Added!” modal appears for each product.
-Click Continue Shopping after each product is added.
-Open the first product’s detail page.
-Fill in a custom quantity for the product (from fixture data).
-Proceed to Checkout and View Cart to confirm the quantity is applied.

4.Cart Navigation
-Navigate to the Cart page.
-Proceed to Checkout.
-Fill payment details using Faker-generated fake card data:
-Payment Confirmation
-Submit the payment.
-Verify that the order confirmation message appears.

5. Logout Feature
-Navigate to the login page.
-Enter email and password from the signup credentials.
-Verify successful login.
-Click the Logout button.
-Confirm that the user is redirected to the login page.

Technologies & Tools
- Test Framework: Cypress v15+
- Language: JavaScript
- Test Data Generation: Faker.js
- Design Pattern: Page Object Model (POM)
- Reporting: Mochawesome
- File Handling: Cypress fixtures (testData.json)
- Locator Strategy: XPath (via cypress-xpath plugin)

Project Structure

cypress/
├── e2e/
│   ├── signupFlow.cy.js          # Signup test flow
│   ├── authFlow.cy.js            # Login/Logout test flow
│   ├── browsingFlow.cy.js        # Product browsing & filtering
│   ├── cartFlow.cy.js            # Cart & quantity management
│   └── checkoutFlow.cy.js        # Checkout flow with payment
├── fixtures/
│   ├── testData.json             # Signup & checkout test data
│   └── fixedData.json            # Product filtering & quantity data
├── pages/
│   ├── signupPage.js
│   ├── logoutPage.js
│   ├── productBrowsingPage.js
│   ├── cartPage.js
│   └── checkoutPage.js
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

