'use strict';

var config = require('../../webpack.config');
var express = require('express');
var path = require('path');

var rootPath = path.join(__dirname, '../..');
var projects = process.env.project
  ? process.env.project.split(',')
  : Object.keys(config.entry);
var singleProject = projects.length === 1;
var basePath = path.join(rootPath, 'build', singleProject ? projects[0] : '');

module.exports = function(app) {
  var rootPage;

  app.use(express.static(basePath));
  if(!singleProject) {
    rootPage = projects.map(function(project) {
      return '<div><a href="/' + project + '">' + project + '</a></div>';
    }).join('');
    app.get('/', function(request, response) {
      response.send(rootPage);
    });
  }
};
