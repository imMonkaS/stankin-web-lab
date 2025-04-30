const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/user');
require('dotenv').config();

class AuthService {
    generateToken(user) {
        return jwt.sign({ id: user.id, username: user.username }, process.env.JWT_SECRET, {
            expiresIn: `${process.env.TOKEN_EXPIRE_TIME_HOURS ?? '24h'}`,
        });
    }

    async register(username, email, password) {
        const existingUser = await User.findOne({ where: { username } });
        if (existingUser) throw new Error('Пользователь уже существует');

        const newUser = await User.create({ username, email, password });
        const token = this.generateToken(newUser);

        return { token };
    }

    async login(username, password) {
        const user = await User.findOne({ where: { username } });
        if (!user) throw new Error('Неверный логин или пароль');

        const isValidPassword = await bcrypt.compare(password, user.password);
        if (!isValidPassword) throw new Error('Неверный логин или пароль');

        const token = this.generateToken(user);
        return { token };
    }
}

module.exports = new AuthService();
