const User = require('../models/User')

module.exports = {

    async userInsert(req, res) {
        const { name } = req.body
        const userfind = await User.findOne({
            where: {
                name: name
            }
        })

        if (!userfind) {
            await User.create({ name })
            return res.status(201).json({ id: name })
        }

        return res.status(409).json({ error: 'User already exist!' })
    },

    async userDelete(req, res) {
        const { user_id } = req.params
        const userdelete = await User.destroy({
            where: {
                name: user_id
            }
        })

        if (!userdelete) {
            return res.status(400).json({ error: 'User not found' })
        }

        return res.json(User.id)
    }
}