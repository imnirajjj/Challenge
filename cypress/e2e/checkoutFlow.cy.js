import CheckOutPage from "../pages/checkoutPage";
import { faker } from '@faker-js/faker';

describe("Checkout Flow with Fake Payment ", () => {
    let dashboard;

    before(() => {
        cy.loginWithFixture(); 
        cy.log("Logged in using fixture");
        dashboard = new CheckOutPage();
    });

    it("verify if user can Checkout the cart item with Fake Payment", () => {
        const randomCardName = faker.person.fullName();
        const randomCardNumber = faker.finance.creditCardNumber(); // Generates a credit card number
        const randomCVC = faker.finance.creditCardCVV();           // Generates a CVC
        const randomMonth = String(faker.number.int({ min: 1, max: 12 })).padStart(2, '0'); // "01" to "12"
        const randomYear = String(new Date().getFullYear() + faker.number.int({ min: 1, max: 5 })); // future year

        cy.writeFile('cypress/fixtures/Data.json', {
            cardName : randomCardName,
            cardNumber: randomCardNumber,
            cardCVC: randomCVC,
            cardMonth: randomMonth,
            cardYear: randomYear
        });

        dashboard.clickCart();
        dashboard.clickCheckOut();
        dashboard.paymentConfirmation(randomCardName, randomCardNumber, randomCVC, randomMonth, randomYear);
        dashboard.confirmPayment();
    });
});

