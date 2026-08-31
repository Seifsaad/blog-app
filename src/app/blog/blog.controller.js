const blogService = require("./blog.service")
const createBlog = async (req, res,next) => {
    try{
        const {title, description} = req.body;
        const authorId = req.user.id;
        const createdBlog = await blogService.createBlog(title, description,authorId);
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
        const authorId = req.user.id;
        const deletedBlog = await blogService.deleteSpecificBlog(id,authorId);
        res.status(200).json({message: 'blog deleted successfully.',success: true,data: deletedBlog});
    }catch (error){
        next(error)
    }
}

const restoreBlog = async (req, res,next) => {
    try {
        const {id} = req.params;
        const authorId = req.user.id;
        const restoreBlog = await blogService.restoreBlog(id,authorId  );
        res.status(200).json({
            message: 'blog restored successfully.',success: true,data: restoreBlog
        })
    }catch (error){
        next(error)
    }
}

const updateBlog = async (req, res,next) => {
    try {
        const {id} = req.params;
        const authorId = req.user.id;
        // const {title, description} = req.body;
        const updatedBlog = await blogService.updateBlog(id,req.body,authorId);
        res.status(200).json({message: 'blog updated successfully.',success: true,data: updatedBlog})
    }catch (error){
        next(error)
    }
}
module.exports = {
    createBlog,
    deleteSpecificBlog,
    restoreBlog,
    updateBlog,
}