const session = require('koa-session');
const mongooseStore = require('koa-session-mongoose');
const convert = require('koa-convert');

const CONFIG = {
    key: 'koa:sess', /** (string) cookie key (default is koa:sess) */
    /** (number || 'session') maxAge in ms (default is 1 days) */
    /** 'session' will result in a cookie that expires when session/browser is closed */
    /** Warning: If a session cookie is stolen, this cookie will never expire */
    maxAge: 86400000,
    overwrite: true, /** (boolean) can overwrite or not (default true) */
    httpOnly: true, /** (boolean) httpOnly or not (default true) */
    signed: true, /** (boolean) signed or not (default true) */
    rolling: true, /** (boolean) Force a session identifier cookie to be set on
     every response. The expiration is reset to the original maxAge, resetting the expiration countdown. (default is false) */
    renew: false, /** (boolean) renew session when session is nearly expired, so we can always keep user logged in. (default is false)*/
};

module.exports.init = app => app.use(session(CONFIG, app))

// module.exports.init = app => app.use(convert(session(
//
// )));
/*
{
    key: 'sid',
        cookie: {
    httpOnly: true,
        path: '/',
        overwrite: true,
        signed: false,
        maxAge: 3600 * 4 * 1e3
},
    rolling: true,
        store: mongooseStore.create({
    model: 'Session',
    expires: 3600 * 4
})
}*/
