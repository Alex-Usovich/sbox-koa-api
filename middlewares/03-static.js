const serveStatic = require('koa-static');

module.exports.init = app => app.use(serveStatic('public'));
