const config = require('../config.json');
const mongoose = require('mongoose');
const MONGODB_URI = 'mongodb+srv://kujji:kujji@cluster0.zcprv.gcp.mongodb.net/test?retryWrites=true&w=majority' ;
const connectionOptions = { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false };
mongoose.connect(MONGODB_URI || config.connectionString, connectionOptions);
console.log('connected')
mongoose.Promise = global.Promise;

module.exports = {
    Account: require('../accounts/account.model'),
    RefreshToken: require('../accounts/refresh-token.model'),
    isValidId
};

function isValidId(id) {
    return mongoose.Types.ObjectId.isValid(id);
}