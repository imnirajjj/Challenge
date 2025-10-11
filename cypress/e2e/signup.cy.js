import SignUpPage from "../pages/signupPage"; // fixed typo
import { faker } from '@faker-js/faker';

describe("Signup Flow", () => {
    it('User should be able to signup in the system', () => {
        const signup = new SignUpPage();
        const randomEmail = faker.internet.email();
        const randomName = faker.person.fullName();
        const randomPassword = faker.internet.password();
        const randomFirstName = faker.person.firstName();
        const randomLastName = faker.person.lastName();
        const randomAddress = faker.location.streetAddress();
        const randomCountry = faker.location.country();
        const randomCity = faker.location.city();
        const randomZipCode = faker.location.zipCode();
        const randomMobileNumber = faker.phone.number('+###########'); // e.g. +9779812345678

        cy.writeFile('cypress/fixtures/testData.json', {
        email: randomEmail,
        name : randomName,
        password : randomPassword
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
        signup.fillState(randomPassword);
        signup.fillCity(randomCity);
        signup.fillZipCode(randomZipCode);
        signup.fillMobileNumber(randomMobileNumber);




        

    });
});
