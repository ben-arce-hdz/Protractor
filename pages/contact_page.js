const BasePage = require("./base_page.js");
const { $, element, by } = require("protractor");
const DropDownWrapper = require("../utils/dropdown_wrapper.js");

class ContactPage extends BasePage {
  /**
   * Page Elements
   */
  acceptCookiesButton = $(".cookie-disclaimer__button");
  firstNameInput = element(by.name("user_first_name"));
  userNameInput = element(by.name("user_last_name"));
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
  personaInfoCheckBox = $("#new_form_gdprConsent + label");
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

  get acceptCookie() {
    return this.acceptCookiesButton;
  }
  get userName() {
    return this.firstNameInput;
  }
  get lastName() {
    return this.userNameInput;
  }
  get email() {
    return this.userEmailInput;
  }
  get telephone() {
    return this.userPhoneInput;
  }
  get company() {
    return this.userNameInput;
  }
  get position() {
    return this.positionDropDown;
  }
  get country() {
    return this.countryDropDown;
  }
  get state() {
    return this.stateDropDown;
  }
  get city() {
    return this.cityDropDown;
  }
  get personalInfo() {
    return this.personaInfoCheckBox;
  }
  get submit() {
    return this.submitButton;
  }
  get hearAboutEpam() {
    return this.hearAboutEpamDropDown;
  }
  get reasonInquiry() {
    return this.reasonInquieryDropDown;
  }

  selectInquiryReason(reason) {
    new DropDownWrapper(this.reasonInquiry).selectByText(reason);
  }

  selectHowHeardAboutEpam(reason) {
    new DropDownWrapper(this.hearAboutEpam).selectByText(reason);
  }

  submitForm() {
    this.submit.click();
  }

  checkPersonalInfo() {
    super.scrollUntilVisible(this.personalInfo);
    this.personalInfo.click();
  }

  selectCity(cityName) {
    new DropDownWrapper(this.city).selectByText(cityName);
  }

  selectState(stateName) {
    super.wait(2000);
    new DropDownWrapper(this.state).enterText(stateName);
  }

  selectCountry(countryName) {
    new DropDownWrapper(this.country).selectByText(countryName);
  }

  selectPosition(positionName) {
    new DropDownWrapper(this.position).selectByText(positionName);
  }

  acceptCookies() {
    this.acceptCookie.click();
  }

  enterUserName(userName) {
    this.userName.sendKeys(userName);
  }

  enterLastName(lastName) {
    this.lastName.sendKeys(lastName);
  }

  enterEmail(email) {
    this.email.sendKeys(email);
  }

  enterTelephone(telephoneNum) {
    this.telephone.sendKeys(telephoneNum);
  }

  enterCompany(companyName) {
    this.company.sendKeys(companyName);
  }
}
module.exports = new ContactPage();
