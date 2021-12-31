const express = require('express');
//router
const router = express.Router();
const options = {
    root: "./prueba3/public/templates/"
}
//adding static files
router.use('/styles', express.static('./prueba3/public/styles'));

router.get('/', async (req, res, next) => {
    let home = "index.html";
    res.sendFile(home, options, function callback(err) {
        if (err) {
            next(err);
        } else {
            console.log("Sent: ", home);
        }
    })
});

//exportar modulo
module.exports = router;
