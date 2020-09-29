const { element, browser, by, Key } = require("protractor");
const WaitUntil = require("../utils/wait_until.js");
const ElementActions = require("../utils/element_actions.js");
let elemAction = new ElementActions();
const DropDownWrapper = require("../utils/dropdown_wrapper.js");

describe("Epam WebSite", function () {
  beforeEach(function () {
    browser.ignoreSynchronization = true;
    browser.waitForAngularEnabled(false);

    browser.driver.manage().window().maximize();
    browser.get("https://www.epam.com/");
    browser.manage().timeouts().implicitlyWait(10000);
  });

  it("Fill the contact form out", async function () {
    let dropDown;
    elemAction.click(browser.$(".cta-button-ui"));

    let cookieBtns = await browser.findElements(
      by.css(".cookie-disclaimer__button")
    );
    if (cookieBtns) cookieBtns[0].click();

    elemAction.click(
      browser.findElement(
        by.xpath("//span[contains(@title,'General Information Request')]")
      )
    );

    elemAction.click(
      browser.findElement(
        by.xpath("//li[contains(text(),'Talk to Sales in North America')]")
      )
    );

    elemAction.sendKeys(
      browser.findElement(by.name("user_first_name")),
      "Benjamin"
    );
    elemAction.sendKeys(browser.findElement(by.name("user_last_name")), "Arce");
    elemAction.sendKeys(
      browser.findElement(by.name("user_email")),
      "barce@outlook.com"
    );
    elemAction.sendKeys(
      browser.$("input[name='user_phone']"),
      "33-12-34-56-78"
    );
    elemAction.sendKeys(browser.$("input[name='user_company']"), "Epam");

    dropDown = new DropDownWrapper(
      $(
        "select[name='user_position'] ~ span span[class='select2-selection__arrow']"
      )
    );
    dropDown.selectByText("C-Level");

    dropDown = new DropDownWrapper(
      $(
        "select[name='user_country'] ~ span span[class='select2-selection__arrow']"
      )
    );
    dropDown.selectByText("United States");

    browser.sleep(2000);
    dropDown = new DropDownWrapper(
      $(
        "select[name='user_region'] ~ span span[class='select2-selection__arrow']"
      )
    );
    browser.$("select[name='user_region'] ~span input").sendKeys(
      "Alabama",
      Key.ENTER
    );

    dropDown = new DropDownWrapper(
      $(
        "select[name='user_city'] ~ span span[class='select2-selection__arrow']"
      )
    );
    dropDown.selectByText("Abbeville, AL");

    elemAction.scrollUntilVisible(browser.$("#new_form_gdprConsent + label"));
    elemAction.click(browser.$("#new_form_gdprConsent + label"));

    elemAction.click(
      browser.$(
        "select[name='user_comment_how_hear_about'] ~ span span.select2-selection__arrow"
      )
    );

    elemAction.click(
      browser.findElement(by.xpath("//li[contains(text(),'Event')]"))
    );

    elemAction.click(browser.$(".button-ui"));
  });
});
