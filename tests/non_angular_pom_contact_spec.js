const { browser } = require("protractor");
const expect = global["chai"].expect;
const homePage = require("../pages/home_page.js");

describe("Epam WebSite", function () {
  it("POM Fill the contact form out", async function () {
    browser.ignoreSynchronization = true;
    browser.waitForAngularEnabled(false);

    browser.manage().timeouts().implicitlyWait(10000);
    homePage.getHomePage();
    const contactPage = homePage.acessContactSection();

    contactPage.acceptCookies();
    contactPage.selectInquiryReason("Talk to Sales in North America");
    contactPage.enterUserName("Benjamin");
    contactPage.enterLastName("Arce");
    contactPage.enterEmail("barce@outlook.com");
    contactPage.enterTelephone("33-12-34-56-78");
    contactPage.enterCompany("Epam");
    contactPage.selectPosition("C-Level");
    contactPage.selectCountry("United States");
    contactPage.selectState("Alabama");
    contactPage.selectCity("Abbeville, AL");
    contactPage.checkPersonalInfo();
    contactPage.selectHowHeardAboutEpam("Event");
    contactPage.submitForm();
  });
});
