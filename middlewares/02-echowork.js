const echoWork =  async (ctx, next) => {
  console.log('echoing..');

  await next();
};

module.exports.init = app => app.use(echoWork);
