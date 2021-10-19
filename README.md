# Introduction

Todoist is the productivity tool you need to get work and life organized. Collect tasks, organize projects, and plan your day, in this oportunity .
[![Todoist](https://get.todoist.help/hc/article_attachments/360011665940/Web___Inbox.png "Todoist")](https://get.todoist.help/hc/article_attachments/360011665940/Web___Inbox.png "Todoist")

## Goals

This repository has to goal, fulfill the next points:

1. Successful login. Define a test case that performs a successful login, using credentials stored in a .env file.
2. Unsuccessful login. Define at least 3 negative scenarios for the login. Reuse the same function for all the scenarios (positive and negative).
3. Create a new task with Today as the due date and validate it was created correctly.
4. Create a single task selecting tomorrow as the due date and validate it was created correctly.
5. Create 10 new tasks with Today as the due date and validate they were created correctly. Task Names should be dynamic.
6. Create a new project, choose any color you like and add it to favorites.
7. Delete every task created (if there’s any) after your tests.

## Installation:

What will you need to run this repository:

- Download [Node.js](https://code.visualstudio.com "Visual Studio Code")
- Download [Visual Studio Code](https://code.visualstudio.com "Visual Studio Code")
- run: npm install
- run:npm install [Testcafe](https://testcafe.io "Testcafe")
- run: npm install [dotenv](https://testcafe.io/documentation/402802/recipes/configuration/access-environment-variables-in-tests "dotenv")
- run: npm install testcafe-reporter-html [TestCafé Reporter](https://www.npmjs.com/package/testcafe-reporter-html "JSON TestCafé Reporter")

Clone the repo into your local machine:
`https://github.com/Karenco1014/QA-Automation-Bootcamp.git`

## Before to run

- cd QA-Automation-Bootcamp
- browsers used must be installed Chrome, safari.
- create the .env with your credentials
EMAIL = your@email.com
PASSWORD=your_password
BASE_URL= [TestCafé Reporter]("https://todoist.com/")

## to run tests

# Scripts
   -  "test": "testcafe chrome ./page_Object_Model/tests",
   -  "test:runBySmoke": "testcafe chrome ./page_Object_Model/tests/*.js --test-meta Smoke=Production",
   -  "test:reports": "testcafe chrome ./page_Object_Model/tests/*.js  --skip-js-erros --reporter html:reports/htmlReports/pom_report.html",
   -  "test:runIboxtest": "testcafe chrome ./page_Object_Model/tests/inboxTest.js",
   -  "test:runloginTest": "testcafe chrome ./page_Object_Model/tests/loginTest/*.js",
   -  "test:runprojectTest": "testcafe chrome ./page_Object_Model/tests/projectTest.js",
   -  "test:runtodayTest": "testcafe chrome ./page_Object_Model/tests/todayTest.js",
   -  "test:runtodoistTest": "testcafe chrome ./page_Object_Model/tests/todoistTest.js",
   -  "test:runLoginfixtureHeadless": "testcafe safari,chrome:headless ./page_Object_Model/tests/loginTest.js",
   -  "test:confFile": "testcafe" 
