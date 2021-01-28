$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/vivek.agarwal1/eclipse-workspace/FreeCrmBDDFramework/src/main/java/Features/contact.feature");
formatter.feature({
  "line": 1,
  "name": "Add new contact",
  "description": "",
  "id": "add-new-contact",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Add a contact scenario",
  "description": "",
  "id": "add-new-contact;add-a-contact-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "already on LoginPage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Title of the login page is free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Enter username and password",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Click on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Now user in on homepage",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Select contact menu",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "Mention firstname and lastname and position and designation",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "Click save",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "NewContactDefinition.already_on_LoginPage()"
});
formatter.result({
  "duration": 17145082800,
  "status": "passed"
});
formatter.match({
  "location": "NewContactDefinition.title_of_the_login_page_is_free_CRM()"
});
formatter.result({
  "duration": 39170800,
  "status": "passed"
});
formatter.match({
  "location": "NewContactDefinition.user_enter_uername()"
});
formatter.result({
  "duration": 3200556000,
  "status": "passed"
});
formatter.match({
  "location": "NewContactDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 31601700,
  "status": "passed"
});
formatter.match({
  "location": "NewContactDefinition.user_in_on_homepage()"
});
formatter.result({
  "duration": 7597400,
  "status": "passed"
});
formatter.match({
  "location": "NewContactDefinition.user_select_contact_menu()"
});
formatter.result({
  "duration": 33190800,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to locate element: //div[@class\u003d\"ui left fixed vertical  icon menu sidebar-dark left-to-right\"]\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DEL1-LHP-N01550\u0027, ip: \u0027192.168.1.8\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.8\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 84.0, javascriptEnabled: true, moz:accessibilityChecks: false, moz:buildID: 20201211215739, moz:geckodriverVersion: 0.27.0, moz:headless: false, moz:processID: 19544, moz:profile: C:\\Users\\vivek.agarwal1\\App..., moz:shutdownTimeout: 60000, moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, platformVersion: 10.0, rotatable: false, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: f82247c9-85e5-4c2c-b7ac-04757847edd2\n*** Element info: {Using\u003dxpath, value\u003d//div[@class\u003d\"ui left fixed vertical  icon menu sidebar-dark left-to-right\"]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat StepDef.NewContactDefinition.user_select_contact_menu(NewContactDefinition.java:86)\r\n\tat ✽.Then Select contact menu(C:/Users/vivek.agarwal1/eclipse-workspace/FreeCrmBDDFramework/src/main/java/Features/contact.feature:15)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "NewContactDefinition.user_mention_firstname_and_lastname_and_position_and_designation()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "NewContactDefinition.user_click_save()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "NewContactDefinition.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
});