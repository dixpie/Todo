//?inside Require
const DB = require('./model/db');



//? outside Require
const express = require('express')
const app = express()
const port = 4242
const chalk = require('chalk');
const bodyParser = require('body-parser');


//? Database
DB()


//? set Engine
app.set('views', 'views')
app.use(bodyParser.urlencoded({
    extended: false
}));
app.set('view engine', 'ejs')
app.use(express.static("public"))


//? Routers
app.use("/admin", require('./routes/admin'))
app.use(require('./routes/main'))

//?Listen To Port
app.listen(port, () => console.log(chalk.magenta.underline.bold(`Example app listening on port 1212!`)))