const userController = require('../controller/user-controller')


const userRouter = require('koa-router')({
    prefix: '/user'
});


userRouter.get('/', userController.all);
// userRouter.get('/:UID', userController.byUID);   
//ROUTE PATH THAT LEADS DIRECTLY TO A FUNCTION

userRouter.get('/:UID', userController.showUserCart);
userRouter.post('/', userController.addUser);
userRouter.delete('/:UID', userController.deleteUser);


module.exports = userRouter;