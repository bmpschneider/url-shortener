const User = require('../models/User');
const Url = require('../models/Url');

module.exports = {

    async index(req, res) {
        const { user_id } = req.params;
        const user = await User.findByPk(user_id, {
            include: { association: 'urls' }
        });

        return res.json(user);

    },

    async index2(req, res) {
        const { id } = req.params;
        const url = await Url.findByPk(id);

        return res.json(url);

    },


    async store(req, res) {
        const { user_id } = req.params;
        const { hits, url, short_url } = req.body;

        const user = await User.findByPk(user_id);

        if (!user) {
            return res.status(400).json({ error: 'User not found' });
        }

        const teste = await Url.create({
            hits,
            url,
            short_url,
            user_id,
        });

        return res.status(201).json(teste);
    }
}