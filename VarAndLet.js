const browserVersion = "chrome";

function getBrowserVersion() {
    if(browserVersion == "chrome") {
        let browserVersion = "89.0.4389.90";
    console.log("Browser Version inside if block: " + browserVersion);
    }   
}
console.log("Browser Version outside if block: " + browserVersion);

getBrowserVersion();    
// Output:
// Browser Version outside if block: chrome
// Browser Version inside if block: 89.0.4389.90            
// Explanation: The let keyword creates a block-scoped variable, so the inner 'browserVersion' is local to the if block and does not affect the outer scope.
