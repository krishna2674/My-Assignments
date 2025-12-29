import  {test} from '@playwright/test';
test("FaceBook Registration", async ({ page }) => {
    // Navigate to Facebook registration page
    await page.goto('https://en-gb.facebook.com/'); 

    // Click on "Create New Account" button
    await page.locator('[data-testid="open-registration-form-button"]').click();
    await page.waitForTimeout(2000);
    // Fill in the registration form
    await page.locator('input[name="firstname"]').fill('TestFirstName');
    await page.locator('input[name="lastname"]').fill('TestLastName');
    await page.locator('input[name="reg_email__"]').fill('xyz@gmail.com');
    await page.locator('input[name="reg_passwd__"]').fill('Test@1234');
    // Select Date of Birth
    await page.selectOption('select#day', { value: '10' });
    await page.selectOption('select#month', { value: '5' });    
    await page.selectOption('select#year', { value: '1990' });    
       
    // Select Gender
    await page.locator(`//label[normalize-space()='Male']`).click();
    // Submit the registration form
    await page.locator('[name="websubmit"]').click();
    await page.waitForTimeout(2000);
})