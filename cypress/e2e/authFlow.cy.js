import AuthFlowPage from "../pages/authFlowPage";

describe("login Flow of Automation Exercise", () => {
    it('User should be able to signup in the system', () => {
        cy.fixture('testData').then((data) => {
            const login = new AuthFlowPage();
            login.visit();
            login.clickSignin();
            login.fillEmail(data.email);
            login.fillPassword(data.password);
            login.submit();
        });
    });
});