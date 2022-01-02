// header files
const express = require('express');
const cors = require('cors');
const routerApi = require('../router/index');
//middlewares
const {   logErrors, errorHandler, boomErrorHandler, ormErrorHandler } = require('../../middlewares/error.hadler');
// http
const port = process.env.PORT || 8080;
const IP = "localhost";
// express app
const app = express();
//passport
const passport = require('passport');

app.use(express.json());
//dar acceso a múltiples orígenes, cors
const whitelist = ['http://localhost:8080', 'https://localhost:8000', 'http://192.168.100.44', 'http://192.168.100.9', 'https://immense-garden-99230.herokuapp.com/', 'https://rdr-x.github.io/intelligential-library-views/'];
const options = {
    origin: (origin, callback) => {
        if (whitelist.includes(origin) || !origin) {
            callback(null, true);
        } else {
            callback(new Error('origen no permitido'));
        }
    }
}
app.use(cors());
//auth
require('../../utils/auth/');
app.use(passport.initialize());

routerApi(app);
//using error middlewares
app.use(logErrors);
app.use(ormErrorHandler);
app.use(boomErrorHandler);
app.use(errorHandler);

//listener
app.listen(port, () => {
    console.log("http://"+ IP +":" + port + "/");
});
