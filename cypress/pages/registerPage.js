export class registerPage{
    weblocators = {
        firstName: '#input-firstname',
        lastName: '#input-lastname',
        email: '#input-email',
        telephone: 'input[name="telephone"]',
        password: '#input-password',
        passwordConfirm: '#input-confirm',
        policyCheckbox: 'input[name="agree"]',
        continue: '.btn.btn-primary'
    }

    openURL(){
        cy.visit(Cypress.env('URL'));
    }

    enterFirstName(fName) {
        cy.get(this.weblocators.firstName).type(fName);
    } 

    enterLasttName(lName) {
        cy.get(this.weblocators.lastName).type(lName);
    }

    enterEmail(email) {
        cy.get(this.weblocators.email).type(email);
    }

    enterPassword(pass) {
        cy.get(this.weblocators.password).type(pass);
        cy.get(this.weblocators.passwordConfirm).type(pass);
    }

    enterTelephone(phone) {
        cy.get(this.weblocators.telephone).type(phone);
    }

    selectCheckBox(){
        cy.get(this.weblocators.policyCheckbox).check();
    }

    clickOnContinue(){
        cy.get(this.weblocators.continue).click();
    }
}