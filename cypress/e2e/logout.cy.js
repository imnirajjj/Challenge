import AuthFlowPage from "../pages/logoutPage";

describe("log Out  Flow of Automation Exercise", () => {
    it('First User should be able to login in the system with the signup credentails', () => {
        cy.fixture('testData').then((data) => {
            const login = new AuthFlowPage();
            login.visit();
            login.clickSignin();
            login.fillEmail(data.email);
            login.fillPassword(data.password);
            login.submit();
            //then user should be able to login the system
        });
    });
});