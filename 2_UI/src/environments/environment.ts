export const environment = {

  production: true,

  // TODO: make sure you have the correct region
  region: 'eu-west-1',


  // TODO: This id can be retrieved in output section of the cognito ui
  // cloud formation stack.
  cognitoIdentityPoolId: 'eu-west-1:c5bd44b2-6168-4bc7-99da-6311302db79d',

  // TODO: Facebook app id can be retrieved from the application in your
  // facebook developer account.
  facebookAppId: '312947186914224',

  // TODO: The API URL is available in the API Gateway console under Stage
  // NOTE: don't forget trailing "/"  For example:
  // https://api.example.com/prod/
  ticketAPI: 'https://api.gopay.click/'

};
