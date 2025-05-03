const User = require("../models/user");


class UserRepository {
    async getById(user_id) {
        return await User.findByPk(user_id, {attributes: { exclude: ['password'] }});
    }
}

module.exports = new UserRepository();