module.exports.init = app => app.use(async (ctx, next) => {
    try {
        await next();
    } catch(error) {
        if (error.status) {
            ctx.body = error.message;
            ctx.status = error.status;
        } else {
            ctx.body = 'Error 500';
            ctx.status = 500;
            console.error(error.message, error.stack);
        }
    }
});
