const blogService = require("./blog.service")
const createBlog = async (req, res,next) => {
    try{
        const {title, description, authorId} = req.body;
        const createdBlog = await blogService.createBlog(title, description, authorId);
        res.status(201).json({
            message: 'blog created successfully.',
            success: true,
            data: createdBlog
        })
    }catch (error){
        next(error)
    }
}

module.exports = {
    createBlog,
}