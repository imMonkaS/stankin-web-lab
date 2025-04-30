const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
    process.env.PG_DATABASE,
    process.env.PG_USER,
    process.env.PG_PASSWORD,
    {
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    dialect: 'postgres',
});

async function testConnection(alterState = false) {
    try {
        await sequelize.authenticate();
        await sequelize.sync( {alter: alterState} );
        console.log('Успешное подключение к базе данных');
    } catch (error) {
        console.error('Ошибка подключения к базе данных:', error);
    }
}



testConnection()

module.exports = sequelize;
