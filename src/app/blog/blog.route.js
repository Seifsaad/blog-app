const {Router} = require('express')
const blogRouter = new Router();
const blogController = require('./blog.controller');
const authGuard = require('../../common/auth/guard');

// blogRouter.get('/blog', )
blogRouter.post('/createblog',authGuard,blogController.createBlog)
// blogRouter.put('/blog/:id', )
blogRouter.delete('/:id',authGuard, blogController.deleteSpecificBlog)
blogRouter.patch('/:id',authGuard ,blogController.restoreBlog)
blogRouter.put('/:id',authGuard ,blogController.updateBlog)



module.exports = blogRouter;