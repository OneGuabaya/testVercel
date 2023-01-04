const {Pool} = require('pg')

const pool = new Pool ({
    user: 'solucion_registro',
    password: 'LxGyEzInkz0u',
    host: '144.126.155.200',
    port: 5432,
    database: 'solucion_db_registro'
})

module.exports = pool;