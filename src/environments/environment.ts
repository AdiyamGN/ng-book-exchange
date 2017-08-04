// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyBDf_pRRr-eLy5z7WRlAetY2amdy_HyKNY',
    authDomain: 'ng-book-exchange.firebaseapp.com',
    databaseURL: 'https://ng-book-exchange.firebaseio.com',
    projectId: 'ng-book-exchange',
    storageBucket: 'ng-book-exchange.appspot.com',
    messagingSenderId: '406528693127'
  }
};
