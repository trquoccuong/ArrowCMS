'use strict'
module.exports = function (app) {
    // Root routing
    let core = require('./controllers/index');
    app.route('/').get(core.index);
    app.route('/page/:page').get(core.index);
};