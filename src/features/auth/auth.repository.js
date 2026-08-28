const pool = require('../../common/db/db')

const findUserByEmail = async (email) => {
    let query = `SELECT * FROM users WHERE email = $1`;
    const {rows} = await pool.query(query, [email]);
    return rows[0];
}



module.exports = {
    findUserByEmail
}