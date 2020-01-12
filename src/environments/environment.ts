// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  envName: 'local',
  keycloak: {
    // Url of the Identity Provider
    issuer: 'http://localhost:8080/auth/realms/tasks',

    // URL of the SPA to redirect the user to after login
    redirectUri: 'http://localhost:4201/',

    // The SPA's id. 
    // The SPA is registerd with this id at the auth-serverß
    clientId: 'todo-ui',

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