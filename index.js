require("chromedriver");
const selenium = require("selenium-webdriver");
const { username, password, userNameAst } = require("./creds.json");

const browser = new selenium.Builder();
const tab = browser.forBrowser("chrome").build();

let openTab = tab.get(
  "http://www.way2automation.com/angularjs-protractor/registeration/#/login"
);
openTab
  .then(() => {
    let findTimeOut = tab.manage().setTimeouts({
      implicit: 10000,
    });
    return findTimeOut;
  })
  .then(() => {
    let userNamePromise = tab.findElement(selenium.By.id("username"));
    return userNamePromise;
  })
  .then((userNameInput) => {
    let inputUserName = userNameInput.sendKeys(username);
    return inputUserName;
  })
  .then(() => {
    console.log("user name input sucessfully.");

    let passwordPromise = tab.findElement(selenium.By.id("password"));
    return passwordPromise;
  })
  .then((passwordInput) => {
    let inputPassword = passwordInput.sendKeys(password);
    return inputPassword;
  })
  .then(() => {
    console.log("password input successfully");

    let userNameAsteriskPromise = tab.findElement(
      selenium.By.id("formly_1_input_username_0")
    );
    return userNameAsteriskPromise;
  })
  .then((userNameAsteriskInput) => {
    let inputUsernameAsterisk = userNameAsteriskInput.sendKeys(userNameAst);
    return inputUsernameAsterisk;
  })
  .then(() => {
    console.log("username asterisk input successfully");

    let SignInButtonPromise = tab.findElement(
      selenium.By.className("btn btn-danger")
    );
    return SignInButtonPromise;
  })
  .then((signInButton) => {
    let promiseClickSignIn = signInButton.click();
    return promiseClickSignIn;
  })
  .then(() => {
    console.log("Successfully Signed In!");
  })
  .catch((err) => {
    console.log("Error ", err, " occurred!");
  });
