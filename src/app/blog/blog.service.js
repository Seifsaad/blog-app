const userRepository = require('../user/user.repository');
const blogRepository = require('./blog.repository');
const jwt = require('jsonwebtoken');

const createBlog = async (title,description,authorId) =>{

    return  await blogRepository.createBlog(title, description,authorId);
}

const deleteSpecificBlog = async (id,authorId) =>{

    const deleteBlog = await blogRepository.softDeleteBlog(id,authorId);
    if(!deleteBlog) throw new Error("blog does not exist");
    return deleteBlog;
}

const restoreBlog = async (id,authorId) =>{

    const restoreBlog = await blogRepository.restoreBlog(id,authorId);
    if(!restoreBlog) throw new Error("blog does not exist");
    return restoreBlog;
}

const updateBlog = async (id,newData,authorId) =>{
    const blogExist = await blogRepository.findBlogs(id);
    if(!blogExist) throw new Error("blog does not exist");
    Object.assign(blogExist, newData);
    const updateBlog = await blogRepository.updateBlog(id,blogExist);
    // if(!updateBlog) throw new Error("blog does not exist");
    return updateBlog;
}

module.exports = {
    createBlog,
    deleteSpecificBlog,
    restoreBlog,
    updateBlog,
}