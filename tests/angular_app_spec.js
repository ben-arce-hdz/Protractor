const { browser, element, by } = require("protractor");

describe("Angular Application", function () {
  beforeEach(function () {
    browser.get("https://www.freelancer.com/");
    browser.manage().timeouts().implicitlyWait(20000);
  });

  it("log in with incorrect data", async function () {
    element(by.xpath("//*[@fltrackinglabel='LoginPage']//a")).click();
    $("input[type='email']").sendKeys("hello@outlook.com")
    $("input[type='password']").sendKeys("12345")
    element(by.buttonText('Log In')).click()

    let errorMessage = await $(".BannerAlertBox-desc[data-type='paragraph']").getText()
    expect(errorMessage).toBe("Incorrect username or password.")
  });
});
