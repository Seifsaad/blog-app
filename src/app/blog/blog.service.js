const userRepository = require('../user/user.repository');
const blogRepository = require('./blog.repository');

const createBlog = async (title,description,authorId) =>{
    const userExist = await userRepository.findUserById(authorId)
    if(!userExist) throw new Error("User does not exist");
    return  await blogRepository.createBlog(title, description,authorId);
}

module.exports = {
    createBlog,
}