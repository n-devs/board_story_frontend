import mysql from 'mysql';
import env from '@beam-australia/react-env'

const connect = mysql.createPool({
    host: `${env('DB_MYSQL_HOST')}`,
    user: `${env('DB_MYSQL_USER')}`,
    password: `${env('DB_MYSQL_PASSWORD')}`,
    database: `${env('DB_MYSQL_DATABASE_NAME')}`
})

export default connect;