require("chromedriver");
const selenium = require("selenium-webdriver");
const { username, password } = require("./creds.json");


const browser = new selenium.Builder();
const tab = browser.forBrowser('chrome').build();

let openTab = tab.get("http://www.way2automation.com/angularjs-protractor/registeration/#/login");
openTab.then(() => {
    let findTimeOut =
        tab.manage().setTimeouts({
            implicit: 10000
        });
    return findTimeOut;
        }).then(() => {
            let userNamePromise =
                tab.findElement(selenium.By.id("username"));
            return userNamePromise;
        }).then((userNameInput)=>{
            let inputUserName = userNameInput.sendKeys(username);
            return inputUserName;
        }).then(()=>{
            console.log("user name input sucessfull.")
        });
    