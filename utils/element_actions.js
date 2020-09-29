const { browser } = require("protractor");
const WaitElement = require("./wait_until.js");

class ElementActions extends WaitElement{

  scrollUntilVisible(element) {
    //this.waitUntilclickable(element)
    browser.actions().mouseMove(element).perform();
  }

  click(element) {
    //this.waitUntilclickable(element)
    element.click();
  }

  sendKeys(element, text) {
    //this.waitUntilclickable(element)
    element.sendKeys(text);
  }

}
module.exports = ElementActions;
