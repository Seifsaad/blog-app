const pool = require('../../common/db/db')

const createBlog = async (title, description,authorId) => {
    const {rows} =    await pool.query(`INSERT INTO blogs (title,content,author_id) VALUES ($1,$2,$3) RETURNING *`,[title,description,authorId])
    return rows[0];
}

async function hardDeleteBlog(id,authorId){
    const {rows} = await pool.query(`DELETE FROM blogs WHERE id=$1 AND author_id = $2 RETURNING *`,[id,authorId])
    return rows[0];
}

async function softDeleteBlog(id,authorId){
    const {rows} = await pool.query(`UPDATE blogs SET is_deleted = TRUE , updated_at = NOW() WHERE id = $1 AND author_id = $2 AND is_deleted =FALSE RETURNING *`,[id,authorId]);
    return rows[0];
}

async function restoreBlog(id,authorId){
    const {rows} = await pool.query(`UPDATE blogs SET is_deleted = FALSE ,updated_at = NOW() WHERE id = $1 AND author_id = $2 RETURNING *`,[id,authorId]);
    return rows[0];
}



module.exports = {
    createBlog,
    hardDeleteBlog,
    softDeleteBlog,
    restoreBlog,
}