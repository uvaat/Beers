var CONFIG             = {

    debug           : true,
    applicationName : 'beer',
    api             : 'http://api.brewerydb.com/v2/',
    apiKey          : '6f3d2593edd46169fabcdc3a9c252130',
    defaultParams   : {},
    db            : new PouchDB('beer'),
    modules         : [
    'ionic',
    'app.controllers',
    'app.services',
    'app.directives',
    'app.configs',
    'app.routes',
    'app.run'
    ]


};
