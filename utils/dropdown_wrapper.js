const { browser } = require("protractor");
const ElementAction = require("./element_actions.js");

class DropDownWrapper extends ElementAction {
  constructor(element) {
    super()
    this.element = element;
    this.click(this.element);
  }

  selectByText(text) {
    this.waitUntilclickable(this.element);
    browser
      .findElement(by.xpath("//li[contains(text(),'" + text + "')]"))
      .click();
  }
}
module.exports = DropDownWrapper;
