const mongoose = require('mongoose');
const dbConfig = require('../config/dbConfig.json');

mongoose.Promise = global.Promise;

mongoose.connect(dbConfig.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

module.exports = mongoose;