class AuthFlowPage{
    url = 'https://automationexercise.com/';
    clickBtn = '//a[@href="/login"]';
    inputEmail = '//input[@data-qa="login-email"]';
    inputPassword = '//input[@data-qa="login-password"]';
    submitBtn = '//button[@data-qa="login-button"]';
    verifyLogin = "//a[text()=' Logout']";
    logoutBtn = "//a[text()=' Logout']";

    visit(){
        cy.visit(this.url);
    }

    clickSignin(){
        cy.xpath(this.clickBtn).click();
    }

    fillEmail(email){
        cy.xpath(this.inputEmail).type(email);
    }

    fillPassword(password){
        cy.xpath(this.inputPassword).type(password);
    }

    submit(){
        cy.xpath(this.submitBtn).click();
    }

    verification() {
        cy.xpath(this.verifyLogin)
        .should('be.visible')
        .then(() => {
            cy.log('Login Successful: @logout is visible');
            cy.wait(3000);
        });
    }

    clickLogout() {
        cy.xpath(this.logoutBtn).click();
        cy.url().should('eq', 'https://automationexercise.com/login')
        .then(() => {
            cy.log('Logout Successful: Navigated to login page');
        });
    }
}

export default AuthFlowPage;