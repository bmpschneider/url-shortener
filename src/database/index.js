const Sequelize = require('sequelize')
const dbConfig = require('../config/database')

const User = require('../models/User')
const Url = require('../models/Url')

const connection = new Sequelize(dbConfig)

User.init(connection)
Url.init(connection)

Url.associate(connection.models)
User.associate(connection.models)


module.exports = connection