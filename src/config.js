const {config} = require('dotenv');

config()

module.exports = {
    db: {
        user: process.env.DB_USER || "nzyncrttmikvzg",
        password: process.env.DB_PASSWORD || "9047fcc708a40884c510f7d6284ec1576104ef670f204af10ead247427f7e964",
        host: process.env.DB_HOST || "ec2-23-23-182-238.compute-1.amazonaws.com",
        port: process.env.DB_PORT || 5432,
        database: process.env.DB_DATABASE || "d8jq31pdtd61oe"
    }
}