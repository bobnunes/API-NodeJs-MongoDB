const mongoose = require('mongoose');
const authConfig = require('../config/auth.json');

mongoose.Promise = global.Promise;

mongoose.connect(authConfig.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

module.exports = mongoose;