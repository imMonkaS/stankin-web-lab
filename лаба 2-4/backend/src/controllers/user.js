const UserRepository = require('../repositories/user')

class UserController {
    async getCurrentUser(req, res) {
        try {
            const user_id = req.user.id;
            const user = await UserRepository.getById(user_id);
            res.json(user);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async update(req, res) {
        try {
            const data = req.body
            const user_id = req.user.id;
            const user = await UserRepository.updateUser(user_id, data);
            res.json(user);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = new UserController();
