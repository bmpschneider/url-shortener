const User = require('../models/User');
const Url = require('../models/Url');
const sequelize = require('sequelize')

module.exports = {

    async urlRedirect(req, res) {
        const { id } = req.params;
        const url = await Url.findByPk(id);

        if (!url) {
            return res.status(404).json({ error: '404 not found' });
        }

        await Url.update({ hits: url.hits + 1 }, {
            where: {
                id: url.id
            }
        })

        return res.redirect(301, url.url);
    },
    async urlInsert(req, res) {
        const { user_id } = req.params;
        const { url } = req.body;

        const user = await User.findOne({
            where: {
                name: user_id
            }
        });

        if (!user) {
            return res.status(400).json({ error: 'User not found' });
        }

        const urlData = await Url.create({
            hits: 0,
            url: url,
            short_url: url,
            user_id: user.id,
        });
        return res.status(201).json(urlData);
    },



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
        const user = await User.findOne({
            where: {
                name: user_id
            },
        });

        const urlStats = await Url.findOne({
            attributes: [
                [sequelize.fn('sum', sequelize.col('hits')), 'total_hits'],
                [sequelize.fn('count', sequelize.col('id')), 'total_urls'],
            ],
            where: {
                user_id: user.id
            }
        })

        const urls = await Url.findAll({
            attributes: [
                "id",
                "hits",
                "url",
                ["short_url", "shortUrl"]
            ],
            where: {
                user_id: user.id
            },
            order: [
                ['hits', 'DESC']
            ],
            limit: 10
        })


        const formattedData = {
            hits: parseInt(urlStats.dataValues.total_hits),
            urlCount: urlStats.dataValues.total_urls,
            topUrls: urls
        }

        return res.json(formattedData)
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

    async returnStats(req, res) {

        const urlStats = await Url.findOne({
            attributes: [
                [sequelize.fn('sum', sequelize.col('hits')), 'total_hits'],
                [sequelize.fn('count', sequelize.col('id')), 'total_urls'],
            ],
        })

        const urls = await Url.findAll({
            attributes: [
                "id",
                "hits",
                "url",
                ["short_url", "shortUrl"]
            ],
            order: [
                ['hits', 'DESC']
            ],
            limit: 10
        })


        const formattedData = {
            hits: parseInt(urlStats.dataValues.total_hits),
            urlCount: urlStats.dataValues.total_urls,
            topUrls: urls
        }

        return res.json(formattedData)
    }
}