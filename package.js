Package.describe({
  name: 'selaias:accounts-strava',
  version: '0.1.0',
  summary: 'Login service for Strava accounts',
  git: 'https://github.com/selaias/accounts-strava.git',
  documentation: 'README.md'
});
Package.onUse(function(api) {
  
  api.versionsFrom('1.0.3.1');
  
  api.use('accounts-base', ['client', 'server']);
  api.imply('accounts-base', ['client', 'server']);
  api.use('accounts-oauth', ['client', 'server']);
  
  api.use('selaias:strava@0.1.0', ['client', 'server']);
  
  api.addFiles("strava.js");
});