const { $, browser } = require("protractor");
const ContactPage = require("./contact_page.js");
const BasePage = require("./base_page.js");

class HomePage extends BasePage {
  constructor() {
    super();
    this.url = "https://www.epam.com/";
  }

  get contactMenuItem() {
    return $(".cta-button-ui");
  }

  getHomePage() {
    super.navigateTo(this.url);
  }

  acessContactSection() {
    this.contactMenuItem.click();
    return ContactPage;
  }
}
module.exports = new HomePage();
