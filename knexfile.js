const { password } = require("pg/lib/defaults");

module.exports = {
    test: {
        client: 'pg',
        version: '9.6',
        connection : {
            host: 'localhost',
            user: 'postgres',
            password: 'postgres',
            database: 'finance'
        },
        migrations: {
            directory: 'src/migrations',
        },
    },
}