const { browser, Key } = require("protractor");
const ElementAction = require("./element_actions.js");

class DropDownWrapper extends ElementAction {
  constructor(element) {
    super();
    this.element = element;
    super.click(this.element);
  }

  selectByText(text) {
    super.waitUntilclickable(this.element);
    browser
      .findElement(by.xpath("//li[contains(text(),'" + text + "')]"))
      .click();
  }

  enterText(text) {
    browser
      .$("select[name='user_region'] ~span input")
      .sendKeys(text, Key.ENTER);
  }
}
module.exports = DropDownWrapper;
