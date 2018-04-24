//  &&  cp -rf views dist/views && cp -rf public dist/public

const Koa = require('koa');

const app = new Koa();
// const mongoose = require('./lib/mongoose');

app.keys = ['some secret hurr'];


const path = require('path');
const fs = require('fs');

const middleWares = fs.readdirSync(path.join(__dirname, 'middlewares')).sort();

middleWares.forEach(middleWare => require('./middlewares/' + middleWare).init(app));

import { apiRouter, nonApiRouter } from './routing';

app.use(apiRouter.routes());
app.use(nonApiRouter.routes());

module.exports = app;

if (!module.parent) {
    app.listen(3000);
}
