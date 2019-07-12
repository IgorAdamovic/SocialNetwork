## SocialNetwork

An Interview Test Project

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.7.

## About the project

This project is made as a part of the interview process for the http://30hills.com/ 2019 spring internship program.

### The Problem 

The goal of this test is to create a method of examining a Social Network. You are given dataset (data.json) representing a group of people, in the form of a social graph. Each person listed has one or more connections to the group.

Use data.json provided. You should then create a Web app or an API endpoint, which provides functionality to choose a person within the group stored in the database and display the following information about this person:

• Direct friends: those people who are directly connected to the chosen user (required);
• Friends of friends: those who are two steps away from the chosen user but not directly connected to the chosen user (required);
• Suggested friends: people in the group who know 2 or more direct friends of the chosen user but are not directly connected to the chosen user (optional);
General Requirements:
• You can use any software design patterns you think are appropriate for the implementation.
• You can use any programming language, but solutions in JavaScript will have advantage.

## Running the project

To run the project:
• Start the backend, following the instructions in the BackEnd section
• Start the frontend, following the instructions in the Development server section 

## BackEnd

To run the backend, open a command line in this folder and run: json-server --watch data.json 
Get a full fake REST API from https://github.com/typicode/json-server and install JSON server if backend service doesn't start.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
