const { browser, ExpectedConditions } = require("protractor");
const { protractor } = require("protractor/built/ptor");
var EC = ExpectedConditions;

class WaitElement {
  waitUntilclickable(element, timeout = 5000) {
    browser.wait(EC.elementToBeClickable(element), timeout);
  }

  waitUntilVisible(element, timeout = 5000) {
    browser.wait(EC.visibilityOf(element), timeout);
  }

  waitUntilTextPresentInElement(element, text, timeout = 5000) {
    browser.wait(EC.textToBePresentInElement(element, text), timeout);
  }
}
module.exports = WaitElement;
