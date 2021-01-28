$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/vivek.agarwal1/eclipse-workspace/FreeCrmBDDFramework/src/main/java/Features/login.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM login Feature",
  "description": "",
  "id": "free-crm-login-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Free CRM login Test Scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User is already on LoginPage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "user enter uername and password",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user in on homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "loginStepDefinition.user_is_already_on_LoginPage()"
});
formatter.result({
  "duration": 34954605900,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefinition.user_enter_uername()"
});
formatter.result({
  "duration": 3188599000,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 37084800,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefinition.user_in_on_homepage()"
});
formatter.result({
  "duration": 6038200,
  "status": "passed"
});
});