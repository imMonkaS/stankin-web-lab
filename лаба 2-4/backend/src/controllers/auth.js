const authService = require('../services/auth');

class AuthController {
    async register(req, res) {
        try {
            const { username, email, password } = req.body;
            const { user, token } = await authService.register(username, email, password);
            res.status(201).json({ user, token });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async login(req, res) {
        try {
            const { username, password } = req.body;
            const { user, token } = await authService.login(username, password);
            res.status(200).json({ user, token });
        } catch (error) {
            res.status(401).json({ error: error.message });
        }
    }
}

module.exports = new AuthController();
