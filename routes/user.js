const userController = require('../controller/user-controller')


const userRouter = require('koa-router')({
    prefix: '/user'
});


userRouter.get('/', userController.all);
userRouter.get('/:UID', userController.byUID);


module.exports = userRouter;