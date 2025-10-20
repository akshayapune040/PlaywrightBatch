import {test as base} from "@playwright/test"
import { LoginPage } from "../pages/LoginPage.js"
import { readJson } from "../Utils/readjson.js";
export const test=base.extend(
   {
    loginPage:async ({page},use)=>{
         const login=new LoginPage(page);
         await login.NavigateUrl();
         await login.FillEmail("admin@email.com")
         await login.Fillpassword("admin@123")
         await login.Submit();   
         await use(login)
    },
    
    loginPage_json:async ({page},use)=>{
        const data=readJson("./testdata/user.json")
         const login=new LoginPage(page);
         await login.NavigateUrl();
         await login.FillEmail(data.username)
         await login.Fillpassword(data.password)
         await login.Submit();   
         await use(login)
    }


   }


)