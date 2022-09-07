const {config} = require('dotenv');

config()

module.exports = {
    db: {
        user: process.env.DB_USER || "xwyuebluaagwxx",
        password: process.env.DB_PASSWORD || "6fd875d291876c24f48697506f81332165833ec1c88d191835f91dc0d1c9d240",
        host: process.env.DB_HOST || "ec2-3-219-52-220.compute-1.amazonaws.com",
        port: process.env.DB_PORT || 5432,
        database: process.env.DB_DATABASE || "ddas7da8682m1m"
    }
}