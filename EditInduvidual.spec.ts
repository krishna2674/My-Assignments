import test, { expect } from '@playwright/test';

test('SalesForce Login and Edit Induvidual Test', async ({ page }) => {
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
    // Navigate to the Individuals section
    await page.locator("//p[normalize-space()='Individuals']").click();
    await page.waitForTimeout(2000);
    // Search for the individual record to edit
    await page.getByRole('searchbox', { name: 'Search this list...' }).click();
    await page.getByRole('searchbox', { name: 'Search this list...' }).fill('murthy11');

    
    //click enter
    const Enter = page.keyboard.press('Enter');
    await page.waitForTimeout(2000);
    // Open the action menu for the individual record

    await page.locator("(//lightning-button-menu[@class='slds-dropdown-trigger slds-dropdown-trigger_click'])[2]").click()
    await page.waitForTimeout(2000);
    await page.locator("a[title='Edit']").click();
  //  Select the individual from the search results
    await page.getByRole('combobox', { name: 'Salutation' }).click();  
    await page.getByRole('option', { name: 'Mr.' }).click(); 
    await page.getByRole('textbox', { name: 'First Name' }).click();
    await page.getByRole('textbox', { name: 'First Name' }).fill('krishna11');
    await page.locator("//span[normalize-space()='Save']").click();   
    await expect(page.locator("lightning-formatted-name[slot='primaryField']").isVisible).toBeTruthy();
});
