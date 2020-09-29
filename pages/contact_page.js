const BasePage = require("./base_page.js");
const { $, element, by } = require("protractor");
const DropDownWrapper = require("../utils/dropdown_wrapper.js");

class ContactPage extends BasePage {
  constructor() {
    super();
  }

  get acceptCookieBtn() {
    return $(".cookie-disclaimer__button");
  }
  get userNameInput() {
    return element(by.name("user_first_name"));
  }
  get lastNameInput() {
    return element(by.name("user_last_name"));
  }
  get emailInput() {
    return element(by.name("user_email"));
  }
  get telephoneInput() {
    return $("input[name='user_phone']");
  }
  get companyInput() {
    return $("input[name='user_company']");
  }
  get positionDp() {
    return $(
      "select[name='user_position'] ~ span span[class='select2-selection__arrow']"
    );
  }
  get countryDp() {
    return $(
      "select[name='user_country'] ~ span span[class='select2-selection__arrow']"
    );
  }
  get stateDp() {
    return $(
      "select[name='user_region'] ~ span span[class='select2-selection__arrow']"
    );
  }
  get cityDp() {
    return $(
      "select[name='user_city'] ~ span span[class='select2-selection__arrow']"
    );
  }
  get personalInfoCb() {
    return $("#new_form_gdprConsent + label");
  }
  get submitBtn() {
    return $(".button-ui");
  }
  get hearAboutEpamDp() {
    return $(
      "select[name='user_comment_how_hear_about'] ~ span span.select2-selection__arrow"
    );
  }
  get reasonInquiryDp() {
    return $(
      "select[name='mail_subjects'] ~ span span.select2-selection__arrow"
    );
  }

  selectInquiryReason(reason) {
    new DropDownWrapper(this.reasonInquiryDp).selectByText(reason);
  }

  selectHowHeardAboutEpam(reason) {
    new DropDownWrapper(this.hearAboutEpamDp).selectByText(reason);
  }

  submitForm() {
    this.submitBtn.click();
  }

  checkPersonalInfo() {
    super.scrollUntilVisible(this.personalInfoCb);
    this.personalInfoCb.click();
  }

  selectCity(city) {
    new DropDownWrapper(this.cityDp).selectByText(city);
  }

  selectState(state) {
    super.wait(2000);
    new DropDownWrapper(this.stateDp).enterText(state);
  }

  selectCountry(country) {
    new DropDownWrapper(this.countryDp).selectByText(country);
  }

  selectPosition(position) {
    new DropDownWrapper(this.positionDp).selectByText(position);
  }

  acceptCookies() {
    this.acceptCookieBtn.click();
  }

  enterUserName(userName) {
    this.userNameInput.sendKeys(userName);
  }

  enterLastName(lastName) {
    this.lastNameInput.sendKeys(lastName);
  }

  enterEmail(email) {
    this.emailInput.sendKeys(email);
  }

  enterTelephone(telephone) {
    this.telephoneInput.sendKeys(telephone);
  }

  enterCompany(company) {
    this.companyInput.sendKeys(company);
  }
}
module.exports = new ContactPage();
