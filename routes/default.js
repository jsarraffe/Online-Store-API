
const userRouter = require('./user')
const defaultRouter = require('koa-router')({
    prefix: '/api/v1'
});


defaultRouter.get('/', (ctx) => {
    ctx.body = 'Default Route Hit';
});

defaultRouter.use (
    userRouter.routes()
)


module.exports = (koaServer) => {
    koaServer.use(defaultRouter.routes())
};