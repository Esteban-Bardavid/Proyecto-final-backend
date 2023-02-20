import crypto from 'crypto';
import User from '../sequelize';

require('dotenv').config();

const nodemailer = require('nodemailer');


module.exports = (app) => {

  app.post('/forgotPassword', (req, res) => {
    if (req.body.email === '') {
      res.status(400).send('email requerido');
    }
    console.error(req.body.email);
    User.findOne({
      where: {
        email: req.body.email,
      },
    }).then((user) => {
      if (user === null) {
        console.error('El correo electronico no existe en la base de datos');
        res.status(403).send('no existe en la base de datos');
      } else {
        const token = crypto.randomBytes(20).toString('hex');
        user.update({
          resetPasswordToken: token,
          resetPasswordExpires: Date.now() + 3600000,
        });


        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: `${process.env.EMAIL_ADDRESS}`,
            pass: `${process.env.EMAIL_PASSWORD}`,
          },
        });
        

        const mailOptions = {
          from: 'Bardavidesteban@gmail.com',
          to: `${user.email}`,
          subject: 'Link para resetear password',
          text:
            'Estás recibiendo esto porque tú (u otra persona) has solicitado el restablecimiento de la contraseña de tu cuenta.\n\n'
            + 'Haga clic en el siguiente enlace o péguelo en su navegador para completar el proceso dentro de una hora de haberlo recibido::\n\n'
            + `http://localhost:4000/reset/${token}\n\n`
            + 'Si no solicitó esto, ignore este correo electrónico y su contraseña permanecerá sin cambios.\n',
        };

        console.log('Enviando email');

        transporter.sendMail(mailOptions, (err, response) => {
          if (err) {
            console.error('Hubo un error: ', err);
          } else {
            console.log('Aqui esta la res: ', response);
            res.status(200).json('correo electrónico de recuperación enviado');
          }
        });
      }
    });
  });
};