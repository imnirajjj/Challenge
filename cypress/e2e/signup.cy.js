import SignUpPage from "../pages/signupPage";
import { faker } from '@faker-js/faker';

describe("Signup Flow of Automation Exercise", () => {
  it("User should be able to signup and see their name on the dashboard", () => {
    cy.fixture('testData').then((data) => {
      const signup = new SignUpPage();

      // Faker-generated signup data
      const signupData = {
        email: faker.internet.email(),
        name: faker.person.fullName(),
        password: faker.internet.password({ length: 10, pattern: /[A-Za-z0-9]/ }),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        address: faker.location.streetAddress(),
        state: faker.location.state(),
        city: faker.location.city(),
        zipCode: faker.location.zipCode(),
        mobile: faker.phone.number('+###########'),
        days: data.signupData.days,
        month: data.signupData.month,
        year: data.signupData.year,
        country: data.signupData.country
      };

      // Save updated signupData to testData.json
      data.signupData = signupData;
      cy.writeFile('cypress/fixtures/testData.json', data);

      // Begin signup flow
      signup.visit();
      signup.clickSignup();
      signup.fillName(signupData.name);
      signup.fillEmail(signupData.email);
      signup.submit();
      signup.clickRadio();
      signup.fillPassword(signupData.password);
      signup.fillDays(signupData.days);
      signup.fillMonth(signupData.month);
      signup.fillYear(signupData.year);
      signup.fillFirstName(signupData.firstName);
      signup.fillLastName(signupData.lastName);
      signup.fillAddress(signupData.address);
      signup.fillCountry(signupData.country);
      signup.fillState(signupData.state);
      signup.fillCity(signupData.city);
      signup.fillZipCode(signupData.zipCode);
      signup.fillMobileNumber(signupData.mobile);
      signup.createAccount();
      signup.verification();
      signup.continueDashboard();
      signup.accountLogin();

      // Verify that the dashboard shows the signed-up user's name
      signup.verifyDashboardName(signupData.name);
    });
  });
});
