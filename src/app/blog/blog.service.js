const userRepository = require('../user/user.repository');
const blogRepository = require('./blog.repository');
const jwt = require('jsonwebtoken');

const createBlog = async (title,description,token) =>{
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    const authorId = payload.id;
    const userExist = await userRepository.checkUserExistsById(authorId)
    if(!userExist) throw new Error("User does not exist");
    return  await blogRepository.createBlog(title, description,authorId);
}

const deleteSpecificBlog = async (id,token) =>{
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    const authorId = payload.id;
    const userExist = await userRepository.checkUserExistsById(authorId)
    if(!userExist) throw new Error("User not found");
    const deleteBlog = await blogRepository.softDeleteBlog(id,authorId);
    if(!deleteBlog) throw new Error("blog does not exist");
    return deleteBlog;
}

const restoreBlog = async (id,authorId) =>{
    const userExist = await userRepository.checkUserExistsById(authorId)
    if(!userExist) throw new Error("User not found");
    const restoreBlog = await blogRepository.restoreBlog(id,authorId);
    if(!restoreBlog) throw new Error("blog does not exist");
    return restoreBlog;
}



module.exports = {
    createBlog,
    deleteSpecificBlog,
    restoreBlog
}