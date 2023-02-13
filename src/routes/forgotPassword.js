const EmailModel = require('../models/email_model');
const UsersModel = require('../models/users_model');
const nodemailer = require('nodemailer')

require('dotenv').config();

const nodemailer = require('nodemailer');

module.exports = (app) => {
  app.post('/forgotPassword', (req, res) => {
    if (req.usuario.id === '') {
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
        });
        
        const { title, description } = req.body
        var transport = nodemailer.createTransport({
          host: "sandbox.smtp.mailtrap.io",
          port: 2525,
          auth: {
            user: "f24840f334d194",
            pass: "8543799b40ddf7"
          }
        });

        const mailOptions = {
          from: emailUser.email,
          to: ["Bardavidesteban@gmail.com"],
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