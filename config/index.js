const {
    PORT,
    MONGODB_URI_LIVE,
    MONGODB_URI_LOCAL,
    JWT_SECRET
} = require('./environtment');

const db = require('./database');

module.exports = {
    PORT,
    MONGODB_URI_LIVE,
    MONGODB_URI_LOCAL,
    JWT_SECRET,db
}