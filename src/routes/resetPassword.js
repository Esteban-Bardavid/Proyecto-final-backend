import Sequelize from 'sequelize';
import User from '../sequelize';


const Op = Sequelize.Op;

module.exports = (app) => {
  app.get('/reset', (req, res) => {
    User.findOne({
      where: {
        resetPasswordToken: req.query.resetPasswordToken,
        resetPasswordExpires: {
          [Op.gt]: Date.now(),
        },
      },
    }).then((user) => {
      if (user == null) {
        console.error('el enlace de restablecimiento de contraseña no es válido o ha caducado');
        res.status(403).send('el enlace de restablecimiento de contraseña no es válido o ha caducado');
      } else {
        res.status(200).send({
          username: user.username,
          message: 'enlace de restablecimiento de contraseña a-ok',
        });
      }
    });
  });
};