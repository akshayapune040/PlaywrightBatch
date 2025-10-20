export class RegistrationPage{
    constructor(page){
        this.page = page;
        this.firstNameInput = page.locator('input[name="firstName"]');
        this.lastNameInput = page.locator('input[name="lastName"]');
        this.emailInput = page.locator('input[name="email"]');
        this.passwordInput = page.locator('input[name="password"]');
        this.confirmPasswordInput = page.locator('input[name="confirmPassword"]');
        this.registerButton = page.locator('button[type="submit"]');
        //Add locator for interest which has class test123
        
    }