const pool = require('../../common/db/db')

const findUserByEmail = async (email) => {
    let query = `SELECT * FROM users WHERE email = $1`;
    const {rows} = await pool.query(query, [email]);
    return rows[0];
}

const createUser = async (email,name, hashedPassword) => {
    const {rows} = await pool.query(`INSERT INTO users (email , name ,password_hash) VALUES ($1,$2,$3) RETURNING *`, [email,name,hashedPassword]);
    return rows[0];
}




module.exports = {
    findUserByEmail,
    createUser,
}