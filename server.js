'use strict';

/**
 * Module dependencies.
 */
process.env.NODE_ENV = "production";
let Arrow = require('arrowjs');

let application = new Arrow();

application.before(require('./core_route'));
application.config();

application.listen(__config.port, function () {
    console.log('Application started on port ' + __config.port, ', Process ID: ' + process.pid);
});
