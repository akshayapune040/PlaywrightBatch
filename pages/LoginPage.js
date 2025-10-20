export class LoginPage {
    constructor(page) {
        this.page=page;
        this.email=page.locator("#email1")
        this.pasword=page.locator("#password1")
         this.signin= page.locator("//button[text()='Sign in']")
    }
    async NavigateUrl(){
        await this.page.goto("https://freelance-learn-automation.vercel.app/login");
    }
    async FillEmail(emailid){
        await this.email.fill(emailid)
    }
    async Fillpassword(pasword){
        await this.pasword.fill(pasword)
    }
    async Submit(){
        await this.signin.click();
    }
}