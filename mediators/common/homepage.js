const homepage = async (ctx, next) => {
    ctx.body = {
        hello: ctx.session
    };
};

export { homepage };
