const pgp = require("pg-promise")(/*options*/);
const db = pgp("postgres://root@localhost:5432/postgres");
const { Sequelize } = require('sequelize');
const {json} = require("express");
const Pool = require('pg').Pool;

// exports.dbResponse = db.one('SELECT login FROM users WHERE user_id = 1')
//     .then(function (data) {
//         return data;
//     })
//     .catch(function (error) {
//         console.log("ERROR:", error);
//     });
//
// exports.trySeq = async function () {
//     const sequelize = new Sequelize('postgres', 'postgres', 'password', {
//         host: 'localhost',
//         port: 5432,
//         dialect: 'postgres',
//     });
//
//
//     try {
//         await sequelize.authenticate();
//         console.log('Connection has been established successfully.');
//     } catch (error) {
//         console.error('Unable to connect to the database:', error);
//     }
// }

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'demo',
    password: 'postgres',
    port: 5432,
})

const getData = (req,res) => {
    return pool.query('SELECT * FROM settings', (err, results) => {
        if (err) throw err;
        console.log(results.rows);
        if (res) json(results.rows);
    });
}

module.exports = {getData}