const express = require('express');
const passport = require('passport');
const AuthService = require('../services/auth.services');
const router = express.Router();
const service = new AuthService();

router.post('/login',
    passport.authenticate('local', {session: false}),
    async (req, res, next) => {
        try {
            const customer = req.customer;
            res.json(service.signToken(customer));
        } catch (error) {
            next(error);
        }
    }
);

router.post('/change-password',
    async (req, res, next) => {
        try {
            const { token, newPassword } = req.body;
            const answer = await service.changePassword(token, newPassword);
            res.json(answer);
        } catch (error) {
            next(error);
        }
    }
);

module.exports = router;
