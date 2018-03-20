'use strict';

var {Then, When} = require('cucumber');
var assert = require('assert');
var fs = require('fs');
var mzFs = require('mz/fs');

When(/^I navigate to "([^"]*)"$/, function () {
  console.log("wheee")
});
