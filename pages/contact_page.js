const BasePage = require("./base_page.js");
const { $, element, by } = require("protractor");
const DropDownWrapper = require("../utils/dropdown_wrapper.js");

class ContactPage extends BasePage {
  /**
   * Page Elements
   */
  acceptCookiesButton = $(".cookie-disclaimer__button");
  firstNameInput = element(by.name("user_first_name"));
  lastNameInput = element(by.name("user_last_name"));
  userEmailInput = element(by.name("user_email"));
  userPhoneInput = $("input[name='user_phone']");
  userCompanyInput = $("input[name='user_company']");
  positionDropDown = $(
    "select[name='user_position'] ~ span span[class='select2-selection__arrow']"
  );
  countryDropDown = $(
    "select[name='user_country'] ~ span span[class='select2-selection__arrow']"
  );
  stateDropDown = $(
    "select[name='user_region'] ~ span span[class='select2-selection__arrow']"
  );
  cityDropDown = $(
    "select[name='user_city'] ~ span span[class='select2-selection__arrow']"
  );
  personalInfoCheckBox = $("#new_form_gdprConsent + label");
  submitButton = $(".button-ui");
  hearAboutEpamDropDown = $(
    "select[name='user_comment_how_hear_about'] ~ span span.select2-selection__arrow"
  );
  reasonInquieryDropDown = $(
    "select[name='mail_subjects'] ~ span span.select2-selection__arrow"
  );

  constructor() {
    super();
  }

  selectInquiryReason(reason) {
    new DropDownWrapper(this.reasonInquieryDropDown).selectByText(reason);
  }
  selectHowHeardAboutEpam(reason) {
    new DropDownWrapper(this.hearAboutEpamDropDown).selectByText(reason);
  }
  submitForm() {
    this.submitButton.click();
  }
  checkPersonalInfo() {
    super.scrollUntilVisible(this.personalInfoCheckBox);
    this.personalInfoCheckBox.click();
  }
  selectCity(cityName) {
    new DropDownWrapper(this.cityDropDown).selectByText(cityName);
  }
  selectState(stateName) {
    super.wait(2000);
    new DropDownWrapper(this.stateDropDown).enterText(stateName);
  }
  selectCountry(countryName) {
    new DropDownWrapper(this.countryDropDown).selectByText(countryName);
  }
  selectPosition(positionName) {
    new DropDownWrapper(this.positionDropDown).selectByText(positionName);
  }
  acceptCookies() {
    this.acceptCookiesButton.click();
  }
  enterUserName(userName) {
    this.firstNameInput.sendKeys(userName);
  }
  enterLastName(lastName) {
    this.lastNameInput.sendKeys(lastName);
  }
  enterEmail(email) {
    this.userEmailInput.sendKeys(email);
  }
  enterTelephone(telephoneNum) {
    this.userPhoneInput.sendKeys(telephoneNum);
  }
  enterCompany(companyName) {
    this.userCompanyInput.sendKeys(companyName);
  }
}
module.exports = new ContactPage();
