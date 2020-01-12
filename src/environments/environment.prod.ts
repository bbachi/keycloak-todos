export const environment = {
  production: true,
  envName: 'prod',
  keycloak: {
    // Url of the Identity Provider
    issuer: 'https://sso-dev.nonprod.jbhunt.com/auth/realms/JBH360',

    // URL of the SPA to redirect the user to after login
    redirectUri: 'https://rail-pricing-dev.nonprod.jbhunt.com/pricing/dashboard/',

    // The SPA's id. 
    // The SPA is registerd with this id at the auth-serverß
    clientId: 'rps-ui',

    responseType: 'code',
    // set the scope for the permissions the client should request
    // The first three are defined by OIDC.
    scope: 'openid profile email',
    // Remove the requirement of using Https to simplify the demo
    // THIS SHOULD NOT BE USED IN PRODUCTION
    // USE A CERTIFICATE FOR YOUR IDP
    // IN PRODUCTION
    requireHttps: false,
    // at_hash is not present in JWT token
    showDebugInformation: true,
    disableAtHashCheck: true
  }
};
