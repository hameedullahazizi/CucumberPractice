$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "test login functionality",
  "description": "",
  "id": "test-login-functionality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "",
  "description": "",
  "id": "test-login-functionality;",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "I open the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I go to this \"https://login.salesforce.com/\" environment",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I enter \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "I click \"Login\"",
  "keyword": "And "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "test-login-functionality;;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 10,
      "id": "test-login-functionality;;;1"
    },
    {
      "cells": [
        "batch03@codegator.us.qa",
        "Pa555word"
      ],
      "line": 11,
      "id": "test-login-functionality;;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 268836,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "",
  "description": "",
  "id": "test-login-functionality;;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "I open the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I go to this \"https://login.salesforce.com/\" environment",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I enter \"batch03@codegator.us.qa\" and \"Pa555word\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "I click \"Login\"",
  "keyword": "And "
});
formatter.match({
  "location": "loginMethods.I_open_the_browser()"
});
formatter.result({
  "duration": 3081673150,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://login.salesforce.com/",
      "offset": 14
    }
  ],
  "location": "loginMethods.I_go_to_this_environment(String)"
});
formatter.result({
  "duration": 448776854,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "batch03@codegator.us.qa",
      "offset": 9
    },
    {
      "val": "Pa555word",
      "offset": 39
    }
  ],
  "location": "loginMethods.I_enter_and(String,String)"
});
formatter.result({
  "duration": 351961374,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 9
    }
  ],
  "location": "loginMethods.I_click(String)"
});
formatter.result({
  "duration": 1317645607,
  "status": "passed"
});
formatter.after({
  "duration": 96940,
  "status": "passed"
});
});