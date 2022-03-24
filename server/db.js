import mysql from 'mysql2';

// create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Kts0thachoshen',
    database: 'cms'
  });
  
export default connection