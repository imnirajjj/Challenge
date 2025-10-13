import 'cypress-xpath';
import AuthFlowPage from '../pages/logoutPage';

Cypress.Commands.add('loginWithFixture', () => {
        cy.fixture('testData').then((data) => {
            const login = new AuthFlowPage();
            const signupData = data.signupData; // Read signup data

            login.visit();
            login.clickSignin();
            login.fillEmail(signupData.email);
            login.fillPassword(signupData.password);
            login.submit();
            //then user should be able to login the system
        });
});
