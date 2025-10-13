import CheckOutPage from "../pages/checkoutPage";
import { faker } from '@faker-js/faker';

describe("Checkout Flow with Fake Payment", () => {
  let dashboard;

  before(() => {
    cy.loginWithFixture();
    cy.log("Logged in using fixture");
    dashboard = new CheckOutPage();
  });

  it("verify if user can Checkout the cart item with Fake Payment", () => {
    cy.fixture('testData').then((data) => {
      // Faker-generated checkout data
      const checkoutData = {
        cardName: faker.person.fullName(),
        cardNumber: faker.finance.creditCardNumber(),
        cardCVC: faker.finance.creditCardCVV(),
        cardMonth: String(faker.number.int({ min: 1, max: 12 })).padStart(2, '0'),
        cardYear: String(new Date().getFullYear() + faker.number.int({ min: 1, max: 5 }))
      };

      // Merge checkoutData into the same testData.json
      data.checkoutData = checkoutData;
      cy.writeFile('cypress/fixtures/testData.json', data);

      // Begin checkout flow
      dashboard.clickCart();
      dashboard.clickCheckOut();
      dashboard.paymentConfirmation(
        checkoutData.cardName,
        checkoutData.cardNumber,
        checkoutData.cardCVC,
        checkoutData.cardMonth,
        checkoutData.cardYear
      );
      dashboard.confirmPayment();
    });
  });
});
