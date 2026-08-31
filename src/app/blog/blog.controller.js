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

const deleteSpecificBlog = async (req, res,next) => {
    try {
        const {id} = req.params;
        const {authorId} = req.body;
        const deletedBlog = await blogService.deleteSpecificBlog(id, authorId);
        res.status(200).json({message: 'blog deleted successfully.',success: true,data: deletedBlog});
    }catch (error){
        next(error)
    }
}

const restoreBlog = async (req, res,next) => {
    try {
        const {id} = req.params;
        const {authorId} = req.body;
        const restoreBlog = await blogService.restoreBlog(id, authorId);
        res.status(200).json({
            message: 'blog restored successfully.',success: true,data: restoreBlog
        })
    }catch (error){
        next(error)
    }
}

module.exports = {
    createBlog,
    deleteSpecificBlog,
    restoreBlog,
}