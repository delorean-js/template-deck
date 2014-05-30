'use strict';

var config = require('../../webpack.config');
var express = require('express');
var path = require('path');

var rootPath = path.join(__dirname, '../..');
var projects = process.env.project || Object.keys(config.entry);
var singleProject = projects.length === 1;
var basePath = path.join(rootPath, 'build', singleProject ? projects[0] : '');

module.exports = function(app) {
  app.use(express.static(basePath));
};
