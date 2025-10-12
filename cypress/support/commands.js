import 'cypress-xpath';
import AuthFlowPage from '../pages/logoutPage';

Cypress.Commands.add('loginWithFixture', () => {
    cy.fixture('testData').then((data) => {
        const login = new AuthFlowPage();
        login.visit();
        login.clickSignin();
        login.fillEmail(data.email);
        login.fillPassword(data.password);
        login.submit();
    });
});
