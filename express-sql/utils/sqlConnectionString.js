const mysql = require('mysql2');

// in the Query section if fails to authenticate
// ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'myPassword'
// flush priveleges;

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'myDbName',
    password: 'myPassword'
});

module.exports = pool.promise();