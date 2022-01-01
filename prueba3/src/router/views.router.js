const express = require('express');
const passport = require('passport');
//router
const router = express.Router();
const options = {
    root: "./prueba3/public/templates/"
}
//adding static files
router.use('/styles', express.static('./prueba3/public/styles/'));
router.use('/components', express.static('./prueba3/public/components/'));

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

router.get('/login', 
    async (req, res, next) => {
        let login = "login.html";
        res.sendFile(login, options, function callback(err) {
            if (err) {
                next(err);
            } else {
                console.log("Sent: ", login);
            }
        });
    }
);

router.get('/signin', async (req, res, next) => {
    let signin = "signin.html";
    res.sendFile(signin, options, function callback(err) {
        if (err) {
            next(err);
        } else {
            console.log("Sent: ", signin);
        }
    })
});

router.get('/search', async (req, res, next) => {
    let search = "search.html";
    res.sendFile(search, options, function callback(err) {
        if (err) {
            next(err);
        } else {
            console.log("Sent: ", search);
        }
    })
});

router.get('/addBook', async (req, res, next) => {
    let search = "addBook.html";
    res.sendFile(search, options, function callback(err) {
        if (err) {
            next(err);
        } else {
            console.log("Sent: ", search);
        }
    })
});

router.get('/user',
    // passport.authenticate('local', {
    //     failureRedirect: '/login',
    //     successRedirect: '/user'
    // }),
    async (req, res, next) => {
        let user = "userHome.html";
        res.sendFile(user, options, function callback(err) {
            if (err) {
                next(err);
            } else {
                console.log("Sent: ", user);
            }
        })
    }
);

//exportar modulo
module.exports = router;
