// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyCk4PtPA3JyAfll1fri_Fu-dPKJSbW2v-w',
    authDomain: 'rocketchatv2.firebaseapp.com',
    databaseURL: 'https://rocketchatv2.firebaseio.com',
    projectId: 'rocketchatv2',
    storageBucket: 'rocketchatv2.appspot.com',
    messagingSenderId: '576850603027'
  }
};
