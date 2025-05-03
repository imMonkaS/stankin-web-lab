const User = require("../models/user");


class UserRepository {
    async getById(user_id) {
        return await User.findByPk(user_id, {attributes: { exclude: ['password'] }});
    }

    async updateUser(id, newData) {
        console.log(newData)
        const user = await User.findByPk(id);
        if (!user) return null;
        return await user.update(newData);
    }
}

module.exports = new UserRepository();