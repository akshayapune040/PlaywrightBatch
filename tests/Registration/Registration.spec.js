import {test} from "@playwright/test"
import {RegistrationPage} from "../../pages/RegistrationPage.js"
test("verify regist",async ({page})=>{
    const Registration=new RegistrationPage(page);
    await Registration.NavigateRegister();
        await Registration.RegistrationPage();
   // Registration.RegistrationPage();
})