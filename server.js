'use strict';

/**
 * Module dependencies.
 */
process.env.NODE_ENV = "development";
let Arrow = require('arrowjs');

let application = new Arrow();

application.before(require('./core_route'));
application.config();

application.listen(application._config.port, function () {
    console.log('Application started on port ' + application._config.port, ', Process ID: ' + process.pid);
});

module.exports = application;