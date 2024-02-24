const pool = require('../db/config');

class BaseModel {
    async getAll(tableName){
        const results = await pool.query(`Select * from $(tableName)`);
        return results.rows;
    }

    async getById(tableName, id){
        const result = await pool.query(`Select * from $(tableName) where id = $1`, [id]);
        return result.rows[0];
    }

    async create(tableName, data){

    }

    async update(tableName, id, data){

    }

    async tdelete(tableName, id){

    }
}

module.exports = BaseModel;

