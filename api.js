const koa = require('koa')
const defaultRouter = require('./routes/default');
const koaServer = new koa();
const API_PORT = 8128;





koaServer.use(async (ctx, next) => {
    await next();
    const rs = ctx.response.get('X-Response-Time');
    console.log(`Type: ${ctx.method} Path: ${ctx.url} Time: ${rs}`);
});

koaServer.use(async (ctx, next) => {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    ctx.set('X-Response-Time', `${ms}`);

});



defaultRouter(koaServer);

koaServer.listen(API_PORT, () => {
    console.log(`Listening on: ${API_PORT}`)
});
