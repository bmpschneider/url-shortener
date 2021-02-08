const { Model, DataTypes } = require('sequelize');

class Url extends Model {
    static init(sequelize) {
        super.init({
            hits: DataTypes.INTEGER,
            url: DataTypes.STRING,
            short_url: DataTypes.STRING,
        },
            {
                sequelize
            })
    }

    static associate(models) {
        this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
    }
}

module.exports = Url;