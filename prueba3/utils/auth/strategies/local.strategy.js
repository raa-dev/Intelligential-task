const { Strategy } = require('passport-local');
const AuthService = require('../../../src/services/auth.services.js');
const service = new AuthService();
const passport = require('passport');

const LocalStrategy = new Strategy({
    usernameField:'email',
    passwordField:'password'
},
async (email, password, done) => {
    try {
        const customer = await service.getCustomer(email, password);
        return done(null, customer);
    } catch (error) {
        done(error, false);
    }
});

module.exports = LocalStrategy;
