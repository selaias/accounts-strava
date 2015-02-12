# accounts-strava

Login service for Strava accounts in Meteor

read more at [https://www.meteor.com/accounts] https://www.meteor.com/accounts


Configure Strava services. Example:

```
ServiceConfiguration.configurations.remove({
    service: "strava"
  });
  
ServiceConfiguration.configurations.upsert(
  { service: "strava" },
  { $set: { client_id: <your client_id>, secret: <client_secret> } }
);

```

Using any accounts-ui package it will enable the Sign in with Strava button.