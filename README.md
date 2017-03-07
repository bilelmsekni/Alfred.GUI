Alfred.GUI
===============================

[![Build Status](https://travis-ci.org/mseknibilel/Alfred.GUI.svg?branch=master)](https://travis-ci.org/mseknibilel/Alfred.GUI)
[![Issue Count](https://codeclimate.com/github/mseknibilel/Alfred.GUI/badges/issue_count.svg)](https://codeclimate.com/github/mseknibilel/Alfred.GUI)
[![Stories in Ready](https://badge.waffle.io/mseknibilel/Alfred.GUI.png?label=in progress&title=InProgress)](https://waffle.io/mseknibilel/Alfred.GUI)
[![Stories in Ready](https://badge.waffle.io/mseknibilel/Alfred.GUI.png?label=Ready&title=Ready)](https://waffle.io/mseknibilel/Alfred.GUI)

Presentation
-----------------

Alfred is a community managing application. Its purpose is to facilitate the tasks of planning and monitoring the work of a group of people. It also comes with additional features inspired from the agile world such as displaying backlog, settings goals and reporting KPIs

* Alfred Overview Page

![ScreenShot](http://i.imgur.com/ufDEUqj.png)

* Alfred Community Page

![ScreenShot](http://i.imgur.com/XluuU1D.png)

* Alfred Member Page

![ScreenShot](http://i.imgur.com/gJeYIQH.png)

Solution Details
-----------------

> This repo contains the front end part of Alfred. If you are looking for the backend, you can find it here https://github.com/mseknibilel/Alfred

### Quick start
**Make sure you have Node version >= 6.0 and NPM >= 4

```bash
# clone our repo
git clone https://github.com/mseknibilel/Alfred.GUI.git

# change directory to src repo
cd Alfred.GUI\src

# install the repo with npm
npm install

# start the server
npm start

```
go to [http://localhost:3000](http://localhost:3000) in your browser

## File Structure
I use the feature approach in my project. It helps keep related code at the same place and help new comers understand the logic of the application. A feature is group of components and services working together to fulfill a certain part of the application. Here's how it looks:
```
Alfred.GUI/src
 ├──config/                        * our configuration
 |   ├──helpers.js                 * helper functions for our configuration files
 |   ├──mocha-test-shim.browser.js * mocha testing shim for browser environment
 |   ├──mocha-test-shim.node.js    * mocha testing shim for node environment
 |   ├──webpack.common.config.js   * webpack common for debug and release environment
 │   ├──webpack.common.test.js     * webpack common for test environment
 │   ├──webpack.config.dev.js      * webpack specific config for dev environment
 │   ├──webpack.config.prd.js      * webpack specific config for production environment
 │   ├──webpack.test.browser.js    * webpack specific config for browser testing environment
 │   └──webpack.test.node.js       * webpack specific config for node testing environment
 │
 ├──tasks/                         * our browser sync tasks
 |   ├──debug.js                   * start app in dev mode
 |   ├──release.js                 * start app in release mode
 │   └──test.js                    * start testing in browser mode
 │
 ├──app/                           * our source files that will be compiled to javascript
 |   ├──main.ts                    * our entry file
 |   ├──main-aot.ts                * our entry file in AOT mode
 │   │
 |   ├──index.html                 * Index.html: where we generate our index page
 │   │
 |   ├──polyfills.ts               * our polyfills file
 |   ├──vendor.ts                  * our vendor file
 │   │
 |   ├──app.module.ts              * our app module file
 |   ├──app.component.ts           * our main component file
 |   ├──app.component.html         * our main component's template file
 |   ├──app-routing.module.ts      * our routing module file
 │   │
 │   ├──artifact/                  * artifact features folder
 │   ├──common/                    * common features folder
 │   ├──community/                 * community features folder
 │   ├──member/                    * member features folder
 │   ├──dashboard/                 * dashboard features folder
 │   │
 │   └──assets/                    * static assets are served here
 │       └──img/                   * our list of member img
 │
 │
 ├──tslint.json                    * typescript lint config
 ├──tsconfig.json                  * typescript config used with webpack
 ├──tsconfig-aot.json              * typescript config used in AOT mode
 └──package.json                   * what npm uses to manage it's dependencies

```
