import {test,expect} from "@playwright/test"

test("Sample Test",async function ({page},testInfo) 
{
    await page.goto("https://freelance-learn-automation.vercel.app/login")
    console.log(testInfo.status); // Passed Failed Skiped TimeOut
    console.log(testInfo.title);
    console.log(testInfo.duration);
    console.log(testInfo.expectedStatus);
         
})