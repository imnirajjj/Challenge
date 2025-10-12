class AuthFlowPage{
    url = 'https://automationexercise.com/';
    clickBtn = '//a[@href="/login"]';
    inputEmail = '//input[@data-qa="login-email"]';
    inputPassword = '//input[@data-qa="login-password"]';
    submitBtn = '//button[@data-qa="login-button"]';

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

}

export default AuthFlowPage;