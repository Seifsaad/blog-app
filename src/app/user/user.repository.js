const pool = require('../../common/db/db')

const findUserById = async (id)=>{
      const {rows} = await pool.query(`SELECT * FROM users WHERE id = $1`, [id]);
      return rows[0];
}

const checkUserExistsById = async (id)=>{
    const {rows} = await pool.query(`SELECT EXISTS(SELECT 1 FROM users WHERE id = $1) AS result `,[id]);
    return rows[0].result;
}

module.exports = {
    findUserById,
    checkUserExistsById,
}