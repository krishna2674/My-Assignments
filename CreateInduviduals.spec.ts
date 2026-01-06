import test, { expect } from '@playwright/test';

test('SalesForce Login Test', async ({ page }) => {
    // Navigate to the SalesForce login page
    await page.goto('https://login.salesforce.com/');
    // Enter username   
    await page.fill('input#username', 'dilipkumar.rajendran@testleaf.com');
    // Enter password
    await page.fill('input#password', 'TestLeaf@2025');
    // Click the login button   
    await page.click('input#Login');
    // Verify successful login by checking for the presence of the home page element
    await page.waitForSelector('div.slds-icon-waffle');
    await page.click('div.slds-icon-waffle');
    await page.waitForTimeout(2000);


    // Additional verification can be added here as needed
    await page.click('button[aria-label="View All Applications"]');
    await page.locator("//p[normalize-space()='Individuals']").click();
    await page.locator("div[title='New']").click();
    await page.getByRole('combobox', { name: 'Salutation' }).click();  
    await page.getByRole('option', { name: 'Mr.' }).click(); 
    await page.getByRole('textbox', { name: 'First Name' }).click();
    await page.getByRole('textbox', { name: 'First Name' }).fill('krishna11');
    await page.getByRole('textbox', { name: 'Last Name' }).click();
    await page.getByRole('textbox', { name: 'Last Name' }).fill('murthy11'); 
    await page.locator("//span[normalize-space()='Save']").click();   
    await page.locator("//span[contains(text(),'Mr. krishna123 murthy123')]").isVisible
    await expect(page.locator("lightning-formatted-name[slot='primaryField']").isVisible).toBeTruthy();
   


})
