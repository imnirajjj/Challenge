import SignUpPage from "../pages/signupPage"; // fixed typo
import { faker } from '@faker-js/faker';

describe("Signup Flow of Automation Exercise", () => {
    it('User should be able to signup in the system', () => {
        const signup = new SignUpPage();
        const randomEmail = faker.internet.email();
        const randomName = faker.person.fullName();
        const randomPassword = faker.internet.password();
        const randomFirstName = faker.person.firstName();
        const randomLastName = faker.person.lastName();
        const randomAddress = faker.location.streetAddress();
        const randomState = faker.location.state();
        const randomCity = faker.location.city();
        const randomZipCode = faker.location.zipCode();
        const randomMobileNumber = faker.phone.number('+###########'); // e.g. +9779812345678

        cy.writeFile('cypress/fixtures/testData.json', {
            email: randomEmail,
            name: randomName,
            password: randomPassword,
            firstName: randomFirstName,
            lastName: randomLastName,
            address: randomAddress,
            state : randomState,
            city: randomCity,
            zipCode: randomZipCode,
            mobile: randomMobileNumber
        });


        signup.visit();
        signup.clickSignup();
        signup.fillName(randomName);
        signup.fillEmail(randomEmail);
        signup.submit();
        signup.clickRadio();
        signup.fillPassword(randomPassword);
        signup.fillDays('2');
        signup.fillMonth('May');        
        signup.fillYear('2018');
        signup.fillFirstName(randomFirstName);
        signup.fillLastName(randomLastName);
        signup.fillAddress(randomAddress);
        signup.fillCountry('Canada');
        signup.fillState(randomState);
        signup.fillCity(randomCity);
        signup.fillZipCode(randomZipCode);
        signup.fillMobileNumber(randomMobileNumber);
        signup.createAccount();
        signup.verification();
        cy.xpath(signup.accountVerify).then(($el) => {
            const message = $el.text();
            console.log("Account Verification Message:", message);
            cy.log("Account Verification Message: " + message);
        });

        signup.continueDashboard();
        signup.accountLogin();
        cy.xpath(signup.verifyLogin).then(($el) => {
            const message = $el.text();
            console.log("Account Verification Message:", message);
            cy.log("Account Login Successfull: " + message + " is visible");
        });

    });
});
