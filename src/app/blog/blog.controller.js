const blogService = require("./blog.service")
const createBlog = async (req, res,next) => {
    try{
        const {title, description, token} = req.body;
        const createdBlog = await blogService.createBlog(title, description, token);
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
        const {token} = req.body;
        const deletedBlog = await blogService.deleteSpecificBlog(id, token);
        res.status(200).json({message: 'blog deleted successfully.',success: true,data: deletedBlog});
    }catch (error){
        next(error)
    }
}

const restoreBlog = async (req, res,next) => {
    try {
        const {id} = req.params;
        const {token} = req.body;
        const restoreBlog = await blogService.restoreBlog(id,token);
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