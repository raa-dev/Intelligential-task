const express = require('express');
//router
const router = express.Router();
const options = {
    root: "../../public/templates/"
}
//adding static files
router.use('/styles', express.static('../../public/styles'));

router.get('/', async (req, res) => {
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
