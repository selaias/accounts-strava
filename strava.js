Accounts.oauth.registerService('strava');
if (Meteor.isClient) {
  Meteor.loginWithStrava = function(options, callback) {
    // support a callback without options
    if (! callback && typeof options === "function") {
      callback = options;
      options = null;
    }
    var credentialRequestCompleteCallback = Accounts.oauth.credentialRequestCompleteHandler(callback);
    Strava.requestCredential(options, credentialRequestCompleteCallback);
  };
} else {
  Accounts.addAutopublishFields({
    forLoggedInUser: ['services.strava'],
    forOtherUsers: ['services.strava.firstname']
  });
}
