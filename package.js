// Package metadata file for Meteor.js
var packageName = 'aaronroberson:angular-motion';
var where = 'client';
var version = '0.4.3';
var summary = 'AngularMotion - Fancy CSS3 animations for AngularJS 1.2+';
var gitLink = 'https://github.com/aaronroberson/angular-motion';
var documentationFile = 'README.md';

// Meta-data
Package.describe({
  name: packageName,
  version: version,
  summary: summary,
  git: gitLink,
  documentation: documentationFile
});

Package.onUse(function(api) {
  api.versionsFrom(['METEOR@0.9.0', 'METEOR@1.0']);

  api.addAssets('dist/angular-motion.css', where);
}); 