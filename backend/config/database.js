const sql = require('mssql');

const config = {
    user: '',
    server: 'BOKANGN//SQLEXPRESS',
    database: 'Brands',
    
};

const pool = new sql.ConnectionPool(config);

pool.connect().then((pool) => {
    console.log('Connected to SQL Server');
});