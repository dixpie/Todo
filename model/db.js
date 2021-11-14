const chalk = require('chalk');

var mongoose = require('mongoose');
//Set up default mongoose connection
var mongoDB = 'mongodb://localhost:27017/Todo';
const ConnectDB = () => {
    try {
        mongoose.connect(mongoDB, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }).then(result => {

            console.log(chalk.cyan.underline.bold("connected " + result.connection.host))
        })
    } catch (error) {
        console.log(chalk.red.underline.bold("Mongoose Error " + error))
    }
}
//Get the default connection
var db = mongoose.connection;
//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports = ConnectDB