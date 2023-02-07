import bcrypt from 'bcrypt';
import Sequelize from 'sequelize';
import User from '../sequelize';

const Op = Sequelize.Op;

const BCRYPT_SALT_ROUNDS = 12;
module.exports = app => {
  app.put('/updatePasswordViaEmail', (req, res) => {
    User.findOne({
      where: {
        username: req.body.username,
        resetPasswordToken: req.body.resetPasswordToken,
        resetPasswordExpires: {
          [Op.gt]: Date.now(),
        },
      },
    }).then(user => {
      if (user == null) {
        console.error('el enlace de restablecimiento de contraseña no es válido o ha caducado');
        res.status(403).send('el enlace de restablecimiento de contraseña no es válido o ha caducado');
      } else if (user != null) {
        console.log('el usuario ya existe en la base de datos');
        bcrypt
          .hash(req.body.password, BCRYPT_SALT_ROUNDS)
          .then(hashedPassword => {
            user.update({
              password: hashedPassword,
              resetPasswordToken: null,
              resetPasswordExpires: null,
            });
          })
          .then(() => {
            console.log('contraseña actualizada');
            res.status(200).send({ message: 'contraseña actualizada' });
          });
      } else {
        console.error('no existe ningún usuario en la base de datos para actualizar');
        res.status(401).json('no existe ningún usuario en la base de datos para actualizar');
      }
    });
  });
};