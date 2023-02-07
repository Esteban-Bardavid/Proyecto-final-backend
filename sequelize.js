import Sequelize from 'sequelize';
import UserModel from '../back-final/src/models/users_model';

const sequelize = new Sequelize('users', 'test', 'test1234', {
  host: 'db',
  dialect: 'mysql',
});

const User = UserModel(sequelize, Sequelize);

sequelize.sync().then(() => {
  
  console.log('Users db and user table have been created');
});

module.exports = User;