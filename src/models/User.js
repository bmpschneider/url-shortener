const { Model, DataTypes } = require('sequelize');

class User extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING
        },
            {
                sequelize
            })
    }

    static associate(models) {
        this.hasMany(models.Url, { foreignKey: 'user_id', as: 'urls' });
    }
}

module.exports = User;