module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Record', {
        speed: {
            type: DataTypes.INTEGER,
        },
        time: {
            type: DataTypes.INTEGER,
        }
    });
};
