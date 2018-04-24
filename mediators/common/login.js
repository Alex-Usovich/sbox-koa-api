const passport = require('koa-passport');

const login = async (ctx, next) => {
    return await passport.authenticate(
        'local',
        async (err, user, info) => {
            // only callback-form of authenticate allows to assign
            // ctx.body=info on 401 in passport.authenticate callback: this
            // == global, so we need a wrapper to access context
            if (err) {
                throw err;
            }

            if (user === false) {
                ctx.status = 401;
                ctx.body = { error: info };
            } else {
                ctx.body = {
                    user: user.getPublicFields()
                };

                await ctx.login(user);
            }
        })(ctx, next);
};

export { login };
