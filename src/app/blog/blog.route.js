const {Router} = require('express')
const blogRouter = new Router();
const blogController = require('./blog.controller');

// blogRouter.get('/blog', )
blogRouter.post('/createblog',blogController.createBlog )
// blogRouter.put('/blog/:id', )
// blogRouter.delete('/blog/:id', )


module.exports = blogRouter;