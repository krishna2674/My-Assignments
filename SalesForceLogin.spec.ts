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
    await page.locator("//p[normalize-space()='Sales']").click();
    await page.locator("a[title='Leads'] span[class='slds-truncate']").click();
    await page.locator("div[title='New']").click();
    await page.getByRole('combobox', { name: 'Salutation' }).click();  
    await page.getByRole('option', { name: 'Mr.' }).click();    
    await page.getByRole('textbox', { name: 'First Name' }).click();
    await page.getByRole('textbox', { name: 'First Name' }).fill('krishna2674');
    await page.getByRole('textbox', { name: 'Last Name' }).click();
    await page.getByRole('textbox', { name: 'Last Name' }).fill('murthy2674'); 
    await page.getByRole('textbox', { name: 'Company' }).click();
    await page.getByRole('textbox', { name: 'Company' }).fill('TestLeaf');
    await page.locator("button[name='SaveEdit']").click();

    
    await expect(page.locator("lightning-formatted-name[slot='primaryField']")).toHaveText('Mr. krishna2674 murthy2674');

     
}   );
