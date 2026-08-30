const pool = require('../../common/db/db')

const createBlog = async (title, description,authorId) => {
    const {rows} =    await pool.query(`INSERT INTO blogs (title,description,author_id) VALUES ($1,$2,$3)`,[title,description,authorId])
    return rows[0];
}

module.exports = {
    createBlog,

}