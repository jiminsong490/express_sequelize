const { Sequelize, Model, DataTypes } = require('sequelize')

module.exports = class Comment extends Model {
    static init(sequelize) {
        return super.init(
            {
                comment: {
                    type: DataTypes.STRING(100),
                    allowNull: false,
                },
                created_at: {
                    type: DataTypes.DATE,
                    allowNull: true,
                    defaultValue: DataTypes.NOW,
                },
            },
            {
                sequelize,
                timestamps: false,
                modelName: 'Comment',
                tableName: 'comments',
                paranoid: false,
                charset: 'utf8mb4',
                collate: 'utf8mb4_general_ci',
            }
        )
    }

    static associate(db) {
        db.Comment.belongsTo(db.User, {
            foreignKey: 'commenter',
            targetKey: 'id',
        })
    }
}
