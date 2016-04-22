 /*
 * Note: This code assumes you have an authorized Analytics client object.
 * See the Account Summaries Developer Guide for details.
 */

/*
 * Example 1:
 * Requests a list of all account summaries for the authorized user.
 */
function listAccountSummaries() {
  var request = gapi.client.analytics.management.accountSummaries.list();
  request.execute(handleResponse);
}

/*
 * Example 2:
 * The results of the list method are passed as the response object.
 * The following code shows how to iterate through them.
 */
function handleResponse(response) {
  if (response && !response.error) {
    if (response.items) {
      printAccountSummaries(response.items);
    }
  } else {
    console.log('There was an error: ' + response.message);
  }
}


function printAccountSummaries(accounts) {
  for (var i = 0, account; account = accounts[i]; i++) {
    console.log('Account id: ' + account.id);
    console.log('Account name: ' + account.name);
    console.log('Account kind: ' + account.kind);

    // Print the properties.
    if (account.webProperties) {
      printProperties(account.webProperties);
    }
  }
}


function printProperties(properties) {
  for (var j = 0, property; property = properties[j]; j++) {
    console.log('Property id: ' + property.id);
    console.log('Property name: ' + property.name);
    console.log('Property kind: ' + property.kind);
    console.log('Internal id: ' + property.internalWebPropertyId);
    console.log('Property level: ' + property.level);
    console.log('Property url: ' + property.websiteUrl);

    // Print the views (profiles).
    if (property.profiles) {
      printProfiles(property.profiles);
    }
  }
}


function printProfiles(profiles) {
  for (var k = 0, profile; profile = profiles[k]; k++) {
    console.log('Profile id: ' + profile.id);
    console.log('Profile name: ' + profile.name);
    console.log('Profile kind: ' + profile.kind);
    console.log('Profile type: ' + profile.type);
  }
}
