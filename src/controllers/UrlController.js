const User = require('../models/User');
const Url = require('../models/Url');

module.exports = {

    async redirect(req, res) {
        const { id } = req.params;
        const url = await Url.findByPk(id);

        if (!url) {
            return res.status(404).json({ error: '404 not found' });
        }

        res.redirect(301, `${url.url}`);
    },
    async urlInsert(req, res) {
        const { user_id } = req.params;
        const { url } = req.body;

        const user = await User.findByPk(user_id);

        if (!user) {
            return res.status(400).json({ error: 'User not found' });
        }

        const teste = await Url.create({
            hits: 1,
            url: url,
            short_url: url,
            user_id: user_id,
        });

        return res.status(201).json(teste);
    },

    // async urlInsert(req, res) {
    //     const { user_id } = req.params;
    //     const { url } = req.body;

    //     const user = await User.findByPk(user_id);

    //     if (!user) {
    //         return res.status(400).json({ error: 'User not found' });
    //     }

    //     const findurl = await Url.findOne({
    //         where: {
    //             url: url
    //         }
    //     });
    //     const newHits = findurl.hits + 1;

    //     if (!findurl) {
    //         const teste = await Url.create({
    //             hits: 1,
    //             url: url,
    //             short_url: url,
    //             user_id: user_id,
    //         });
    //         return res.status(201).json(teste);
    //     }
    //     if (findurl) {
    //         await Url.update({ hits: newHits }, {
    //             where: {
    //                 url: url
    //             }
    //         });
    //         urlStats = {
    //             id: findurl.id,
    //             hits: newHits,
    //             url: findurl.url,
    //             short_url: findurl.short_url
    //         }
    //         return res.status(201).json(urlStats);
    //     }
    // },


    async urlUpdate(req, res) {
        const { id } = req.params;
        // const urlfind = Url.findByPk(id);

        const update = await Url.update({ hits: 2 }, {
            where: {
                id: id
            }
        });
    },

    async returnUrlByUser(req, res) {
        const { user_id } = req.params;
        const { name, urls } = req.body;
        const user = await User.findByPk(user_id, {
            include: { association: 'urls' }
        });

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        const formattedData = {
            id: user_id,
            name: user.name,
            urls: user.urls
        }

        return res.json(formattedData);

    },

    async returnUrl(req, res) {
        const { id } = req.params;
        const url = await Url.findByPk(id);

        const formattedData = {
            id: url.id,
            hits: url.hits,
            url: url.url,
            short_url: url.short_url
        }
        return res.json(formattedData);

    },

    async urlDelete(req, res) {
        const { id } = req.params;

        const urldelete = await Url.destroy({
            where: {
                id: id
            }
        });
        if (!urldelete) {
            return res.status(400).json({ error: 'Url not found' })
        }
        return res.status(200).json(Url.id);
    },
}