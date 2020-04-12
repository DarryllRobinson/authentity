export const AUTH_CONFIG = {
  domain: 'fcmcms.eu.auth0.com',
  clientId: 'fkwBprhTiDiiWaXb37yAFn14DU5ct1zy',
  callbackUrl: process.env.NODE_ENV === 'development' ? 'http://localhost:3000/callback' : 'https://stillproud.com/callback',
}
