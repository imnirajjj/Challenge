import AuthFlowPage from "../pages/logoutPage";

describe("log Out  Flow of Automation Exercise", () => {
    it('First User should be able to login in the system with the signup credentails', () => {
        cy.fixture('testData').then((data) => {
            const login = new AuthFlowPage();
            const signupData = data.signupData; // Read signup data

            login.visit();
            login.clickSignin();
            login.fillEmail(signupData.email);
            login.fillPassword(signupData.password);
            login.submit();
            //user should be able to login the system first
            login.verification();
            //then it  will click logout button
            login.clickLogout();

        });
    });
});